import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';
import cors from 'cors';
import crypto from 'crypto';
import express from 'express';
import session from 'express-session';

const PORT = Number(process.env.PORT || 4000);
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://the-gitsky.vercel.app';
const SESSION_SECRET = process.env.SESSION_SECRET || 'dev-session-secret';
const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID || '';
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET || '';
const GITHUB_CALLBACK_URL = process.env.GITHUB_CALLBACK_URL || 'http://localhost:4000/auth/github/callback';
const SUPABASE_URL = process.env.SUPABASE_URL || '';
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || '';

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.error('Missing SUPABASE_URL or SUPABASE_ANON_KEY in .env');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const pollers = new Map();

const app = express();

app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true
  })
);
app.use(express.json());
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      sameSite: 'lax',
      secure: false,
      maxAge: 1000 * 60 * 60 * 24
    }
  })
);

const fetchGitHubToken = async (code) => {
  const response = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      client_id: GITHUB_CLIENT_ID,
      client_secret: GITHUB_CLIENT_SECRET,
      code,
      redirect_uri: GITHUB_CALLBACK_URL
    })
  });

  if (!response.ok) {
    throw new Error(`Token exchange failed (${response.status})`);
  }

  const payload = await response.json();
  if (!payload.access_token) {
    throw new Error('No access token returned from GitHub');
  }

  return payload.access_token;
};

const fetchGitHubUser = async (token) => {
  const response = await fetch('https://api.github.com/user', {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
      'User-Agent': 'the-gitsky-backend'
    }
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch GitHub user (${response.status})`);
  }

  return response.json();
};

const fetchTotalStars = async (token, username) => {
  let page = 1;
  let total = 0;

  while (true) {
    const response = await fetch(
      `https://api.github.com/users/${encodeURIComponent(username)}/repos?per_page=100&page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/vnd.github+json',
          'User-Agent': 'the-gitsky-backend'
        }
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch repos for ${username} (${response.status})`);
    }

    const repos = await response.json();
    if (!Array.isArray(repos) || repos.length === 0) {
      break;
    }

    for (const repo of repos) {
      total += Number(repo.stargazers_count || 0);
    }

    if (repos.length < 100) {
      break;
    }

    page += 1;
  }

  return total;
};

const storeStarSnapshot = async (username, starCount) => {
  const nowIso = new Date().toISOString();

  const { data, error: upsertErr } = await supabase
    .from('star_snapshots')
    .upsert({ username, star_count: starCount, updated_at: nowIso }, { onConflict: 'username' })
    .select()
    .single();

  if (upsertErr) throw upsertErr;

  const { error: insertErr } = await supabase
    .from('star_history')
    .insert({ username, star_count: starCount, recorded_at: nowIso });

  if (insertErr) throw insertErr;

  return { username, starCount: data.star_count, updatedAt: data.updated_at };
};

const startPollingUserStars = (username, token) => {
  const existing = pollers.get(username);
  if (existing) {
    clearInterval(existing);
  }

  const run = async () => {
    try {
      const stars = await fetchTotalStars(token, username);
      await storeStarSnapshot(username, stars);
    } catch (error) {
      console.error(`[poll:${username}]`, error);
    }
  };

  run();
  const intervalId = setInterval(run, 5000);
  pollers.set(username, intervalId);
};

app.get('/health', (_req, res) => {
  res.json({ ok: true });
});

app.get('/auth/github', (req, res) => {
  if (!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET) {
    res.status(500).json({ error: 'GitHub OAuth is not configured in backend .env' });
    return;
  }

  const state = crypto.randomBytes(16).toString('hex');
  req.session.oauthState = state;
  req.session.returnTo =
    typeof req.query.returnTo === 'string' && req.query.returnTo.length > 0
      ? req.query.returnTo
      : `${FRONTEND_URL}/login`;

  const authorizeUrl = new URL('https://github.com/login/oauth/authorize');
  authorizeUrl.searchParams.set('client_id', GITHUB_CLIENT_ID);
  authorizeUrl.searchParams.set('redirect_uri', GITHUB_CALLBACK_URL);
  authorizeUrl.searchParams.set('scope', 'read:user user:email');
  authorizeUrl.searchParams.set('state', state);

  res.redirect(authorizeUrl.toString());
});

app.get('/auth/github/callback', async (req, res) => {
  try {
    const { code, state } = req.query;
    if (!code || typeof code !== 'string') {
      res.status(400).send('Missing OAuth code');
      return;
    }

    if (!state || state !== req.session.oauthState) {
      res.status(400).send('Invalid OAuth state');
      return;
    }

    const token = await fetchGitHubToken(code);
    const user = await fetchGitHubUser(token);
    const username = user.login;

    req.session.oauthState = null;
    req.session.github = {
      username,
      token
    };

    startPollingUserStars(username, token);

    const returnTo = req.session.returnTo || `${FRONTEND_URL}/login`;
    req.session.returnTo = null;
    const url = new URL(returnTo);
    url.searchParams.set('authorized', '1');
    url.searchParams.set('username', username);
    res.redirect(url.toString());
  } catch (error) {
    console.error(error);
    res.status(500).send('GitHub authorization failed');
  }
});

app.get('/api/me', async (req, res) => {
  const sessionUser = req.session.github;
  if (!sessionUser || !sessionUser.username) {
    res.json({ authenticated: false });
    return;
  }

  const { data: entry } = await supabase
    .from('star_snapshots')
    .select('star_count, updated_at')
    .eq('username', sessionUser.username)
    .maybeSingle();

  res.json({
    authenticated: true,
    username: sessionUser.username,
    starCount: entry?.star_count,
    updatedAt: entry?.updated_at
  });
});

app.get('/api/star-counts/:username/latest', async (req, res) => {
  const { data: entry, error } = await supabase
    .from('star_snapshots')
    .select('username, star_count, updated_at')
    .eq('username', req.params.username)
    .maybeSingle();

  if (error || !entry) {
    res.status(404).json({ error: 'No data for this user yet' });
    return;
  }

  res.json({ username: entry.username, starCount: entry.star_count, updatedAt: entry.updated_at });
});

app.get('/api/star-counts/:username/history', async (req, res) => {
  const { data: rows } = await supabase
    .from('star_history')
    .select('username, star_count, recorded_at')
    .eq('username', req.params.username)
    .order('recorded_at', { ascending: true });

  res.json(
    (rows ?? []).map((r) => ({ username: r.username, starCount: r.star_count, timestamp: r.recorded_at }))
  );
});

app.post('/auth/logout', (req, res) => {
  req.session.destroy(() => {
    res.json({ ok: true });
  });
});

app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
});

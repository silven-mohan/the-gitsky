import 'dotenv/config';
import cors from 'cors';
import crypto from 'crypto';
import express from 'express';
import session from 'express-session';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT || 4000);
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://the-gitsky.vercel.app';
const SESSION_SECRET = process.env.SESSION_SECRET || 'dev-session-secret';
const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID || '';
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET || '';
const GITHUB_CALLBACK_URL = process.env.GITHUB_CALLBACK_URL || `http://the-gitsky.vercel.app/auth/github/callback`;
const DATA_DIR = path.resolve(__dirname, '../data');
const LATEST_FILE = path.resolve(DATA_DIR, 'latest-stars.json');
const HISTORY_FILE = path.resolve(DATA_DIR, 'star-history.json');

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

const ensureDataFiles = async () => {
  await fs.mkdir(DATA_DIR, { recursive: true });

  try {
    await fs.access(LATEST_FILE);
  } catch {
    await fs.writeFile(LATEST_FILE, '{}\n', 'utf8');
  }

  try {
    await fs.access(HISTORY_FILE);
  } catch {
    await fs.writeFile(HISTORY_FILE, '[]\n', 'utf8');
  }
};

const readJson = async (filePath, fallbackValue) => {
  try {
    const raw = await fs.readFile(filePath, 'utf8');
    return JSON.parse(raw);
  } catch {
    return fallbackValue;
  }
};

const writeJson = async (filePath, value) => {
  await fs.writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
};

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

  const latest = await readJson(LATEST_FILE, {});
  latest[username] = {
    username,
    starCount,
    updatedAt: nowIso
  };

  const history = await readJson(HISTORY_FILE, []);
  history.push({
    username,
    starCount,
    timestamp: nowIso
  });

  await writeJson(LATEST_FILE, latest);
  await writeJson(HISTORY_FILE, history);

  return latest[username];
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

  const latest = await readJson(LATEST_FILE, {});
  const entry = latest[sessionUser.username];

  res.json({
    authenticated: true,
    username: sessionUser.username,
    starCount: entry?.starCount,
    updatedAt: entry?.updatedAt
  });
});

app.get('/api/star-counts/:username/latest', async (req, res) => {
  const latest = await readJson(LATEST_FILE, {});
  const username = req.params.username;
  const entry = latest[username];

  if (!entry) {
    res.status(404).json({ error: 'No data for this user yet' });
    return;
  }

  res.json(entry);
});

app.get('/api/star-counts/:username/history', async (req, res) => {
  const history = await readJson(HISTORY_FILE, []);
  const username = req.params.username;
  const rows = history.filter((row) => row.username === username);
  res.json(rows);
});

app.post('/auth/logout', (req, res) => {
  req.session.destroy(() => {
    res.json({ ok: true });
  });
});

await ensureDataFiles();

app.listen(PORT, () => {
  console.log(`Backend listening on http://the-gitsky.vercel.app/auth/github/callback`);
});

import { Router } from 'express';
import jwt from 'jsonwebtoken';
import {
  exchangeCodeForAccessToken,
  fetchGitHubProfile,
  fetchGitHubStarCount
} from '../services/githubService.js';
import { upsertGitUser } from '../services/supabaseService.js';

const router = Router();

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID || '';
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET || '';
const GITHUB_CALLBACK_URL = process.env.GITHUB_CALLBACK_URL || '';
const FRONTEND_URL = process.env.FRONTEND_URL || '';
const JWT_SECRET = process.env.JWT_SECRET || '';

router.get('/github', async (_req, res) => {
  try {
    if (!GITHUB_CLIENT_ID || !GITHUB_CALLBACK_URL) {
      res.status(500).json({ error: 'Missing GITHUB_CLIENT_ID or GITHUB_CALLBACK_URL' });
      return;
    }

    const authorizeUrl = new URL('https://github.com/login/oauth/authorize');
    authorizeUrl.searchParams.set('client_id', GITHUB_CLIENT_ID);
    authorizeUrl.searchParams.set('scope', 'read:user');
    authorizeUrl.searchParams.set('redirect_uri', GITHUB_CALLBACK_URL);

    res.redirect(authorizeUrl.toString());
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown authorization error';
    res.status(500).json({ error: message });
  }
});

router.get('/github/callback', async (req, res) => {
  try {
    const { code } = req.query;
    if (!code || typeof code !== 'string') {
      res.status(400).json({ error: 'Missing OAuth code' });
      return;
    }

    if (!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET || !GITHUB_CALLBACK_URL || !FRONTEND_URL || !JWT_SECRET) {
      res.status(500).json({
        error:
          'Missing one or more required env variables: GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, GITHUB_CALLBACK_URL, FRONTEND_URL, JWT_SECRET'
      });
      return;
    }

    const accessToken = await exchangeCodeForAccessToken({
      code,
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      redirectUri: GITHUB_CALLBACK_URL
    });

    const profile = await fetchGitHubProfile(accessToken);
    const githubId = profile.id;
    const username = profile.login;
    const starcount = await fetchGitHubStarCount({ username, accessToken });

    await upsertGitUser({
      username,
      starcount
    });

    const token = jwt.sign(
      {
        github_id: githubId,
        username
      },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    const redirectUrl = new URL('/login', FRONTEND_URL);
    redirectUrl.searchParams.set('token', token);
    res.redirect(redirectUrl.toString());
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown callback error';
    res.status(500).json({ error: message });
  }
});

export default router;

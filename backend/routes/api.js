import { Router } from 'express';
import supabase from '../services/supabaseClient.js';
import { requireAuth } from '../middleware/authMiddleware.js';

const router = Router();

const getGitUserByUsername = async (username) => {
  const { data, error } = await supabase
    .from('gitusers')
    .select('username, starcount')
    .eq('username', username)
    .single();

  if (error) {
    throw error;
  }

  return data;
};

const getAllGitUsers = async () => {
  const { data, error } = await supabase
    .from('gitusers')
    .select('username, starcount')
    .order('starcount', { ascending: false });

  if (error) {
    throw error;
  }

  return data || [];
};

router.get('/me', requireAuth, async (req, res) => {
  const username = typeof req.auth?.username === 'string' ? req.auth.username : '';

  if (!username) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  try {
    const data = await getGitUserByUsername(username);

    res.json({
      username: data.username,
      star_count: data.starcount
    });
  } catch (error) {
    if (error?.code === 'PGRST116') {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    res.status(500).json({ error: 'Database error' });
  }
});

router.get('/user-star', requireAuth, async (req, res) => {
  const username = typeof req.auth?.username === 'string' ? req.auth.username : '';

  if (!username) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  try {
    const data = await getGitUserByUsername(username);

    res.json({
      username: data.username,
      star_count: Number(data.starcount) || 0
    });
  } catch (error) {
    if (error?.code === 'PGRST116') {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    res.status(500).json({ error: 'Database error' });
  }
});

router.get('/stars', requireAuth, async (_req, res) => {
  try {
    const users = await getAllGitUsers();
    res.json({
      users: users.map((user) => ({
        username: user.username,
        star_count: Number(user.starcount) || 0
      }))
    });
  } catch {
    res.status(500).json({ error: 'Database error' });
  }
});

export default router;

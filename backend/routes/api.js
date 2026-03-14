import { Router } from 'express';
import supabase from '../services/supabaseClient.js';
import { requireAuth } from '../middleware/authMiddleware.js';

const router = Router();

router.get('/me', requireAuth, async (req, res) => {
  const username = typeof req.auth?.username === 'string' ? req.auth.username : '';

  if (!username) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  try {
    const { data, error } = await supabase
      .from('gitusers')
      .select('username, starcount')
      .eq('username', username)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        res.status(404).json({ error: 'User not found' });
        return;
      }

      res.status(500).json({ error: 'Database error' });
      return;
    }

    res.json({
      username: data.username,
      star_count: data.starcount
    });
  } catch {
    res.status(500).json({ error: 'Database error' });
  }
});

export default router;

import { Router } from 'express';
import supabase from '../services/supabaseClient.js';

const router = Router();

router.get('/me', async (req, res) => {
  const username = typeof req.query.username === 'string' ? req.query.username.trim() : '';

  if (!username) {
    res.status(400).json({ error: 'username required' });
    return;
  }

  try {
    const { data, error } = await supabase
      .from('gitusers')
      .select('*')
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

    res.json(data);
  } catch {
    res.status(500).json({ error: 'Database error' });
  }
});

export default router;

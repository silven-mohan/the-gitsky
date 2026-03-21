import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import authRoutes from './routes/auth.js';
import apiRoutes from './routes/api.js';

const PORT = Number(process.env.PORT || 4000);
const CANONICAL_FRONTEND_URL = 'https://www.thegitsky.me';
const frontendUrlFromEnv = (process.env.FRONTEND_URL || '').trim();
const FRONTEND_URL =
  !frontendUrlFromEnv || frontendUrlFromEnv.includes('vercel.app') ? CANONICAL_FRONTEND_URL : frontendUrlFromEnv;

if (!FRONTEND_URL) {
  throw new Error('FRONTEND_URL must be configured');
}

const app = express();

app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true
  })
);
app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ ok: true });
});

app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});

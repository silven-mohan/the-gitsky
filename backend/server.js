import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import authRoutes from './routes/auth.js';

const PORT = Number(process.env.PORT || 4000);
const FRONTEND_URL = process.env.FRONTEND_URL || '';

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

app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});

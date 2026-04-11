import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import chatRouter from './routes/chat';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = (process.env.CLIENT_URL || 'http://localhost:3500').split(',').map(o => o.replace(/\/+$/, ''));
app.use(cors({ origin: (origin, cb) => cb(null, !origin || allowedOrigins.includes((origin || '').replace(/\/+$/, ''))) }));
app.use(express.json());

app.use('/api/chat', chatRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

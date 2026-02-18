import express from 'express';
import sensorRoutes from './routes/sensorRoutes';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', sensorRoutes);

// Health check (VERY IMPORTANT)
app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

const PORT = process.env.API_PORT || 4000;

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});

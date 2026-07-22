import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes.js';
import collectionRoutes from './routes/collectionRoutes.js';
import appointmentRoutes from './routes/appointmentRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/products', productRoutes);
app.use('/api/collections', collectionRoutes);
app.use('/api/appointments', appointmentRoutes);

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'HMK Eyewear API Backend Server Running Smoothly' });
});

app.listen(PORT, () => {
  console.log(`🚀 HMK Eyewear Backend Server running on http://localhost:${PORT}`);
});

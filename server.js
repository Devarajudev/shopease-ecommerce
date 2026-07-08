import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', message: 'Shopease Ecommerce backend is running' });
});

app.get('/api/products', (_req, res) => {
  res.json([
    { id: 1, name: 'Starter Bundle', price: 29.99 },
    { id: 2, name: 'Quick Cart', price: 49.5 }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on http://127.0.0.1:${PORT}`);
});

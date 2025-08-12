import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/connectDB.js';

// Load environment variables - works with dotenv@17.2.1
dotenv.config();

//import routes
import adminRoutes from './routes/adminRoutes.js';
import authRoutes from './routes/authRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import newsletterRoutes from './routes/newsletterRoutes.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World from Express!');
  console.log(`Request received at ${new Date().toISOString()}`);
});

// mount routes
app.use('/api/admin', adminRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/newsletter', newsletterRoutes);
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);


// current local dev server block with:
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
  }
};

// Start server in all environments
startServer();

// Export for Vercel
export default app;
// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const app = express();
// const authRoutes = require('./routes/auth');

// app.use(cors());
// app.use(express.json());

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log("✅ Connected to MongoDB"))
//   .catch((err) => console.error("❌ MongoDB connection failed", err));


// // Connect to MongoDB
// mongoose.connect('your-mongodb-connection-string-here', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => console.log('MongoDB connected'))
//   .catch(err => console.error('MongoDB connection error:', err));
// const Product = require('./models/Product');

// app.get('/api/products', async (req, res) => {
//   const products = await Product.find();
//   res.json(products);
// });


// app.use('/api/auth', authRoutes); // 👈 Now accessible at /api/auth/register & /login
// app.get('/api/products', (req, res) => {
//   res.json([
//     { id: 1, name: 'Product A', price: 10 },
//     { id: 2, name: 'Product B', price: 20 },
//     { id: 3, name: 'Product C', price: 30 },  // 👈 New
//     { id: 4, name: 'Product D', price: 40 },
//     { id: 5, name: 'Product E', price: 50 }
//   ]);
// });

// app.get('/', (req, res) => {
//   res.send('API running');
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
// const userRoutes = require('./routes/user');
// app.use('/api/user', userRoutes);
// app.post('/api/products/seed', async (req, res) => {
//   await Product.deleteMany({});
//   await Product.insertMany([
//     { name: 'Product A', price: 10 },
//     { name: 'Product B', price: 20 },
//     { name: 'Product C', price: 30 },
//   ]);
//   res.send('Seeded');
// });


require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Import routes and models
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const Product = require('./models/Product');

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection failed", err));

// ✅ Routes
app.get('/', (req, res) => {
  res.send('API running');
});

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

// ✅ Get products from MongoDB
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error('Failed to fetch products:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// ✅ Seed products (change to GET if you want to open in browser)
app.get('/api/products/seed', async (req, res) => {
  try {
    await Product.deleteMany({});
    const seeded = await Product.insertMany([
      { name: 'Product A', price: 10, title: 'Shirt', image: 'https://via.placeholder.com/150' },
      { name: 'Product B', price: 20, title: 'Pants', image: 'https://via.placeholder.com/150' },
      { name: 'Product C', price: 30, title: 'Shoes', image: 'https://via.placeholder.com/150' },
    ]);
    res.json({ message: 'Seeded', products: seeded });
  } catch (err) {
    console.error('Seeding error:', err);
    res.status(500).json({ error: 'Seed failed' });
  }
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));

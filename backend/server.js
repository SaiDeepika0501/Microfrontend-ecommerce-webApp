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


// require('dotenv').config();
// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// // Create Express app
// const app = express();

// // Middleware
// app.use(express.json());
// app.use(cors());

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/productsDB', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('✅ Connected to MongoDB'))
// .catch((err) => console.error('❌ MongoDB connection error:', err));

// // Define Product schema and model
// const productSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   price: { type: Number, required: true },
//   image: { type: String, required: false }, // ✅ Add image field
// });

// const Product = mongoose.model('Product', productSchema);

// // Routes

// // POST /api/products — Add new product
// app.post('/api/products', async (req, res) => {
//   try {
//     const { name, price, image } = req.body; // ✅ Extract image
//     const newProduct = new Product({ name, price, image }); // ✅ Include image
//     await newProduct.save();
//     res.status(201).json(newProduct);
//   } catch (err) {
//     console.error('❌ Error adding product:', err);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Optionally: GET /api/products — Fetch all products
// app.get('/api/products', async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.json(products);
//   } catch (err) {
//     console.error('❌ Error fetching products:', err);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const multer = require('multer');
// const path = require('path');
// const fs = require('fs');

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Serve uploaded images statically
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // MongoDB connection
// mongoose.connect('mongodb://localhost:27017/productsDB', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('✅ MongoDB connected'))
// .catch(err => console.error('❌ MongoDB connection error:', err));

// // Product schema
// const productSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   price: { type: Number, required: true },
//   image: { type: String, required: false }, // Path to uploaded image
// });

// const Product = mongoose.model('Product', productSchema);

// // Multer config for image upload
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     const dir = 'uploads/';
//     if (!fs.existsSync(dir)) {
//       fs.mkdirSync(dir);
//     }
//     cb(null, dir);
//   },
//   filename: (req, file, cb) => {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
//     cb(null, uniqueSuffix + path.extname(file.originalname)); // e.g., 123456.png
//   },
// });
// const upload = multer({ storage });

// // POST /api/products — with image file
// app.post('/api/products', upload.single('image'), async (req, res) => {
//   try {
//     const { name, price } = req.body;
//     const image = req.file ? `/uploads/${req.file.filename}` : '';

//     const newProduct = new Product({ name, price, image });
//     await newProduct.save();

//     res.status(201).json(newProduct);
//   } catch (err) {
//     console.error('❌ Error uploading product:', err);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // GET all products
// app.get('/api/products', async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.json(products);
//   } catch (err) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running at http://localhost:${PORT}`);
// });
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const productRoutes = require("./routes/products");

// const app = express();
// const PORT = 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Connect to MongoDB
// mongoose.connect("mongodb://localhost:27017/your-db-name", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => console.log("✅ MongoDB connected"))
//   .catch((err) => console.error("❌ MongoDB connection error:", err));

// // Routes
// app.use("/api/products", productRoutes);

// // Start server
// app.listen(PORT, () => {
//   console.log(`🚀 Server running at http://localhost:${PORT}`);
// });
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const productRoutes = require("./routes/products");

// const app = express();
// const PORT = 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Connect to MongoDB
// mongoose.connect("mongodb://localhost:27017/productdb", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => console.log("✅ MongoDB connected"))
//   .catch((err) => console.error("❌ MongoDB connection error:", err));

// // Routes
// app.use("/api/products", productRoutes);

// // Start server
// app.listen(PORT, () => {
//   console.log(`🚀 Server running at http://localhost:${PORT}`);
// });
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productRoutes = require("./routes/products");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/productdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
app.use("/api/products", productRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});


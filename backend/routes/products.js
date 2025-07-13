// backend/routes/products.js
// const express = require("express");
// const router = express.Router();
// const Product = require('../models/Product');
// // Dummy products
// router.get("/", (req, res) => {
//   res.json([
//     { id: 1, name: "Product A", price: 100 },
//     { id: 2, name: "Product B", price: 150 }
//   ]);
// });

// module.exports = router;
// const express = require("express");
// const router = express.Router();
// const Product = require("../models/Product");

// // GET /api/products → Fetch products from MongoDB
// router.get("/", async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.json(products);
//   } catch (err) {
//     console.error("Error fetching products:", err);
//     res.status(500).json({ error: "Server error fetching products" });
//   }
// });

// // POST /api/products → Add a new product
// router.post("/", async (req, res) => {
//   try {
//     const { name, price, image } = req.body;

//     if (!name || !price) {
//       return res.status(400).json({ error: "Name and price are required" });
//     }

//     const newProduct = new Product({
//       name,
//       price,
//       image, // Optional: image URL or file path
//     });

//     const savedProduct = await newProduct.save();
//     res.status(201).json(savedProduct);
//   } catch (err) {
//     console.error("Error adding product:", err);
//     res.status(500).json({ error: "Server error while adding product" });
//   }
// });

// module.exports = router;
const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// GET /api/products → Fetch all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error("❌ Error fetching products:", err.message);
    res.status(500).json({ error: "Server error fetching products" });
  }
});

// POST /api/products → Add a new product
router.post("/", async (req, res) => {
  try {
    const { name, price, image , category } = req.body;

    if (!name || !price) {
      return res.status(400).json({ error: "Name and price are required" });
    }

    const newProduct = new Product({ name, price, image , category});
    const savedProduct = await newProduct.save();

    res.status(201).json(savedProduct);
  } catch (err) {
    console.error("❌ Error adding product:", err.message);
    res.status(500).json({ error: "Server error while adding product" });
  }
});

module.exports = router;


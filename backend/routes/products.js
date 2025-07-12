// backend/routes/products.js
const express = require("express");
const router = express.Router();

// Dummy products
router.get("/", (req, res) => {
  res.json([
    { id: 1, name: "Product A", price: 100 },
    { id: 2, name: "Product B", price: 150 }
  ]);
});

module.exports = router;

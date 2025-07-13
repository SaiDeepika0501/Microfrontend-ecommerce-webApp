// const mongoose = require('mongoose');

// // models/Product.js

// 
// const mongoose = require('mongoose');

// // Define the schema
// const productSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   price: { type: Number, required: true },
//   image: { type: String }, // Optional image field (URL or filename)
//   // Add more fields as needed (e.g., description, category)
// }, {
//   timestamps: true, // Optional: Adds createdAt and updatedAt fields
// });

// // Create the model
// const Product = mongoose.model('Product', productSchema);
// module.exports = Product;
// const mongoose = require("mongoose");

// const productSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   price: { type: Number, required: true },
//   image: { type: String }, // Optional image URL
// }, {
//   timestamps: true
// });

// module.exports = mongoose.model("Product", productSchema);
//const mongoose = require("mongoose");
// const Product = require("./models/Product"); // adjust path if needed

// // Connect to your MongoDB (change DB name if different)
// mongoose.connect("mongodb://localhost:27017/myshop", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => {
//     console.log("✅ Connected to MongoDB");
//     return Product.find({ category: { $exists: true } }); // Finds products with category
//   })
//   .then((products) => {
//     console.log("📦 Products with a category:");
//     console.log(products);
//   })
//   .catch((err) => {
//     console.error("❌ Error:", err);
//   })
//   .finally(() => {
//     mongoose.disconnect();
//   });
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String }, // Optional image URL
  category: { type: String }, // Optional category field
}, {
  timestamps: true // Automatically adds createdAt and updatedAt
});

module.exports = mongoose.model("Product", productSchema);

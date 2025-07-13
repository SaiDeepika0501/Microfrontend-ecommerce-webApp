// const mongoose = require("mongoose");
// const Product = require("./models/Product"); // Make sure path and name match!

// mongoose.connect("mongodb://localhost:27017/myshop", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => {
//     console.log("✅ Connected to MongoDB");
//     return Product.find({ category: { $exists: true } });
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
const Product = require("./models/Product"); // ✅ Make sure path is correct

// ✅ Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/myshop")
  .then(() => {
    console.log("✅ Connected to MongoDB");
    // 🔍 Find products with a defined 'category' field
    return Product.find({ category: { $exists: true, $ne: null } });
  })
  .then((productsWithCategory) => {
    console.log("📦 Products with a category:");
    if (productsWithCategory.length === 0) {
      console.log("⚠️ No products with 'category'. Showing all products for debug:");
      return Product.find(); // Fetch all for inspection
    } else {
      console.log(productsWithCategory);
      return [];
    }
  })
  .then((allProducts) => {
    if (allProducts.length > 0) {
      console.log("📋 All Products in DB:");
      console.log(allProducts);
    }
  })
  .catch((err) => {
    console.error("❌ Error:", err);
  })
  .finally(() => {
    mongoose.disconnect();
  });


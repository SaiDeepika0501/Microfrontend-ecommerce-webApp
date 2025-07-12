// import React from "react";
// import ProductList from "./components/ProductList";

// export default function App({ onAddToCart }) {
//   return (
//     <div>
//       <h2>Products App</h2>
//        <ProductList onAddToCart={onAddToCart} />
//     </div>
//   );
// }
// src/App.jsx
// import React from 'react';
// import ProductList from './components/ProductList';

// const App = ({ onAddToCart }) => {
//   return (
//     <div>
//       <h1>Products App</h1>
//       <ProductList onAddToCart={onAddToCart} />
//     </div>
//   );
// };

// export default App;
// Example usage in App.js or another parent
import React, { useEffect, useState } from 'react';
import ProductList from './components/ProductList';
import { fetchProducts } from './services/productService';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts).catch(console.error);
  }, []);

  return (
    <div>
      <h1>Our Products</h1>
      <ProductList products={products} />
    </div>
  );
}

export default App;

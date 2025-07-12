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
import React from 'react';
import ProductList from './components/ProductList';

const App = ({ onAddToCart }) => {
  return (
    <div>
      <h1>Products App</h1>
      <ProductList onAddToCart={onAddToCart} />
    </div>
  );
};

export default App;

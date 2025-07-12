// import React from "react";

// const dummyProducts = [
//   { id: 1, name: "T-Shirt", price: "$20" },
//   { id: 2, name: "Shoes", price: "$50" },
// ];

// export default function ProductList() {
//   return (
//     <div>
//       <h3>Available Products:</h3>
//       <ul>
//         {dummyProducts.map((p) => (
//           <li key={p.id}>
//             {p.name} - {p.price}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// import React from 'react';

// const products = [
//   { id: 1, name: 'Product A', price: 49 },
//   { id: 2, name: 'Product B', price: 79 },
// ];

// const ProductList = ({ onAddToCart }) => {
//   return (
//     <div style={{ padding: '2rem' }}>
//       <h3>Product List</h3>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id} style={{ marginBottom: '10px' }}>
//             {product.name} - ${product.price}
//             <button
//               style={{ marginLeft: '10px' }}
//               onClick={() => {
//                 console.log('🛒 Product added:', product);
//                 if (onAddToCart) onAddToCart(product);
//               }}
//             >
//               Add to Cart
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProductList;
// src/components/ProductList.jsx
// import React from 'react';

// const ProductList = ({ onAddToCart }) => {
//   const products = [
//     { id: 1, name: 'Product A', price: 49 },
//     { id: 2, name: 'Product B', price: 79 },
//   ];

//   return (
//     <div style={{ padding: '2rem' }}>
//       <h2>Products</h2>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//             {product.name} - ${product.price}
//             <button onClick={() => onAddToCart?.(product)} style={{ marginLeft: '1rem' }}>
//               Add to Cart
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProductList;
// products/src/ProductList.js
// import React from 'react';

// const dummyProducts = [
//   { id: 1, name: 'Product A', price: 49 },
//   { id: 2, name: 'Product B', price: 79 },
// ];

// const ProductList = ({ onAddToCart }) => {
//   return (
//     <div style={{ padding: '1rem' }}>
//       <h2>🛍️ Products</h2>
//       {dummyProducts.map((product) => (
//         <div key={product.id} style={{ marginBottom: '1rem' }}>
//           {product.name} - ${product.price}
//           <button
//             onClick={() => onAddToCart(product)}
//             style={{ marginLeft: '1rem' }}
//           >
//             🛒 Buy
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductList;
import React from "react";

const dummyProducts = [
  { id: 1, name: "iPhone 15", price: 999 },
  { id: 2, name: "MacBook Air", price: 1299 },
];

const ProductList = ({ onAddToCart }) => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h2>🛍️ Products</h2>
      <ul>
        {dummyProducts.map((product) => (
          <li key={product.id} style={{ marginBottom: '10px' }}>
            {product.name} - ${product.price}
            <button
              onClick={() => onAddToCart(product)}
              style={{ marginLeft: '10px' }}
            >
              🛒 Buy
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

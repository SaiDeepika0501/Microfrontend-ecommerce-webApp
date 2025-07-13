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
// import React from "react";

// const dummyProducts = [
//   { id: 1, name: "iPhone 15", price: 999 },
//   { id: 2, name: "MacBook Air", price: 1299 },
// ];

// const ProductList = ({ onAddToCart }) => {
//   return (
//     <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
//       <h2>🛍️ Products</h2>
//       <ul>
//         {dummyProducts.map((product) => (
//           <li key={product.id} style={{ marginBottom: '10px' }}>
//             {product.name} - ${product.price}
//             <button
//               onClick={() => onAddToCart(product)}
//               style={{ marginLeft: '10px' }}
//             >
//               🛒 Buy
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProductList;


// src/components/ProductList.js
// import React, { useEffect, useState } from "react";
// import { fetchProducts } from "../services/productService";
// import './ProductList.css'; 
// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const loadProducts = async () => {
//       try {
//         const data = await fetchProducts();
//         setProducts(data);
//       } catch (err) {
//         console.error("Failed to load products", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     loadProducts();
//   }, []);

//   if (loading) return <p>Loading products...</p>;
//  // import a CSS file (create this)

// function ProductList({ products }) {
//   return (
//     <div className="product-container">
//       {products.map(product => (
//         <div key={product.id} className="product-card">
//           <h3>{product.name}</h3>
//           <p>${product.price}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ProductList;

//   return (
//     <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
//     {products.map((p, index) => (
//   <div key={p.id || `${p.title}-${index}`} style={{ border: "1px solid #ccc", padding: "12px" }}>
// <img src={p.image} alt={p.title} width={150} />
//           <h3>{p.name}</h3>
//           <h3>{p.title}</h3>
//           <p>${p.price}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductList;
// src/components/ProductList.jsx
// import React from "react";
// import './ProductList.css'; // Import CSS for styling
// import AddProductForm from './AddProductForm';

// function ProductList({ products }) {
//   <AddProductForm onProductAdded={loadProducts} />
//   if (!products || products.length === 0) {
//     return <p>No products available.</p>;
//   }

//   return (
//     <div className="product-container">
//       {products.map((product, index) => (
//         <div key={product._id || product.id || index} className="product-card">
//           {product.image && <img src={product.image} alt={product.name} width={150} />}
//           <h3>{product.name}</h3>
//           {product.title && <h4>{product.title}</h4>}
//           <p>${product.price}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ProductList;
// import React, { useEffect, useState } from 'react';
// import { fetchProducts } from '../services/productService';
// import AddProductForm from './AddProductForm';
// import axios from 'axios';

// function ProductList() {
//   const [products, setProducts] = useState([]);
//    const [editId, setEditId] = useState(null);
//   const [editName, setEditName] = useState('');
//   const [editPrice, setEditPrice] = useState('');

//   const loadProducts = async () => {
//     const data = await fetchProducts();
//     setProducts(data);
//   };

//   useEffect(() => {
//     loadProducts();
//   }, []);
//   const deleteProduct = async (id) => {
//   try {
//     await axios.delete(`http://localhost:5000/api/products/${id}`);
//     loadProducts(); // Refresh list
//   } catch (err) {
//     console.error('Delete failed', err);
//   }
// };const editProduct = async (id) => {
//     try {
//       await axios.put(`http://localhost:5000/api/products/${id}`, {
//         name: editName,
//         price: parseFloat(editPrice),
//       });
//       setEditId(null); // Exit edit mode
//       loadProducts(); // Refresh product list
//     } catch (err) {
//       console.error('Edit failed', err);
//     }
//   };

//   return (
//     <div>
//       <h2>Products</h2>
//       <AddProductForm onProductAdded={loadProducts} /> {/* 👈 Add Form */}
//       <div className="product-container">
//          {products.map(product => (
//           <div key={product._id} className="product-card">
//             {editId === product._id ? (
//               <>
//                 <input
//                   value={editName}
//                   onChange={(e) => setEditName(e.target.value)}
//                 />
//                 <input
//                   type="number"
//                   value={editPrice}
//                   onChange={(e) => setEditPrice(e.target.value)}
//                 />
//                 <button onClick={() => editProduct(product._id)}>💾 Save</button>
//                 <button onClick={() => setEditId(null)}>❌ Cancel</button>
//               </>
//             ) : (
//               <>
//                 <h3>{product.name}</h3>
//                 <p>${product.price}</p>
//                 <button
//                   onClick={() => {
//                     setEditId(product._id);
//                     setEditName(product.name);
//                     setEditPrice(product.price);
//                   }}
//                 >
//                   ✏️ Edit
//                 </button>
//                 <button onClick={() => deleteProduct(product._id)}>🗑 Delete</button>
//               </>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProductList;
        
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddProductForm from './AddProductForm';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState('');
  const [editPrice, setEditPrice] = useState('');

  const loadProducts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/products');
      setProducts(res.data);
    } catch (err) {
      console.error('Error loading products:', err.message);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      loadProducts();
    } catch (err) {
      console.error('Delete failed', err.message);
    }
  };

  const editProduct = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/products/${id}`, {
        name: editName,
        price: parseFloat(editPrice),
      });
      setEditId(null);
      loadProducts();
    } catch (err) {
      console.error('Edit failed', err.message);
    }
  };

  return (
    <div>
      <h2>Products</h2>
      <AddProductForm onProductAdded={loadProducts} />
      <div className="product-container">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            {editId === product._id ? (
              <>
                <input value={editName} onChange={(e) => setEditName(e.target.value)} />
                <input
                  type="number"
                  value={editPrice}
                  onChange={(e) => setEditPrice(e.target.value)}
                />
                <button onClick={() => editProduct(product._id)}>💾 Save</button>
                <button onClick={() => setEditId(null)}>❌ Cancel</button>
              </>
            ) : (
              <>
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <button
                  onClick={() => {
                    setEditId(product._id);
                    setEditName(product.name);
                    setEditPrice(product.price);
                  }}
                >
                  ✏️ Edit
                </button>
                <button onClick={() => deleteProduct(product._id)}>🗑 Delete</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;


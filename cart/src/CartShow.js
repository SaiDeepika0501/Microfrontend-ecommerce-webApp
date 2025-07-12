// // src/CartShow.js
// import React, { useState } from 'react';

// const dummyCartItems = [
//   { id: 1, name: 'Product A', price: 49 },
//   { id: 2, name: 'Product B', price: 79 },
// ];

// const CartShow = () => {
//   const [items, setItems] = useState(dummyCartItems);

//   const removeItem = (id) => {
//     setItems((prev) => prev.filter((item) => item.id !== id));
//   };

//   const total = items.reduce((sum, item) => sum + item.price, 0);

//   return (
//     <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
//       <h2>🛒 Cart Items</h2>
//       <ul>
//         {items.map((item) => (
//           <li key={item.id} style={{ marginBottom: '10px' }}>
//             {item.name} - ${item.price}
//             <button onClick={() => removeItem(item.id)} style={{ marginLeft: '10px' }}>
//               ❌ Remove
//             </button>
//           </li>
//         ))}
//       </ul>
//       <hr />
//       <h3>Total: ${total}</h3>
//     </div>
//   );
// };

// export default CartShow;


// src/CartShow.js
// import React from 'react';

// const CartShow = ({ items = [], onRemove }) => {
//   const total = items.reduce((sum, item) => sum + item.price, 0);

//   return (
//     <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
//       <h2>🛒 Cart Items</h2>
//       <ul>
//         {items.map((item) => (
//           <li key={item.id} style={{ marginBottom: '10px' }}>
//             {item.name} - ${item.price}
//             {onRemove && (
//               <button onClick={() => onRemove(item.id)} style={{ marginLeft: '10px' }}>
//                 ❌ Remove
//               </button>
//             )}
//           </li>
//         ))}
//       </ul>
//       <hr />
//       <h3>Total: ${total}</h3>
//     </div>
//   );
// };

// export default CartShow;
// src/CartShow.js
import React, { useEffect, useState } from "react";
import { subscribe } from "./cartState";

const CartShow = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const unsubscribe = subscribe(setItems);
    return () => unsubscribe();
  }, []);

  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h2>🛒 Cart Items</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <hr />
      <h3>Total: ${total}</h3>
    </div>
  );
};

export default CartShow;

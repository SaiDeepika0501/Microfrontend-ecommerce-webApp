/*import React, { useState, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AuthWrapper from './components/AuthWrapper';
import ProductsPage from './components/ProductsPage'; // Your dummy component

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/auth"
            element={<AuthWrapper onSignIn={() => {
              console.log('📌 onSignIn called from container');
              setIsSignedIn(true); 
               navigate("/products"); // ✅ trigger render of Products
            }} />}
          />
          <Route
            path="/products"
            element={
              isSignedIn ? (
                <ProductsPage />
              ) : (
                <Navigate to="/auth" />
              )
            }
          />
          <Route
            path="/"
            element={
              isSignedIn ? <Navigate to="/products" /> : <Navigate to="/auth" />
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
*/
/*import React, { lazy, Suspense } from "react";

const CartShow = lazy(() => import("cart/CartShow")); // 👈 Federated import

export default function App() {
  return (
    <div>
      <h1>🛒 Container App</h1>
      <Suspense fallback={<div>Loading Cart...</div>}>
        <CartShow />
      </Suspense>
    </div>
  );
}*/
// import React, { lazy, Suspense } from "react";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// // 👇 Federated component import
// const CartShow = lazy(() => import("cart/CartShow"));

// export default function App() {
//   return (
//     <BrowserRouter>
//       <div>
//         <h1>🧩 Container App</h1>
//         <nav>
//           <Link to="/">Home</Link> | <Link to="/cart">Cart</Link>
//         </nav>

//         <Suspense fallback={<div>Loading...</div>}>
//           <Routes>
//             <Route path="/" element={<div>🏠 Home Page from Container</div>} />
//             <Route path="/cart" element={<CartShow />} />
//           </Routes>
//         </Suspense>
//       </div>
//     </BrowserRouter>
//   );
// }
// import { useState } from 'react';
// import { lazy } from 'react';
// const ProductList = React.lazy(() => import("products/ProductList"));

// const CartApp = lazy(() => import('cart/CartApp'));

// function App() {
//   const [isSignedIn, setIsSignedIn] = useState(false);
//   const [cartItems, setCartItems] = useState([]);

//   const handleSignIn = () => {
//     setIsSignedIn(true);
//   };

//   const addToCart = (product) => {
//     setCartItems(prev => [...prev, product]);
//     console.log("📦 Added to cart:", product);
//   };

//   return (
//     <Routes>
//       <Route path="/auth" element={<AuthApp onSignIn={handleSignIn} />} />
//       <Route path="/products" element={<ProductsApp onAddToCart={addToCart} />} />
//       <Route
//         path="/cart"
//         element={isSignedIn ? <CartApp items={cartItems} /> : <Navigate to="/auth" />}
//       />
//       <Route path="/" element={<Navigate to="/products" />} />
//     </Routes>
//   );
// }

// container/src/App.jsx
// import React, { Suspense, useState } from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// const ProductList = React.lazy(() => import("products/ProductList"));
// const AuthApp = React.lazy(() => import("auth/AuthApp").then((module) => {
//     if (!module?.default) {
//       throw new Error("Failed to load AuthApp");
//     }
//     return { default: module.default };
//   }));
// const CartShow = React.lazy(() => import("cart/CartShow"));

// export default function App() {
//   const [isSignedIn, setIsSignedIn] = useState(false);

//   return (
//     <BrowserRouter>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Routes>
//           <Route path="/" element={<Navigate to={isSignedIn ? "/products" : "/auth"} />} />
//           <Route
//             path="/auth"
//             element={
//               isSignedIn ? <Navigate to="/products" /> : <AuthApp onSignIn={() => setIsSignedIn(true)} />
//             }
//           />
//           <Route
//             path="/products"
//             element={
//               isSignedIn ? <ProductList /> : <Navigate to="/auth" />
//             }
//           />
//           <Route
//             path="/cart"
//             element={
//               isSignedIn ? <CartShow /> : <Navigate to="/auth" />
//             }
//           />
//         </Routes>
//       </Suspense>
//     </BrowserRouter>
//   );
// }

// shell/src/App.jsx

// import React, { Suspense, useState } from "react";
// import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";

// const ProductList = React.lazy(() => import("products/ProductList"));
// const AuthApp = React.lazy(() => import("auth/AuthApp"));
// const CartShow = React.lazy(() => import("cart/CartShow"));

// export default function App() {
//   const [isSignedIn, setIsSignedIn] = useState(false);
//    const [cartItems, setCartItems] = useState([]); // ✅ MOVE HERE

//   const handleAddToCart = (item) => {
//     setCartItems((prev) => [...prev, item]);
//   };

//   return (
//     <BrowserRouter>
//       {/* ✅ Navigation Bar added here */}
//       <div>
//       <nav style={{ padding: '10px', borderBottom: '1px solid gray' }}>
//         <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
//         <Link to="/cart" style={{ marginRight: '15px' }}>Cart</Link>
//         <Link to="/auth">Login</Link>
//       </nav>

//       <Suspense fallback={<div>Loading...</div>}>
//         <Routes>
//           <Route
//             path="/auth"
//             element={
//               isSignedIn ? <Navigate to="/products" /> : <AuthApp onSignIn={() => setIsSignedIn(true)} />
//             }
//           />
//           <Route
//   path="/products"
//   element={
//     isSignedIn ? (
//       <ProductList onAddToCart={handleAddToCart} />
//     ) : (
//       <Navigate to="/auth" />
//     )
//   }
// />

//           <Route
//   path="/cart"
//   element={
//     isSignedIn ? (
//       <CartShow items={cartItems} />
//     ) : (
//       <Navigate to="/auth" />
//     )
//   }
// />

//           <Route
//             path="/"
//             element={<Navigate to="/products" />}
//           />
//         </Routes>
//       </Suspense>
//     </div>
//     </BrowserRouter>
//   );
// }

import React, { Suspense, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, Link, useNavigate } from "react-router-dom";
import { addToCart } from "cart/cartState";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const ProductList = React.lazy(() => import("products/ProductList"));
const AuthApp = React.lazy(() => import("auth/AuthApp"));
const CartShow = React.lazy(() => import("cart/CartShow"));

export default function App() {
  // const [isSignedIn, setIsSignedIn] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(() => {
    return localStorage.getItem('isSignedIn') === 'true';
  });
  
  const [cartItems, setCartItems] = useState(() => {
    // Load from localStorage on first render
    const stored = localStorage.getItem("cartItems");
    return stored ? JSON.parse(stored) : [];
  });
  const navigate = useNavigate();
  // ✅ Load sign-in state from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("isSignedIn");
    if (stored === "true") {
      setIsSignedIn(true);
    }
  }, []);

  const handleSignIn = () => {
    setIsSignedIn(true);
    localStorage.setItem("isSignedIn", "true");
  };

  // Save to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Sync cart across tabs
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === "cartItems") {
        setCartItems(JSON.parse(e.newValue || "[]"));
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // const handleAddToCart = (item) => {
  //   setCartItems((prev) => [...prev, item]);
  // };
  const handleAddToCart = (item) => {
    addToCart(item); // Cart MFE handles storage/state
    toast.success(`📦 Added ${item.name} to cart!`);
  };

  return (
  
      <>
        {/* ✅ Toast container goes here */}
        <ToastContainer position="top-right"/>

        <nav style={{ padding: "10px", borderBottom: "1px solid gray" }}>
          <Link to="/" style={{ marginRight: "15px" }}>
            Home
          </Link>
          <Link to="/cart" style={{ marginRight: "15px" }}>
            Cart
          </Link>
          {/* <Link to="/auth">Login</Link> */}
          {!isSignedIn && <Link to="/auth">Login</Link>}
          {isSignedIn && (
            <button
              onClick={() => {
                toast.info("Signed out.");
                setIsSignedIn(false);
                setCartItems([]);
                localStorage.removeItem('isSignedIn');
                setTimeout(() => {
  navigate('/auth'); // Use navigate to avoid full reload
}, 500);
            //  window.location.href = '/auth'; // Optional force redirect
              }}
               style={{
        marginLeft: '20px',
        padding: '6px 12px',
        backgroundColor: '#e74c3c',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
      }}
      >
              Sign Out
            </button>
          )}
        </nav>

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route
              path="/auth"
              element={
                isSignedIn ? (
                  <Navigate to="/products" />
                ) : (
                  <AuthApp onSignIn={() => {
                     toast.success("Signed in successfully!");
  localStorage.setItem('isSignedIn', 'true');
  setIsSignedIn(true);
}} />

                )
              }
            />
            {/* <Route
            path="/products"
            element={
              isSignedIn ? <ProductList onAddToCart={handleAddToCart} /> : <Navigate to="/auth" />
            }
          /> */}
          <Route path="/" element={<HomePage />} />

            <Route
              path="/products"
              element={
                isSignedIn ? (
                  <ProductList onAddToCart={handleAddToCart} />
                ) : (
                  <Navigate to="/auth" />
                )
              }
            />

            {/* <Route
            path="/cart"
            element={
              isSignedIn ? <CartShow items={cartItems} /> : <Navigate to="/auth" />
            }
          /> */}
            <Route path="/cart" element={<CartShow />} />

            <Route path="/" element={<Navigate to="/products" />} />
          </Routes>
        </Suspense>
      </>
  );
}

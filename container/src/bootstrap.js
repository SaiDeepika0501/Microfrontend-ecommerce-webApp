// src/bootstrap.js
// import React, { Suspense, lazy } from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import AuthWrapper from './components/AuthWrapper';
// // Lazy-load remote components
// const ProductsApp = lazy(() => import('products/ProductList'));
// const CartShow = lazy(() => import('cart/CartShow'));
// const AuthForm = lazy(() => import('auth/AuthForm'));

// const App = () => {
//   return (
//     <BrowserRouter>
//       <div style={{ padding: '10px', borderBottom: '1px solid gray' }}>
//         <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
//         <Link to="/cart" style={{ marginRight: '15px' }}>Cart</Link>
//         <Link to="/auth">Login</Link>
//       </div>

//       <Suspense fallback={<div>Loading...</div>}>
//         <Routes>
//           <Route path="/" element={<ProductsApp />} />
//           <Route path="/cart" element={<CartShow />} />
//           <Route
//   path="/auth"
//   element={<AuthWrapper onSignIn={() => setIsSignedIn(true)} />}
// />
//         </Routes>
//       </Suspense>
//     </BrowserRouter>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <BrowserRouter>
    <App />
  </BrowserRouter>
);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import AuthForm from './AuthForm';
// import { BrowserRouter } from 'react-router-dom';

// const mount = (el, { onSignIn } = {}) => {
//   const root = ReactDOM.createRoot(el);
//   root.render(
//     <BrowserRouter>
//       <AuthForm onSignIn={onSignIn} />  // ✅ pass down to App
//     </BrowserRouter>
//   );
// };

// if (process.env.NODE_ENV === 'development') {
//   const el = document.getElementById('root');
//   if (el) {
//     mount(el, {
//       onSignIn: () => {
//         console.log('🔧 Dev onSignIn used');
//       },
//     });
//   }
// }

// export { mount };
// import ReactDOM from 'react-dom/client';
// import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import AuthApp from './App';  // ✅ Correct: import AuthApp

// const mount = (el, { onSignIn } = {}) => {
//   const root = ReactDOM.createRoot(el);
//   root.render(
//     <BrowserRouter>
//       <AuthApp onSignIn={onSignIn} />  
//     </BrowserRouter>
//   );
// };

// if (process.env.NODE_ENV === 'development') {
//   const el = document.getElementById('root');
//   if (el) {
//     mount(el, {
//       onSignIn: () => {
//         console.log('🔧 Dev onSignIn used');
//       },
//     });
//   }
// }

// export { mount };


// src/index.js
// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { BrowserRouter } from "react-router-dom";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );
// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import LoginPage from "./pages/LoginPage";
// import Dashboard from "./pages/Dashboard";
// import { isAuthenticated } from "./utils/auth";
// import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
// const ProtectedRoute = ({ children }) => {
//   return isAuthenticated() ? children : <Navigate to="/login" />;
// };

// const App = () => {
//   return (
//     <Routes>
//       <Route path="/login" element={<LoginPage />} />
//       <Route
//         path="/dashboard"
//         element={
//           <ProtectedRoute>
//             <Dashboard />
//           </ProtectedRoute>
//         }
//       />
//       <Route path="*" element={<Navigate to="/dashboard" />} />
//     </Routes>
//   );
// };

// export default App;
// src/bootstrap.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

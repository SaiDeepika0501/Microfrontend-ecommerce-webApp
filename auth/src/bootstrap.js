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

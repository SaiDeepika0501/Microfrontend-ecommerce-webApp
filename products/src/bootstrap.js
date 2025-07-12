// // import React from "react";
// // import { createRoot } from "react-dom/client";
// // import App from "./App";

// // const container = document.getElementById('root');
// // const root = createRoot(container);
// // root.render(<App />);
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

// const mount = (el, { onAddToCart } = {}) => {
//   const root = ReactDOM.createRoot(el);
//   root.render(<App onAddToCart={onAddToCart} />);
// };

// export { mount };
// src/bootstrap.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const mount = (el, { onAddToCart } = {}) => {
  const root = ReactDOM.createRoot(el);
  root.render(<App onAddToCart={onAddToCart} />);
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('root');
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };

// src/bootstrap.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import CartShow from './CartShow';

const mount = (el) => {
  const root = createRoot(el);
  root.render(<CartShow />);
};

// For local dev
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('root');
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };

// src/cartState.js
let listeners = [];
let cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");

const notify = () => {
  listeners.forEach((cb) => cb(cartItems));
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const addToCart = (item) => {
  cartItems.push(item);
  notify();
};

export const subscribe = (cb) => {
  listeners.push(cb);
  cb(cartItems); // Initial sync
  return () => {
    listeners = listeners.filter((l) => l !== cb);
  };
};

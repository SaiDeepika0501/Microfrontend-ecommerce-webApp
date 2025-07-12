import React from 'react';
import CartShow from './CartShow';

const App = ({ items = [] }) => {
  return <CartShow items={items} />;
};

export default App;

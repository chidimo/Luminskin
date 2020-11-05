import React from 'react';
import { CartIndex } from './components/cart/CartIndex';
import { ProductIndex } from './components/products/ProductIndex';

const HomePage = () => {
  return (
    <>
      <ProductIndex />
      <CartIndex />
    </>
  );
};

export default HomePage;

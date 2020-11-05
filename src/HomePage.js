import React from 'react';
import { CartIndex } from './components/cart/CartIndex';
import { ProductIndex } from './components/products/ProductIndex';

import './homepage.scss'

const HomePage = () => {
  return (
    <>
      <ProductIndex />

      <div id='overlay' className="overlay">
        <CartIndex />
      </div>
    </>
  );
};

export default HomePage;

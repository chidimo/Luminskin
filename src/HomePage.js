import React from 'react';
import { CartIndex } from './components/cart/CartIndex';
import { ProductIndex } from './components/products/ProductIndex';

import './homepage.scss';

const HomePage = () => {
  return (
    <>
    <div className="product-homepage">
        <p>All Products</p>
      </div>

      <ProductIndex />

      <div id="overlay" className="overlay">
        <CartIndex />
      </div>
    </>
  );
};

export default HomePage;

import React from 'react';
import { CartIndex } from './components/cart/CartIndex';
import { ProductIndex } from './components/products/ProductIndex';

import './homepage.scss';

const HomePage = () => {
  return (
    <>
      <div className="product-homepage">
        <p className="page-header">All Luminskin Products</p>

        <button
          className="show-cart"
          onClick={() => {
            document.getElementById('overlay').style.width = '100%';
          }}
        >
          View cart
        </button>
      </div>

      <ProductIndex />

      <div id="overlay" className="overlay">
        <CartIndex />
      </div>
    </>
  );
};

export default HomePage;

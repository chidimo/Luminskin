import React from 'react';

import { Product } from './Product';
import './products.scss';
import { useProductState } from '../../appContext/useProduct';

export const ProductIndex = () => {
  const { products, gettingProducts } = useProductState();

  return (
    <div className="index-page">
      <div className="product-index">
        <p>All Products</p>
      </div>

      {gettingProducts ? (
        <p>Getting products</p>
      ) : (
        <div className="products-list">
          {products.slice(0, 2).map((pr) => {
            return <Product key={pr.id} product={pr} />;
          })}
        </div>
      )}
    </div>
  );
};

export default ProductIndex;

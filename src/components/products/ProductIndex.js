import React from 'react';

import { Product } from './Product';
import './products.scss';
import { useProductState } from '../../appContext/useProduct';
import { useRefreshingCurrency } from '../../appCache/rootQueryHooks';

export const ProductIndex = () => {
  const { refreshingCurrency } = useRefreshingCurrency();
  const { products, gettingProducts } = useProductState();

  return (
    <div className="index-page">
      <div className="product-index">
        <p>All Products</p>
      </div>

      {gettingProducts && !refreshingCurrency ? (
        <p>Getting products</p>
      ) : (
        <div className="products-list">
          {products.map((pr) => {
            return <Product key={pr.id} product={pr} />;
          })}
        </div>
      )}
    </div>
  );
};

export default ProductIndex;

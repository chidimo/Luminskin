import React from 'react';

import { Product } from './Product';
import { useProductState } from '../../appContext/useProduct';
import { useInitLoading } from '../../appCache/rootQueryHooks';

import './products.scss';

export const ProductIndex = () => {
  const { initLoading } = useInitLoading();
  const { products, gettingProducts } = useProductState();

  return (
    <div className="">
      {gettingProducts && initLoading ? (
        <div className="product-index-loader">
          <p>Getting products</p>
        </div>
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

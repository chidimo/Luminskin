import React from 'react';

import { Product } from './Product';
import { useGetProducts } from './queryHooks';
import { useDefaultCurrency } from '../../appCache/rootQueryHooks';
import './products.scss';

const ProductIndex = () => {
  const { defaultCurrency } = useDefaultCurrency();
  const { products, gettingProducts } = useGetProducts({
    curr: defaultCurrency,
  });

  return (
    <div className="index-page">
      <div className="product-index">
        <p>All Products</p>
      </div>

      {gettingProducts ? (
        <p>Getting products</p>
      ) : (
        <div className="products-list">
          {products.slice(0, 3).map((pr) => {
            return <Product key={pr.id} product={pr} />;
          })}
        </div>
      )}
    </div>
  );
};

export default ProductIndex;

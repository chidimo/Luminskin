import React from 'react';

import { useDefaultCurrency } from '../../appCache/rootQueryHooks';
import { useUpdateCart } from '../cart/queryHooks';

export const Product = (props) => {
  const { product } = props;
  const { defaultCurrency } = useDefaultCurrency();
  const { title, image_url, price } = product;

  const { incrementCartItem } = useUpdateCart();

  return (
    <div className="product">
      <div className="product-info">
        <div className="product-image">
          <img src={image_url} alt={title} />
        </div>
        <p>{title}</p>
      </div>

      <div>
        <p>
          From {defaultCurrency} {price}
        </p>

        <span
          onClick={() => incrementCartItem(product.id)}
          className="add-product-to-cart"
        >
          Add to cart
        </span>
      </div>
    </div>
  );
};

import React from 'react';

import {
  useRefreshingCurrency,
  useSavedCurrency,
} from '../../appCache/rootQueryHooks';
import { useUpdateCart } from '../cart/queryHooks';

export const Product = (props) => {
  const { product } = props;
  const { queryCurrency } = useSavedCurrency();
  const { title, image_url, price } = product;

  const { incrementCartItem } = useUpdateCart();
  const { refreshingCurrency } = useRefreshingCurrency();

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
          {refreshingCurrency ? (
            <span>Updating currency</span>
          ) : (
            <span>{`From ${queryCurrency} ${price}`} </span>
          )}
        </p>

        <span
          onClick={() => {incrementCartItem(product.id)
            document.getElementById('overlay').style.width = "100%";
          }}
          className="add-product-to-cart"
        >
          Add to cart
        </span>
      </div>
    </div>
  );
};

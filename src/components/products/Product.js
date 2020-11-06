import React from 'react';

import {
  useSavedCurrency,
  useRefreshingCurrency,
} from '../../appCache/rootQueryHooks';
import { formatPrice } from '../../utils';
import { useUpdateCart } from '../cart/cartHooks';

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
        <p className="product-name small-text">{title}</p>
      </div>

      <div>
        <p className="product-price small-text">
          {refreshingCurrency ? (
            <span>Updating currency</span>
          ) : (
            <span>From {formatPrice(price, queryCurrency)}</span>
          )}
        </p>

        <span
          className="add-product-to-cart"
          onClick={() => {
            incrementCartItem(product.id);
            document.getElementById('overlay').style.width = '100%';
          }}
        >
          Add to cart
        </span>
      </div>
    </div>
  );
};

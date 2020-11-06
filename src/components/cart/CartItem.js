import React from 'react';
import {
  useRefreshingCurrency,
  useSavedCurrency,
} from '../../appCache/rootQueryHooks';
import { useUpdateCart } from './cartHooks';
import { formatPrice } from '../../utils';

export const CartItem = (props) => {
  const {
    incrementCartItem,
    decrementCartItem,
    removeItemFromCart,
  } = useUpdateCart();
  const { product, cartEntry } = props;
  const { queryCurrency } = useSavedCurrency();

  const { quantity } = cartEntry;
  const { id, title, price, image_url } = product;
  const { refreshingCurrency } = useRefreshingCurrency();

  return (
    <div className="cart-item">
      <div className="remove-item" onClick={() => removeItemFromCart(id)}>
        <span>&times;</span>
      </div>

      <div className="item-details">
        <div className="">
          <p>{title}</p>

          <div className="quantity-control">
            <span
              className="control-left"
              onClick={() => decrementCartItem(id)}
            >
              -
            </span>
            <span className="">{quantity}</span>
            <span
              className="control-right"
              onClick={() => incrementCartItem(id)}
            >
              +
            </span>
          </div>
        </div>

        <p>
          {refreshingCurrency ? (
            <span>Updating currency</span>
          ) : (
            <span>{formatPrice(price, queryCurrency)}</span>
          )}
        </p>

        <div className="image-container">
          <img src={image_url} alt={title} />
        </div>
      </div>
    </div>
  );
};

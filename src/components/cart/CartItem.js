import React from 'react';
import { useRefreshingCurrency } from '../../appCache/rootQueryHooks';
import { useUpdateCart } from './queryHooks';

export const CartItem = (props) => {
  const {
    incrementCartItem,
    decrementCartItem,
    removeItemFromCart,
  } = useUpdateCart();
  const { product, cartEntry } = props;

  const { quantity } = cartEntry;
  const { id, title, price, image_url } = product;
  const { refreshingCurrency } = useRefreshingCurrency();

  return (
    <div className="cart-item">
      <>
        <div className="remove-item" onClick={() => removeItemFromCart(id)}>
          <span>&times;</span>
        </div>
        <p>{title}</p>

        <p>
          {refreshingCurrency ? (
            <span>Updating currency</span>
          ) : (
            <span>{price}</span>
          )}
        </p>

        <div className="image-container">
          <img src={image_url} alt={title} />
        </div>

        <div className="quantity-control">
          <span className="control-left" onClick={() => decrementCartItem(id)}>
            -
          </span>
          <span className="">{quantity}</span>
          <span className="control-right" onClick={() => incrementCartItem(id)}>
            +
          </span>
        </div>
      </>
    </div>
  );
};

import React from 'react';
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

  return (
    <div className="cart-item">
      <div className="remove-item" onClick={() => removeItemFromCart(id)}>
        <span>X</span>
      </div>
      <p>{title}</p>
      <p>{price}</p>

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
    </div>
  );
};

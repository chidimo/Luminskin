import React from 'react';
import { useProductState } from '../../appContext/useProduct';
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
  const { gettingProducts } = useProductState();

  return (
    <div className="cart-item">
      {gettingProducts ? (
        <p>Refreshing cart</p>
      ) : (
        <>
          <div className="remove-item" onClick={() => removeItemFromCart(id)}>
            <span>X</span>
          </div>
          <p>{title}</p>
          <p>{price}</p>

          <div className="image-container">
            <img src={image_url} alt={title} />
          </div>

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
        </>
      )}
    </div>
  );
};

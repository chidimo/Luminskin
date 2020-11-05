import React from 'react';

export const CartItem = (props) => {
  const { product } = props;

  return (
    <div className="cart-item">
      {JSON.stringify(product)}
      <hr />
    </div>
  );
};

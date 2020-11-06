import React from 'react';
import { useCartItems, useSavedCurrency } from '../../appCache/rootQueryHooks';
import { SelectCurrency } from './SelectCurrency';
import { CartItem } from './CartItem';
import './cart.scss';
import { useProductState } from '../../appContext/useProduct';

export const CartIndex = () => {
  const { cartItems } = useCartItems();
  const { queryCurrency } = useSavedCurrency();
  const { products, gettingProducts } = useProductState();

  return (
    <div className="cart-index">
      <div
        className="close-cart"
        onClick={() => {
          document.getElementById('overlay').style.width = '0';
        }}
      >
        <span>&#62;</span>
      </div>
      <div>
        <p className="page-title">your cart</p>
      </div>
      <SelectCurrency value={queryCurrency} />

      {products.length > 0 &&
        cartItems.map((it) => {
          const product = products.filter((p) => p.id === it.id)[0];
          return (
            <CartItem
              key={it.id}
              cartEntry={it}
              product={product}
              gettingProducts={gettingProducts}
            />
          );
        })}
    </div>
  );
};

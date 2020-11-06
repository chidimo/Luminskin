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

  const subTotal = cartItems.reduce((total, item) => {
    const product = products.filter((p) => p.id === item.id)[0];

    if (product) {
      return total + product.price * item.quantity;
    } else {
      return total;
    }
  }, 0);

  return (
    <div className="cart-index">
      <div className="cart-index-header">
        <div
          className="close-cart"
          onClick={() => {
            document.getElementById('overlay').style.width = '0';
          }}
        >
          <span>&#8594;</span>
        </div>
        <p className="page-title">your cart</p>
      </div>

      <SelectCurrency value={queryCurrency} />

      <div className="selected-items">
        {cartItems.map((it) => {
          const product = products.filter((p) => p.id === it.id)[0];
          if (product) {
            return (
              <CartItem
                key={it.id}
                cartEntry={it}
                product={product}
                gettingProducts={gettingProducts}
              />
            );
          } else {
            return null;
          }
        })}
      </div>

      <div className="cart-summary">
        <div className="total-amount">
          <p>Subtotal</p>
          <p>{subTotal}</p>
        </div>
        <button>Proceed to checkout</button>
      </div>
    </div>
  );
};

import React from 'react';
import {
  useCartItems,
  useDefaultCurrency,
} from '../../appCache/rootQueryHooks';
import { useGetProducts } from '../products/queryHooks';
import { SelectCurrency } from './SelectCurrency';
import { CartItem } from './CartItem';
import './cart.scss';

export const CartIndex = () => {
  const { cartItems } = useCartItems();
  const { defaultCurrency } = useDefaultCurrency();
  const { products } = useGetProducts({
    fetchPolicy: 'cache-first',
    curr: defaultCurrency,
  });

  return (
    <div className="cart-index">
      <div>
        <p className="page-title">your cart</p>
      </div>
      <SelectCurrency value={defaultCurrency} />

      {products.length > 0 &&
        cartItems.map((it) => {
          const product = products.filter((p) => p.id === it.id)[0];
          return <CartItem key={it.id} cartEntry={it} product={product} />;
        })}
    </div>
  );
};

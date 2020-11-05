import React from 'react';
import {
  useCartItems,
  useDefaultCurrency,
} from '../../appCache/rootQueryHooks';
import { useGetProducts } from '../products/queryHooks';
import { SelectCurrency } from '../products/SelectCurrency';
import { CartItem } from './CartItem';

export const CartIndex = () => {
  const { cartItems } = useCartItems();
  const { defaultCurrency } = useDefaultCurrency();
  const { products } = useGetProducts({ fetchPolicy: 'cache-first' });

  return (
    <div className="cart-item">
      <div>cart items</div>
      <SelectCurrency value={defaultCurrency} />

      {cartItems.map((it) => {
        const product = products.filter((p) => p.id === it.id)[0];
        return <CartItem key={it.id} item={it} product={product} />;
      })}
    </div>
  );
};

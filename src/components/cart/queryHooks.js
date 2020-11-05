import { useApolloClient, useQuery } from '@apollo/client';
import { useCartItems } from '../../appCache/rootQueryHooks';
import { CART_ITEMS } from '../../storageKeys';

import { QUERY_CURRENCIES } from './queries';

export const useGetCurrencies = ({ fetchPolicy = 'network-only' } = {}) => {
  const { loading, error, data } = useQuery(QUERY_CURRENCIES, {
    fetchPolicy,
  });

  return {
    error,
    gettingCurrencies: loading,
    currencies: data?.currency || [],
  };
};

export const useUpdateCart = () => {
  const { cache } = useApolloClient();
  const { cartItems } = useCartItems();

  const modifyCacheAndStorage = (updatedData) => {
    localStorage.setItem(CART_ITEMS, JSON.stringify(updatedData));
    cache.modify({
      fields: {
        cartItems: () => updatedData,
      },
    });
  };

  const incrementCartItem = (itemId) => {
    // each cart item has the structure {id, quantity, item}

    let updatedCart;
    const itemIds = cartItems.map((it) => it.id);

    if (itemIds.includes(itemId)) {
      updatedCart = cartItems.map((cIt) =>
        cIt.id === itemId ? { ...cIt, quantity: cIt.quantity + 1 } : cIt
      );
    } else {
      updatedCart = [...cartItems, { id: itemId, quantity: 1 }];
    }

    modifyCacheAndStorage(updatedCart);
  };

  const decrementCartItem = (itemId) => {
    let updatedCart;
    const item = cartItems.filter((it) => itemId === it.id)[0];

    if (item) {
      if (item.quantity > 1) {
        updatedCart = cartItems.map((cIt) =>
          cIt.id === itemId ? { ...cIt, quantity: cIt.quantity - 1 } : cIt
        );
      } else {
        updatedCart = cartItems.filter((it) => itemId !== it.id);
      }

      modifyCacheAndStorage(updatedCart);
    }
  };

  const removeItemFromCart = (itemId) => {
    const updatedCart = cartItems.filter((it) => itemId !== it.id);
    modifyCacheAndStorage(updatedCart);
  };

  return { incrementCartItem, decrementCartItem, removeItemFromCart };
};

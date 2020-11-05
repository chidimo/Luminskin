import { useApolloClient, useQuery } from '@apollo/client';
import { useCartItems } from '../../appCache/rootQueryHooks';
import { CART_ITEMS } from '../../storageKeys';

import { QUERY_CURRENCIES, QUERY_PRODUCTS } from './queries';

export const useGetProducts = ({
  curr = 'NGN',
  fetchPolicy = 'network-only',
} = {}) => {
  const { loading, error, data } = useQuery(QUERY_PRODUCTS, {
    variables: { curr },
    fetchPolicy,
  });

  return {
    error,
    gettingProducts: loading,
    products: data?.products || [],
  };
};

export const useGetCurrencies = ({ fetchPolicy = 'network-only' } = {}) => {
  const { loading, error, data } = useQuery(QUERY_CURRENCIES, {
    fetchPolicy,
  });

  return {
    error,
    gettingCurrencies: loading,
    currency: data?.currency || [],
  };
};

export const useAddItemToCart = () => {
  const { cache } = useApolloClient();
  const { cartItems } = useCartItems();

  const addToCart = (item) => {
    // each cart item has the structure {id, quantity, item}

    let updateOrNewItem;
    const itemIds = cartItems.map((it) => it.id);

    if (itemIds.includes(item.id)) {
      updateOrNewItem = cartItems.map((cIt) =>
        cIt.id === item.id ? { ...cIt, quantity: cIt.quantity + 1 } : cIt
      );
    } else {
      updateOrNewItem = [...cartItems, { id: item.id, quantity: 1 }];
    }

    localStorage.setItem(CART_ITEMS, JSON.stringify(updateOrNewItem));

    cache.modify({
      fields: {
        cartItems: () => updateOrNewItem,
      },
    });
  };

  return { addToCart };
};

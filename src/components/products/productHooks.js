import React from 'react';
import { useApolloClient, useQuery } from '@apollo/client';

import { QUERY_PRODUCTS } from './queries';

export const useGetProducts = ({
  queryCurrency = 'NGN',
  fetchPolicy = 'network-only',
} = {}) => {
  const { cache } = useApolloClient();

  const { loading, error, data } = useQuery(QUERY_PRODUCTS, {
    variables: { currency: queryCurrency },
    fetchPolicy,
  });

  React.useEffect(() => {
    if (data?.products) {
      cache.modify({
        fields: {
          initLoading: () => false,
          refreshingCurrency: () => false,
        },
      });
    }
  }, [cache, data?.products]);

  return {
    error,
    gettingProducts: loading,
    products: data?.products || [],
  };
};

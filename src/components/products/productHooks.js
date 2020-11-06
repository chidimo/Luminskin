import React from 'react';
import { useApolloClient, useQuery } from '@apollo/client';

import { QUERY_PRODUCTS } from './queries';

export const useGetProducts = ({
  queryCurrency = 'NGN',
  fetchPolicy = 'network-only',
} = {}) => {
  const { cache } = useApolloClient();
  const { loading, error, data, called } = useQuery(QUERY_PRODUCTS, {
    variables: { currency: queryCurrency },
    fetchPolicy,
  });

  React.useEffect(() => {
    if (called && !loading) {
      cache.modify({
        fields: {
          refreshingCurrency: () => false,
        },
      });
    } else {
      cache.modify({
        fields: {
          refreshingCurrency: () => true,
        },
      });
    }
  }, [cache, called, loading]);

  return {
    error,
    gettingProducts: loading,
    products: data?.products || [],
  };
};

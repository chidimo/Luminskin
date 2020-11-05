import { useQuery } from '@apollo/client';

import { QUERY_PRODUCTS } from './queries';

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

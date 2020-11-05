import { useQuery } from '@apollo/client';
import { QUERY_ROOT } from './rootQueries';

export const useCartItems = () => {
  const { data } = useQuery(QUERY_ROOT);
  return { cartItems: data.cartItems };
};

export const useDefaultCurrency = () => {
  const { data } = useQuery(QUERY_ROOT);
  return { defaultCurrency: data.defaultCurrency };
};

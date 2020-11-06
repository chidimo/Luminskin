import { useQuery } from '@apollo/client';
import { QUERY_ROOT } from './rootQueries';

export const useCartItems = () => {
  const { data } = useQuery(QUERY_ROOT);
  return { cartItems: data.cartItems };
};

export const useSavedCurrency = () => {
  const { data } = useQuery(QUERY_ROOT);
  return { queryCurrency: data.queryCurrency };
};

export const useRefreshingCurrency = () => {
  const { data } = useQuery(QUERY_ROOT);
  return { refreshingCurrency: data.refreshingCurrency };
};

export const useInitLoading = () => {
  const { data } = useQuery(QUERY_ROOT);
  return { initLoading: data.initLoading };
};

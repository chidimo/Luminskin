import React from 'react';
import PropTypes from 'prop-types';

import { useGetProducts } from '../components/products/queryHooks';
import { useSavedCurrency } from '../appCache/rootQueryHooks';
import { useGetCurrencies } from '../components/cart/queryHooks';

export const ProductStateCtx = React.createContext();
export const CurrencyStateCtx = React.createContext();

export const ProductProvider = ({ children }) => {
  const { queryCurrency } = useSavedCurrency();

  const { currencies } = useGetCurrencies();
  const { products, gettingProducts } = useGetProducts({
    queryCurrency,
  });

  return (
    <ProductStateCtx.Provider value={{ products, gettingProducts }}>
      <CurrencyStateCtx.Provider value={{ currencies }}>
        {children}
      </CurrencyStateCtx.Provider>
    </ProductStateCtx.Provider>
  );
};

ProductProvider.propTypes = {
  children: PropTypes.object,
};

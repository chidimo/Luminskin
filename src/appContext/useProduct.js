import React from 'react';

import { ProductStateCtx, CurrencyStateCtx } from './ProductCtx';

export const useProductState = () => {
  const ctx = React.useContext(ProductStateCtx);
  if (ctx === undefined) {
    throw new Error('useProductState must be used within a FeaturesProvider');
  }
  return ctx;
};

export const useSavedCurrencyState = () => {
  const ctx = React.useContext(CurrencyStateCtx);
  if (ctx === undefined) {
    throw new Error('useSavedCurrencyState must be used within a FeaturesProvider');
  }
  return ctx;
};

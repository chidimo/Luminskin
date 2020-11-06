import { CART_ITEMS, DEFAULT_CURRENCY } from '../storageKeys';

// read default currency from storage or set it to Nigerian naira
const cart = JSON.parse(localStorage.getItem(CART_ITEMS));
const savedCurr = JSON.parse(localStorage.getItem(DEFAULT_CURRENCY));

export const initCache = {
  cartItems: cart || [],
  queryCurrency: savedCurr || 'NGN',
  refreshingCurrency: false,
  initLoading: true,
};

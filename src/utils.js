export const formatPrice = (price, currency) => {
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
  }).format(price);
};

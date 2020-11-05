import { gql } from '@apollo/client';

// eslint-disable-next-line no-unused-vars
const options = `
product_options {
  title
  prefix
  suffix
  options {
    id
    value
  }
}
`;

export const QUERY_PRODUCTS = gql`
  query getProducts($currency: Currency) {
    products {
      id
      title
      image_url
      price(currency: $currency)
    }
  }
`;

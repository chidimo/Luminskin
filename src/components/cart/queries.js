import { gql } from '@apollo/client';

export const QUERY_CURRENCIES = gql`
  query getCurrencies {
    currency
  }
`;

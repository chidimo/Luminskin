import { gql } from '@apollo/client';

export const queryCache = `
queryCurrency
cartItems
refreshingCurrency
`;

export const QUERY_ROOT = gql`
  query queryLocalData @client { ${queryCache} }
`;

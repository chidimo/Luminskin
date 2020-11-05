import { gql } from '@apollo/client';

export const queryCache = `
defaultCurrency
cartItems
`;

export const QUERY_ROOT = gql`
  query queryLocalData @client { ${queryCache} }
`;

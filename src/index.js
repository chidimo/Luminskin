import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { App } from './App';
import reportWebVitals from './reportWebVitals';

import {
  gql,
  ApolloClient,
  createHttpLink,
  ApolloProvider,
} from '@apollo/client';
import { InMemoryCache } from '@apollo/client/cache';
import { setContext } from '@apollo/client/link/context';

import { queryCache } from './appCache/rootQueries';
import { initCache } from './appCache/initCache';
import { ProductProvider } from './appContext/ProductCtx';

// For adding authentication
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
    },
  };
});

const cache = new InMemoryCache();

cache.writeQuery({
  query: gql`
    query queryLocalData { ${queryCache} }
  `,
  data: { ...initCache },
});

const httpLink = createHttpLink({
  uri: 'https://pangaea-interviews.now.sh/api/graphql',
});

const appClient = new ApolloClient({
  cache,
  resolvers: {},
  link: authLink.concat(httpLink),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={appClient}>
      <ProductProvider>
        <App />
      </ProductProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { CartIndex } from './components/cart/CartIndex';

import { ErrorBoundary } from './ErrorBoundary';

const ProductIndex = React.lazy(() =>
  import('./components/products/ProductIndex')
);

export const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <React.Suspense fallback={() => <p>Loading app</p>}>
        <ErrorBoundary>
          <Switch>
            <Route path={'/'} component={ProductIndex} />
          </Switch>

          <CartIndex />
        </ErrorBoundary>
      </React.Suspense>
    </BrowserRouter>
  );
};

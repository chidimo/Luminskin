import React from 'react';

import { ErrorBoundary } from './ErrorBoundary';

const HomePage = React.lazy(() => import('./HomePage'));

export const App = () => {
  return (
    <ErrorBoundary>
      <React.Suspense fallback={() => <p>Loading app</p>}>
        <HomePage />
      </React.Suspense>
    </ErrorBoundary>
  );
};

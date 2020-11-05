import React from 'react';
import PropTypes from 'prop-types';

const FallBack = () => {
  return (
    <div data-testid="error-boundary">
      <div>
        <p>
          There was an error in loading this page.{' '}
          <span
            style={{ cursor: 'pointer', color: '#0077FF' }}
            onClick={() => {
              window.location.reload();
            }}
          >
            Reload this page
          </span>{' '}
        </p>
      </div>
    </div>
  );
};

class ErrorBoundary extends React.Component {
  state = {
    error: '',
    hasError: false,
  };

  // during initialization, reloadCount is set on state
  // as it mounts, it is reset to 0
  // once component catches an error, it reloads and
  // takes the previously saved state and increments it.
  // this continues till the threshold is reached.

  componentDidMount() {}

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.log({ error, info });
  }

  render() {
    const { hasError } = this.state;
    if (hasError) {
      return <FallBack />;
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export { ErrorBoundary };

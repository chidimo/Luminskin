import React from 'react';
import PropTypes from 'prop-types';
import { useApolloClient } from '@apollo/client';

import { useGetCurrencies } from './queryHooks';
import { DEFAULT_CURRENCY } from '../../storageKeys';

export const SelectCurrency = (props) => {
  const { value } = props;
  const { cache } = useApolloClient();
  const { currency } = useGetCurrencies();

  return (
    <div>
      <select
        className=""
        value={value}
        onChange={(e) => {
          const { value } = e.target;
          localStorage.setItem(DEFAULT_CURRENCY, JSON.stringify(value));
          cache.modify({
            fields: {
              defaultCurrency: () => value,
            },
          });
        }}
      >
        <option value="">Currency</option>
        {currency?.map((cu) => {
          return (
            <option key={cu} value={cu}>
              {cu}
            </option>
          );
        })}
      </select>
    </div>
  );
};

SelectCurrency.propTypes = {
  value: PropTypes.string,
};

import React from 'react';
import PropTypes from 'prop-types';
import { useApolloClient } from '@apollo/client';

import { DEFAULT_CURRENCY } from '../../storageKeys';
import { useSavedCurrencyState } from '../../appContext/useProduct';

export const SelectCurrency = (props) => {
  const { value } = props;
  const { cache } = useApolloClient();
  const { currencies } = useSavedCurrencyState();

  return (
    <div>
      <select
        className="select-currency"
        value={value}
        onChange={(e) => {
          const { value } = e.target;
          localStorage.setItem(DEFAULT_CURRENCY, JSON.stringify(value));
          cache.modify({
            fields: {
              queryCurrency: () => value,
            },
          });
        }}
      >
        <option value="">Currency</option>
        {currencies?.map((cu) => {
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

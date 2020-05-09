import React, {useContext} from 'react';

import {GlobalContext} from '../context/GlobalState';

export const Balance = () => {
  const {transactions} = useContext(GlobalContext);

//calculates total balance
  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

//sets the balance as "total"
  return (
    <div className="totalbal">
      <h2>Current Balance Available: £{total}</h2>
    </div>
  );
}

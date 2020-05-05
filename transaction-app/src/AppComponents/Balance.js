import React, {useContext} from 'react';

import {GlobalContext} from '../context/GlobalState';

export const Balance = () => {
  const {transactions} = useContext(GlobalContext);

//calculates total balance
  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);


  return (
    //displays the balance as "total" parameter
    <div>
      <h4>Available Balance</h4>
      <h1>£{total}</h1>
    </div>
  );
}

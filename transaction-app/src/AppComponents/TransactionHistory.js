import React, { useContext } from 'react';

import {Transaction} from './Transaction';

import {GlobalContext} from '../context/GlobalState';

export const TransactionHistory = () => {
  const {transactions} = useContext(GlobalContext);


  // Brings in global state and maps it,and passes it through.
  // Unique ID key created
  return (
    <div className = "accHist">
    <h3>Account History</h3>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction}/> ))}
      </ul>
    </div>
  )
}

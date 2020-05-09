import React, { useContext, useEffect } from 'react';

import {Transaction} from './Transaction';

import {GlobalContext} from '../context/GlobalState';

//pulls out the gettransactions from the state
export const TransactionHistory = () => {
  const {transactions, getTransactions } = useContext(GlobalContext);

//calls the getTransaction function
  useEffect(() => {
    getTransactions();

  }, []);
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

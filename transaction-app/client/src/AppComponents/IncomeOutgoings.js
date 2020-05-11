import React, {useContext} from 'react'
import {GlobalContext} from '../state/GlobalState';

export const IncomeOutgoings = () => {
  const {transactions} = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

//filters through all the numbers greater than 0 and adds them together using reduce
   const income = amounts
     .filter(item => item > 0)
     .reduce((acc, item) => (acc += item), 0)
     .toFixed(2);

//similar to income
   const outgoing = (
     amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
     -1
   ).toFixed(2);


//shows the total income and outgoings calculated from the transaction list
  return (
    <div className = "totaltransaction">
      <div className ="Incomein-container">
        <h4>Income:</h4>
        <h4 className ="money add">£{income}</h4>
      </div>
      <div className ="Incomeout-container">
        <h4>Outgoings:</h4>
        <h4 className ="money out">£{outgoing}</h4>
      </div>
    </div>
  )
}

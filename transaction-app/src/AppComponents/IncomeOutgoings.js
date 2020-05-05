import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';

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



  return (
    <div className = "totaltransaction">
      <div className ="Incomein-container">
        <h4>Income:</h4>
        <p className ="money add">£{income}</p>
      </div>
      <div className ="Incomeout-container">
        <h4>Outgoings:</h4>
        <p className ="money out">£{outgoing}</p>
      </div>
    </div>
  )
}

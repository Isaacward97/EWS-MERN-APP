import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

//passes transaction
export const Transaction = ({transaction}) => {
  const{RemoveTransaction} = useContext(GlobalContext);


  //generates sign based on value beign above or below 0
  const sign = transaction.amount < 0 ? '-' : '+';
  return(
    //identifies list component to show red or green colours
    <li className={transaction.amount < 0 ? 'negative' : 'positive' }>
      {transaction.text} <span>{sign}£{Math.abs(transaction.amount)}</span><button
      onClick = {() => RemoveTransaction(transaction.id)} className="remove-btn">x</button>
    </li>
  )
 }

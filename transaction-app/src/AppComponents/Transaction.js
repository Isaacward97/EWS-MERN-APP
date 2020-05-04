import React from 'react';

//passes transaction
export const Transaction = ({transaction}) => {
  //generates sign based on value beign above or below 0
  const sign = transaction.amount < 0 ? '-' : '+';
  return(
    <li className="negative">
      {transaction.text} <span>{sign}£{Math.abs(transaction.amount)}</span><button className="remove-btn">x</button>
    </li>
  )
 }

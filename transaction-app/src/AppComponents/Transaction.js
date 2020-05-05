import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
  const { RemoveTransaction } = useContext(GlobalContext);

//if sign is below 0 then negative, otherwise positive
  const sign = transaction.amount < 0 ? '-' : '+';
//activates the function when delete button is pressed
  return (
    <li className={transaction.amount < 0 ? 'negative' : 'positive'}>
      {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={() => RemoveTransaction(transaction.id)} className="remove-btn">x</button>
    </li>
  )
}

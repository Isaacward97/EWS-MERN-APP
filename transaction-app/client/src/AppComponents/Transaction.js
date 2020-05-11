import React, {useContext} from 'react';
import { GlobalContext } from '../state/GlobalState';

export const Transaction = ({ transaction }) => {
  const { RemoveTransaction } = useContext(GlobalContext);


//if paremeter is below 0 then negative number, otherwise positive
//this means if there is no - infront of the number it will be calculated as a positive number
  const sign = transaction.amount < 0 ? '-' : '+';
//activates the function when delete button is pressed
//also returns values of transaction text and amount, could have date but the formatting isn't great
  return (
    <li className={transaction.amount < 0 ? 'negative' : 'positive'}>
      {transaction.text} <span>{sign}£{Math.abs(transaction.amount)}</span><button onClick={() => RemoveTransaction(transaction._id)} className="remove-btn">x</button>
    </li>
  )
}

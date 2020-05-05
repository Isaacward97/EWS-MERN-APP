
import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const NewTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { nTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    nTransaction(newTransaction);
  }

  return (
    <>
      <h3>Create New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Enter:</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Transaction ID" />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Input: <br />
            (Please use "-" for negative value)</label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="0.00" />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}

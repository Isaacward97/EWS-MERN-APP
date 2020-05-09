
import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';


export const NewTransaction = () => {
  //hook for text and amount states
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { nTransaction } = useContext(GlobalContext);

  const onSubmit = i => {
    i.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }



//runs new transaction function when form is submitted
    nTransaction(newTransaction);
  }

//form for users to submit a transaction
//updates the function with the text & amount state
  return (
    <div className="createaction" >
      <h3>Create New Transaction</h3>
      <form className= "Form" onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Enter:</label>
          <input required type="text"  onChange={(i) => setText(i.target.value)} placeholder="Transaction ID" />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Input: <br />
            (Please use "-" for negative value)</label
          >
          <input  type="number" onkeydown="javascript: return event.keyCode == 69 ? false : true" value={amount} onChange={(i) => setAmount(i.target.value)} placeholder="0.00" />
        </div>
        <button className="btn">Add New Transaction</button>
      </form>
    </div>
  )
}

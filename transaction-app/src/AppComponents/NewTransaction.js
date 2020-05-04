import React, {useState} from 'react'

export const NewTransaction = () => {
const[text, setText] = useState('');
const[amount, setAmount] = useState (0);

  return (
    <>
    <h3>Create New Transaction</h3>
      <form id="form">
        <div className="form-control">
          <label htmlfor="text">Name</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)}
          placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlfor="amount"
            >Amount <br />
            (Please use "-" at the start for negative amount)</label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </ >
  )
}

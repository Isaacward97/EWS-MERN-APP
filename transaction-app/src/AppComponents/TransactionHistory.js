import React from 'react'

export const TransactionHistory = () => {
  return (
    <>
    <h3>Account History</h3>
      <ul className="list">
        <li className="negative">
          Cash <span>-£100</span><button class="remove-btn">X</button>
        </li>
      </ul>
    </>
  )
}

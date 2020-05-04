import React from 'react'

export const TransactionHistory = () => {
  return (
    <>
    <h3>History (Past Month)</h3>
      <ul id="list" class="list">
        <li class="negative">
          Cash <span>-£100</span><button class="remove-btn">X</button>
        </li>
      </ul>
    </>
  )
}

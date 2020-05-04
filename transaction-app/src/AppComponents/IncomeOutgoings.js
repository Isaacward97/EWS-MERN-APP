import React from 'react'

export const IncomeOutgoings = () => {
  return (
    <div className ="Incomeout-container">
      <div>
        <h4>Income:</h4>
        <p className ="money add">+£0.00</p>
      </div>
      <div>
        <h4>Outgoings:</h4>
        <p className ="money out">-£0.00</p>
      </div>
    </div>
  )
}

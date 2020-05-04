import React from 'react';
import {Header} from './AppComponents/Header';
import {Balance} from './AppComponents/Balance';
import {IncomeOutgoings} from './AppComponents/IncomeOutgoings';
import {TransactionHistory} from './AppComponents/TransactionHistory';

import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeOutgoings/>
        <TransactionHistory/>
      </div>
    </div>
  );
}

export default App;

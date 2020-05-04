import React from 'react';
import {Header} from './AppComponents/Header';
import {Balance} from './AppComponents/Balance';
import {IncomeOutgoings} from './AppComponents/IncomeOutgoings';
import {TransactionHistory} from './AppComponents/TransactionHistory';
import {NewTransaction} from './AppComponents/NewTransaction';


import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeOutgoings/>
        <TransactionHistory/>
        <NewTransaction/>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import {Header} from './AppComponents/Header';
import {Balance} from './AppComponents/Balance';
import {IncomeOutgoings} from './AppComponents/IncomeOutgoings';
import {TransactionHistory} from './AppComponents/TransactionHistory';
import {NewTransaction} from './AppComponents/NewTransaction';

import {GlobalProvider} from './context/GlobalState';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeOutgoings/>
        <TransactionHistory/>
        <NewTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;

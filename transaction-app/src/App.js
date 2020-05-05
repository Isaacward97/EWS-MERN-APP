import React from 'react';
import {Header} from './AppComponents/Header';
import {Balance} from './AppComponents/Balance';
import {IncomeOutgoings} from './AppComponents/IncomeOutgoings';
import {TransactionHistory} from './AppComponents/TransactionHistory';
import {NewTransaction} from './AppComponents/NewTransaction';
import {Nav} from './AppComponents/Nav';

import {GlobalProvider} from './context/GlobalState';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Nav/>
      <Header/>
      <div className="Money">
        <Balance/>
        <IncomeOutgoings/>
      </div>
      <>
        <TransactionHistory/>
      </>

      <>
        <NewTransaction/>
      </>
    </GlobalProvider>
  );
}

export default App;

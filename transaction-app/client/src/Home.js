import React from 'react';
import {Header} from './AppComponents/Header';
import {Balance} from './AppComponents/Balance';
import {IncomeOutgoings} from './AppComponents/IncomeOutgoings';
import {TransactionHistory} from './AppComponents/TransactionHistory';
import {NewTransaction} from './AppComponents/NewTransaction';
import {GlobalProvider} from './state/GlobalState';
import {BrowserRouter} from 'react-router-dom';
import './App.css';



//structure for home page
function Home() {
    return (
    <div>
      <GlobalProvider>
          <Header/>
          <div className="Money">
            <IncomeOutgoings/>
          </div>
          <div className="bal">
          <Balance/>
          </div>
          <>
            <TransactionHistory/>
          </>
          <>
            <NewTransaction/>
          </>
        </GlobalProvider>
      </div>
    );
  }

export default Home;

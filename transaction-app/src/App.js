import React from 'react';
import {Header} from './AppComponents/Header';
import {Balance} from './AppComponents/Balance';

import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <div className="container">
        <Balance/>
      </div>
    </div>
  );
}

export default App;

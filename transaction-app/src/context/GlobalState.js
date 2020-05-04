import React, {createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Create inital state
const InitialState = {
  transactions: [
    //Test Transactions
       { id: 1, text: 'Food', amount: -30 },
       { id: 2, text: 'Wage', amount: 750 },
       { id: 3, text: 'Xbox', amount: -50 },
  ]
}

// Create the context
export const GlobalContext = createContext(InitialState);

//Set up provider component
export const GlobalProvider = ({children}) => {
  //dispatch for reducer action
  const [state, dispatch] = useReducer(AppReducer, InitialState);


//provides states and actions to wrapped components
  return (<GlobalContext.Provider value ={{
      transactions: state.transactions
  }}>
    {children}
  </GlobalContext.Provider>);
}

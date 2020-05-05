import React, {createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Create inital state
const InitialState = {
  transactions: []
}

// Create the context
export const GlobalContext = createContext(InitialState);

//Set up provider component
export const GlobalProvider = ({children}) => {
  //dispatch for reducer action
  const [state, dispatch] = useReducer(AppReducer, InitialState);

//actions
function RemoveTransaction(id){
  dispatch({
    type:'REMOVE_TRANSACTION',
    payload: id
  });
}

function AddTransaction(transaction){
  dispatch({
    type:'ADD_TRANSACTION',
    payload: transaction
  });
}

//provides states and actions to wrapped components
  return (<GlobalContext.Provider value ={{
      transactions: state.transactions,
      RemoveTransaction,
      AddTransaction
  }}>
    {children}
  </GlobalContext.Provider>);
}

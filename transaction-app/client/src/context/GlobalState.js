import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';
// Initial state
const initialState = {
  transactions: [],
  error: null,
  loading: true
}

// Create context for our global variables
export const GlobalContext = createContext(initialState);

// Provider component which uses our appreducer
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  //Get request
  async function getTransactions() {
      try {
        const res = await axios.get('/api/v1/transactions');

        dispatch({
          //sends data as payload
          //res.data.data gets just the data array
          type: 'GET_TRANSACTIONS',
          payload: res.data.data
        });
      } catch (err) {
        dispatch({
          type: 'TRANSACTION_ERROR',
          payload: err.response.data.error
        });
      }
    }

//function to remove transaction
    async function RemoveTransaction(id) {
      try {
        await axios.delete(`/api/v1/transactions/${id}`);

        dispatch({
          type: 'DELETE_TRANSACTION',
          payload: id
        });

      } catch (e) {

      }


    }

    //function to add transaction
  async function nTransaction(transaction) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post('/api/v1/transactions', transaction, config);

      dispatch({
        type: 'ADD_TRANSACTION',
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error
      });
    }
  }

  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    error: state.error,
    loading: state.loading,
    getTransactions,
    RemoveTransaction,
    nTransaction
  }}>
    {children}
  </GlobalContext.Provider>);
}

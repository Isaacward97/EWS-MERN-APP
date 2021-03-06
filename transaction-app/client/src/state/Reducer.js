
//switch case to get getTransactions
//manages state of the system
//fills the empty transactions array with payload
export default (state, action) => {
  switch(action.type) {
    case 'GET_TRANSACTIONS':
      return {
        ...state,
        loading: false,
        //changes transactions from response to global state
        transactions: action.payload
      }

      case 'ADD_TRANSACTION':
        return {
          ...state,
          transactions: [ ...state.transactions, action.payload]
        }
        
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction._id !== action.payload)
      }

      case 'TRANSACTION_ERROR':
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}

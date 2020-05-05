//Deals with state changes

export default (state, action) => {

//acts as an ID
switch(action.type){
  //uses type and payload to filter out and remove anything with the id
  case 'REMOVE_TRANSACTION':
    return{
      ...state,
      transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
    }
  default:
    return state;
  }
}

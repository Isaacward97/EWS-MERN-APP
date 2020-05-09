const mongoose = require('mongoose');

//For user form information to gather info stated below
//createdAt gathers the date on when the transaction was made, this could potentailly be used to also output date to user
const TransactionSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    require: "Please enter text"
  },
  amount: {
    type: Number,
    require: "Please enter number"
  },
  createdAt: {
        type: Date,
        default: Date.now
    },
});



module.exports = mongoose.model('Transaction', TransactionSchema);

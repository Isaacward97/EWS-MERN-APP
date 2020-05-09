const express = require('express');
const router = express.Router();
const { getTransactions, addTransaction, deleteTransaction } = require('../controller/transactions');
// const auth = require('../middleware/auth');

//route for GET
router
  .route('/')
  .get(getTransactions)

//POST
router
.route('/')
.post(addTransaction);

//router for DELETE transaction
//could add auth parameter ('/:id, auth') for authorization for functions
//this means on users who are logged in can add or delete items
router
  .route('/:id')
  .delete(deleteTransaction);

module.exports = router;

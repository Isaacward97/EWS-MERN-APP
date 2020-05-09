const Transaction = require('../model/Transaction');


// Route is GET /api/v1/Transactions
//uses find method to get all of the transactions
//sets server status of 200

exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();

    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
}


//Add Tranasactions
// POST Req instead of GET
//returns status 201 if ok and 400 if client error 500 if server
exports.addTransaction = async (req, res, next) => {
  try {
    const { text, amount } = req.body;

    const transaction = await Transaction.create(req.body);

    return res.status(201).json({
      success: true,
      data: transaction
    });
  } catch (e) {
    if(e.name === 'ValidationError') {
      const messages = Object.values(e.errors).map(val => val.message);

      return res.status(400).json({
        success: false,
        error: messages
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  }
}


//DELETE Transaactions
//DELETE /api/v1/Transactions
exports.deleteTransaction = async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if(!transaction) {
      return res.status(404).json({
        success: false,
        error: 'Transaction not found'
      });
    }

    await transaction.remove();

    return res.status(200).json({
      success: true,
      data: {}
    });

  } catch (e) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
}

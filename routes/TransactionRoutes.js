const express =  require('express');
const router = express.Router();
const checkAuth =  require("../Middleware/check-auth.js");
const Transaction = require('../Controllers/TransactionControllers.js');



router
.get('/', checkAuth, Transaction.getTransactions)

.patch('/update/:id', checkAuth, Transaction.updateTransaction)
.delete('/delete/:id', checkAuth, Transaction.deleteTransaction)
.get('/view/:id',checkAuth, Transaction.viewTransaction);

module.exports = router;
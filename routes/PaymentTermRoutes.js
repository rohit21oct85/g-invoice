const express =  require('express');
const router = express.Router();
const checkAuth =  require("../Middleware/check-auth.js");

const PaymentTerm = require('../Controllers/PaymentTermControllers.js');

router
.get('/',checkAuth, PaymentTerm.getPayments)
.post('/create',checkAuth, PaymentTerm.createPayment)
.patch('/update/:id',checkAuth, PaymentTerm.updatePayment)
.delete('/delete/:id',checkAuth, PaymentTerm.deletePayment)
.get('/view/:id',checkAuth, PaymentTerm.viewPayment);

module.exports = router;
const express =  require('express');
const router = express.Router();
const checkAuth =  require("../Middleware/check-auth.js");

const Tax = require('../Controllers/TaxControllers.js');


router
.get('/',checkAuth, Tax.getTaxes)
.post('/create',checkAuth, Tax.createTax)
.patch('/update/:id',checkAuth, Tax.updateTax)
.delete('/delete/:id',checkAuth, Tax.deleteTax)
.get('/view/:id',checkAuth, Tax.viewTax)
.get('/viewByTaxType',checkAuth, Tax.viewByTaxType);


module.exports = router;
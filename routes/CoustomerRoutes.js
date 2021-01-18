const express =  require('express');
const router = express.Router();
const checkAuth =  require("../Middleware/check-auth.js");

const Coustomer = require('../Controllers/CoustomerControllers.js');

router
.get('/',checkAuth, Coustomer.getCoustomers)
.post('/create',checkAuth, Coustomer.createCoustomer)
.patch('/update/:id',checkAuth, Coustomer.updateCoustomer)
.delete('/delete/:id', checkAuth, Coustomer.deleteCoustomer)
.get('/view/:id',checkAuth, Coustomer.viewCoustomer);

module.exports = router;
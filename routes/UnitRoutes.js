const express = require('express');
const router = express.Router();
const checkAuth = require("../Middleware/check-auth");
const Unit = require("../Controllers/UnitControllers.js");

router
.get('/', checkAuth, Unit.getUnits)
.post('/create', checkAuth, Unit.createUnit)
.patch('/update/:id', checkAuth, Unit.updateUnit)
.delete('/delete/:id', checkAuth, Unit.deleteUnit)
.get('/view/:id', checkAuth, Unit.viewUnit);

module.exports = router;
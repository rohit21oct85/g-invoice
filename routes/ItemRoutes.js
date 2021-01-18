const express =  require('express');
const router = express.Router();
const checkAuth =  require("../Middleware/check-auth.js");
const Item = require('../Controllers/ItemControllers.js');

router
.get('/', checkAuth,  Item.getItems)
.post('/create', checkAuth, Item.createItems)
.patch('/update/:id',checkAuth, Item.updateItems)
.delete('/delete/:id', checkAuth, Item.deleteItem)
.get('/view/:id', checkAuth, Item.viewItem);

module.exports = router;
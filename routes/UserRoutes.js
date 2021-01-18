const express =  require('express');
const checkAuth =  require("../Middleware/check-auth.js");


const User = require("../Controllers/UserControllers.js");

const router = express.Router();

router
.get('/', checkAuth, User.getUsers)

.patch('/update/:id', checkAuth, User.updateUser)
.delete('/delete/:id', checkAuth, User.deleteUser)
.get('/view/:id',checkAuth, User.viewUser);

module.exports = router;

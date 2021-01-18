const express =  require("express");
const Auth = require('../Controllers/AuthController.js');

const router = express.Router();

router
    .post('/register', Auth.Register)
    .post('/login', Auth.Login)
    .post('/forgot-password', Auth.ForgotPassword)
    .post('/refresh-token', Auth.RefreshToken)
    .delete('/logout', Auth.Logout);

module.exports = router;
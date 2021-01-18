const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const CoustomerSchema = new mongoose.Schema({
    user_Id: {
        type: 'string',
    },
    coustomer_type: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    company_name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },

    website:{
       type:String,
       required:true,
    },

    currency:{
       type:String,
       required:true,
    },

    payment_terms:{
       type:String,
       required:true,
    },
    enable_portal_access:{
        type:String
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },    
    password: {
        type: String,
    },
    invite_accept:{
        type:String,
        default: false
    },

});



module.exports = mongoose.model('Customer', CoustomerSchema);
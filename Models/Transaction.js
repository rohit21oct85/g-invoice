const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    amount: {
        type: String,
        required: true,
       
    },
    
    
});



module.exports = mongoose.model('Transaction', TransactionSchema);
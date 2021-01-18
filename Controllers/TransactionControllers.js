const User = require('../Models/Transaction.js');
const jwt = require('jsonwebtoken');

const getTransactions = async (req, res) =>{
    try {
        const Transactions = await Transaction.find();
        return res.status(200).json({ 
                    total: Transactions.length,
                    transaction: Transaction 
                });      
    } catch (error) {
        res.status(409).json({
            message: "Error occured"
        });
    }
};

const createTransaction = async (req, res) =>{
    const body = req.body;
    const newTransaction = new Transaction(body);
    try {
        await newTransaction.save();
        res.status(201).json(newTransaction);

    } catch (error) {
        res.status(409).json({
            message: error.message
        });
    }
};

const updateTransaction = async (req, res) =>{
    try {
        await Transaction.findByIdAndUpdate({_id: req.params.id},req.body)
                .then(response => {
                    return res.status(201).json({
                        message: "Transaction, Updated"
                    })
                })
                .catch(err => {
                    return res.status(500).json({
                        message: "Error Found"
                    })
                });

    } catch (error) {
        res.status(409).json({
            message: error.message
        });
    }
};

const deleteTransaction = async (req, res) =>{
    const id = req.params.id;
    try {
        await Transaction.deleteOne({_id: id}).then( response => {
            return res.status(201).json({
                message: "Transaction, deleted successfully"
              })
        });
        
    } catch (error) {
        res.status(409).json({
            message: error.message
        });
    }
};

const viewTransaction = async (req, res) => {
    try {
        if(req.decoded.id != req.params.id) return res.status(502).json({
            message: "Invalid Token"
        })
        await Transaction.findOne({_id: req.decoded.id}).then( response => {
            return res.status(200).json({ 
                transaction: response 
            })
        }).catch(error => {
            return res.status(409).json({ 
                message: error.message
            })
        })

    } catch (error) {
        res.status(409).json({
            message: "Error occured"
        });
    }
};

module.exports = {
    getTransactions,
    createTransaction,
    updateTransaction,
    deleteTransaction,
    viewTransaction
}
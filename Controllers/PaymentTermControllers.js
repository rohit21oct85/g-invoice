const payment_term = require('../Models/PaymentTerm.js');

const getPayments = async (req, res) =>{
    try {
        
        const payment_terms = await payment_term.find({},{__v:0});
        return res.status(200).json({ 
                    total: payment_terms.length,
                    payment: payment_terms 
                });      
    } catch (error) {
        res.status(409).json({
            message: "Error occured"
        });
    }
};

const createPayment = async (req, res) =>{
    const body = req.body;
    const newpayment_term = new payment_term(body);
    try {
        await newpayment_term.save();
        res.status(201).json(newpayment_term);

    } catch (error) {
        res.status(409).json({
            message: error.message
        });
    }
};

const updatePayment = async (req, res) =>{
    try {
        await payment_term.findByIdAndUpdate({_id: req.params.id},req.body)
                .then(response => {
                    return res.status(201).json({
                        message: "Payment term, Updated"
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

const deletePayment = async (req, res) =>{
    const id = req.params.id;
    try {
        await payment_term.deleteOne({_id: id}).then( response => {
            return res.status(201).json({
                message: "Payment term, deleted successfully"
              })
        });
        
    } catch (error) {
        res.status(409).json({
            message: error.message
        });
    }
};

const viewPayment = async (req, res) => {
    console.log(req.params.id)
    try {
        await payment_term.findOne({_id: req.params.id}).then( response => {
            return res.status(200).json({ 
                payment: response 
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
    getPayments,
    createPayment,
    updatePayment,
    deletePayment,
    viewPayment
}
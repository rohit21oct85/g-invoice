const Tax = require('../Models/Tax.js');

const getTaxes = async (req, res) =>{
    try {
        const taxes = await Tax.find();
        return res.status(200).json({ 
                    total: taxes.length,
                    taxes: taxes 
                });      
    } catch (error) {
        res.status(409).json({
            message: "Error occured"
        });
    }
};

const createTax = async (req, res) =>{
    const body = req.body;
    const newTax = new Tax(body);
    try {
        await newTax.save();
        res.status(201).json(newTax);

    } catch (error) {
        res.status(409).json({
            message: error.message
        });
    }
};

const updateTax = async (req, res) =>{
    try {
        await Tax.findByIdAndUpdate({_id: req.params.id},req.body)
                .then(response => {
                    return res.status(201).json({
                        message: "Tax, Updated"
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

const deleteTax = async (req, res) =>{
    const id = req.params.id;
    try {
        await Tax.deleteOne({_id: id}).then( response => {
            return res.status(201).json({
                message: "Tax, deleted successfully"
              })
        });
        
    } catch (error) {
        res.status(409).json({
            message: error.message
        });
    }
};

const viewTax = async (req, res) => {
    console.log(req.params.id)
    try {
        await Tax.findOne({_id: req.params.id}).then( response => {
            return res.status(200).json({ 
                tax: response 
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

const viewByTaxType = async (req, res) => {
    
    try {
        console.log(req.body)
        await Tax.find({tax_type: req.body.tax_type},{__v:0}).then( response => {
            return res.status(200).json({ 
                total: response.length,
                tax: response 
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
    getTaxes,
    createTax,
    updateTax,
    deleteTax,
    viewTax,
    viewByTaxType
}

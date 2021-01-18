const Coustomer = require('../Models/Coustomer.js');

const getCoustomers = async (req, res) =>{
    try {
        const Coustomers = await Coustomer.find();
        return res.status(200).json({ 
                    total: Coustomers.length,
                    coustomer: Coustomers 
                });      
    } catch (error) {
        res.status(409).json({
            message: "Error occured"
        });
    }
};

const createCoustomer = async (req, res) =>{
    const body = req.body;
    const newCoustomer = new Coustomer(body);
    try {
        await newCoustomer.save();
        res.status(201).json(newCoustomer);

    } catch (error) {
        res.status(409).json({
            message: error.message
        });
    }
};

const updateCoustomer = async (req, res) =>{
    try {
        await Coustomer.findByIdAndUpdate({_id: req.params.id},req.body)
                .then(response => {
                    return res.status(201).json({
                        message: "Customer, Updated"
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

const deleteCoustomer = async (req, res) =>{
    const id = req.params.id;
    try {
        await Coustomer.deleteOne({_id: id}).then( response => {
            return res.status(201).json({
                message: "Customer, deleted successfully"
              })
        });
        
    } catch (error) {
        res.status(409).json({
            message: error.message
        });
    }
};

const viewCoustomer = async (req, res) => {
    try {
        await Coustomer.findOne({_id: req.params.id}).then( response => {
            return res.status(200).json({ 
                coustomer: response 
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
    getCoustomers, 
    createCoustomer, 
    updateCoustomer, 
    deleteCoustomer,
    viewCoustomer
}
const Unit = require('../Models/Unit.js');

const getUnits = async (req, res) =>{
    try {
        const Units = await Unit.find();
        return res.status(200).json({ 
                    total: Units.length,
                    unit: Units 
                });      
    } catch (error) {
        res.status(409).json({
            message: "Error occured"
        });
    }
};

const createUnit = async (req, res) =>{
    const body = req.body;
    const newUnit = new Unit(body);
    try {
        await newUnit.save();
        res.status(201).json(newUnit);

    } catch (error) {
        res.status(409).json({
            message: error.message
        });
    }
};

const updateUnit = async (req, res) =>{
    try {
        await Item.findByIdAndUpdate({_id: req.params.id},req.body)
                .then(response => {
                    return res.status(201).json({
                        message: "unit, Updated"
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

const deleteUnit = async (req, res) =>{
    const id = req.params.id;
    try {
        await Unit.deleteOne({_id: id}).then( response => {
            return res.status(201).json({
                message: "Unit, deleted successfully"
              })
        });
        
    } catch (error) {
        res.status(409).json({
            message: error.message
        });
    }
};

const viewUnit = async (req, res) => {
    console.log(req.params.id)
    try {
        await Unit.findOne({_id: req.params.id}).then( response => {
            return res.status(200).json({ 
                unit: response 
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
    getUnits,
    createUnit,
    updateUnit,
    deleteUnit,
    viewUnit
}
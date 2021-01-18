const Item = require('../Models/Item.js');

const getItems = async (req, res) =>{
    try {
        const Items = await Item.find();
        return res.status(200).json({ 
                    total: Items.length,
                    item: Items 
                });      
    } catch (error) {
        res.status(409).json({
            message: "Error occured"
        });
    }
};

const createItems = async (req, res) =>{
    const body = req.body;
    const newItem = new Item(body);
    try {
        await newItem.save();
        res.status(201).json(newItem);

    } catch (error) {
        res.status(409).json({
            message: error.message
        });
    }
};

const updateItems = async (req, res) =>{
    try {
        await Item.findByIdAndUpdate({_id: req.params.id},req.body)
                .then(response => {
                    return res.status(201).json({
                        message: "item, Updated"
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

const deleteItem = async (req, res) =>{
    const id = req.params.id;
    try {
        await Item.deleteOne({_id: id}).then( response => {
            return res.status(201).json({
                message: "Item, deleted successfully"
              })
        });
        
    } catch (error) {
        res.status(409).json({
            message: error.message
        });
    }
};

const viewItem = async (req, res) => {
    console.log(req.params.id)
    try {
        await Item.findOne({_id: req.params.id}).then( response => {
            return res.status(200).json({ 
                item: response 
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
    getItems,
    createItems,
    updateItems,
    deleteItem,
    viewItem
}
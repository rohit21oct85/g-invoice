const User = require('../Models/User.js');
const jwt = require('jsonwebtoken');

const getUsers = async (req, res) =>{
    try {
        const Users = await User.find();
        return res.status(200).json({ 
                    total: Users.length,
                    user: Users 
                });      
    } catch (error) {
        res.status(409).json({
            message: "Error occured"
        });
    }
};

const createUser = async (req, res) =>{
    const body = req.body;
    const newUser = new User(body);
    try {
        await newUser.save();
        res.status(201).json(newUser);

    } catch (error) {
        res.status(409).json({
            message: error.message
        });
    }
};

const updateUser = async (req, res) =>{
    try {
        await User.findByIdAndUpdate({_id: req.params.id},req.body)
                .then(response => {
                    return res.status(201).json({
                        message: "User, Updated"
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

const deleteUser = async (req, res) =>{
    const id = req.params.id;
    try {
        await User.deleteOne({_id: id}).then( response => {
            return res.status(201).json({
                message: "user, deleted successfully"
              })
        });
        
    } catch (error) {
        res.status(409).json({
            message: error.message
        });
    }
};

const viewUser = async (req, res) => {
    try {
        if(req.decoded.id != req.params.id) return res.status(502).json({
            message: "Invalid Token"
        })
        await User.findOne({_id: req.decoded.id}).then( response => {
            return res.status(200).json({ 
                user: response 
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
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    viewUser
}
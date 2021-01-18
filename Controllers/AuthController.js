const User = require('../Models/User.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

let refreshTokens = [];

const Register = async (req, res) => {

    const body = req.body;
    
    try {
        const newUser = new User(body);
        await newUser.save();
        const accessToken = generateAccessToken(newUser);
        const refreshToken = generateRefreshToken(newUser);
        const fullname = newUser.fullname;
        return res.status(200).json({ 
            accessToken,
            refreshToken,
            fullname
        });
    } catch (error) {
        res.status(502).json({
            message : error.message
        })
    }
}

const Login = async (req, res) => {
    try { 
        const {email, password} = req.body;
        await User.findOne({email: email}).then( user => {
            if(user){
                bcrypt.compare(password, user.password, function(err,response){
                    if(err){
                        console.log(err);
                        return res.status(409).json({ 
                            message: "Password does not match"
                        })
                    }
                    else{
                        if(response){
                            const accessToken = generateAccessToken(user);
                            const refreshToken = generateRefreshToken(user);
                            const fullname = user.fullname;
                            refreshTokens.push(refreshToken);
                            return res.status(200).json({ 
                                accessToken,
                                refreshToken,
                                fullname
                            });
                        }                       
                    }
                });
            }else{
                res.status(409).json({ 
                    message: err
                })
            }
        }).catch(error => {
            res.status(502).json({
                message: "Email Does not exists in our database"
            });     
        })
        
    } catch (err) {
        return res.status(402).json({
            message: err
        });  
    }
}
const generateAccessToken = (user) => {
    const accessTokenSecret = 'KA-invoice-2021';
    return jwt.sign({ 
        id: user._id,  
        role: user.role 
    }, accessTokenSecret, {expiresIn: '60m'})
}
const generateRefreshToken = (user) => {
    const refreshTokenSecret = 'KR-invoice-2021';
    return jwt.sign({
        id: user._id,   
        role: user.role
    },refreshTokenSecret);
}

const RefreshToken = async (req,res) => {
    
    const refreshTokenSecret = 'KR-invoice-2021';
    const refreshToken = req.body.token;
    if(refreshToken === null) return res.status(401).json({message: 'Invalid refresh token'});
    if(!refreshTokens.includes(refreshToken)) return res.status(401).json({message: 'Invalid refresh token'});
    jwt.verify(refreshToken, refreshTokenSecret, (err, user) => {
        if(err) return res.status(err).json({message: "Error found"});
        const accessToken = generateAccessToken({email: user.email,role: user.role });
        return res.status(200).json({ 
            accessToken
        });
    })
}

const Logout = async (req, res) => {
    const accessTokenSecret = 'KA-invoice-2021';
    const authorizationHeader = req.headers.authorization;
    if (authorizationHeader){
        const accessToken = req.headers.authorization.split(' ')[1];  
        const decode = await jwt.verify(accessToken, accessTokenSecret);
        const UserData = {id: decode.id, role: decode.role};
        let newAccessToken = await jwt.sign(UserData, accessTokenSecret, {expiresIn: '0s'});
        return res.status(204).json({
            message: "successfully loggedout",
            accessToken: newAccessToken
        });    
    }
}

const ForgotPassword = async (req, res) => {
    try {
        const email = req.body.email;
        const data = await User.findOne({email: email});
        if(data){
            console.log(data);
            return res.status(201).json(data)
        }else{
            return res.status(402).json({message: "Email does not belongs to our Database"})    
        }
    } catch (error) {
        return res.status(502).json({message: "Somethign went wrong!"})
    }

}

module.exports = {
    Register,
    Login,
    Logout,
    generateAccessToken,
    generateRefreshToken,
    RefreshToken,
    ForgotPassword,
}
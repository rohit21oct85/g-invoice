const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    role: {
        type: String,
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
});

UserSchema.pre('save', function(next) {
    const user = this;
    if(!user.isModified || !user.isNew){
        next();
    }else{
        bcrypt.hash(user.password, 10, function(err, hash){
            if(err) {
                console.log('Error hashing password for user', user.name);
                next(err);
            }
            else{
                user.password = hash;
                next();
            }
        })
    }
});

module.exports = mongoose.model('User', UserSchema);
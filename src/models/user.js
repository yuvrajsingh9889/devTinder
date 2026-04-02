const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    emailId: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (value) => validator.isEmail(value),
            message: 'invalid email id'
        }
    },
    password: {
        type: String,
        required: true,
    },
    age:{
        type: String
    },
    gender:{
        type: String
    }
},
    {
        timestamps: true
    }
);

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
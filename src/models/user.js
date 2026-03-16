const mongoose = require('mongoose');

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
    },
    password: {
        type: String,
        required: true,
    },
    age:{
        type: Number
    },
    gender:{
        type: String
    }
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
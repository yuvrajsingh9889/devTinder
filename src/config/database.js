const mongoose = require('mongoose');

const connectDB = async () => {
    // await mongoose.connect('mongodb+srv://root:root@employee-portal.xt7aq2z.mongodb.net/devTinder');
    await mongoose.connect('mongodb://localhost:27017/devTinder');
}

module.exports = connectDB;
const express = require('express');
const connectDB = require('./config/database');
const UserModel = require('./models/user');

const app = express();
app.use(express.json());

app.post('/signup', async (req, res) => {
    // creating new instance of user model and saving it to database
    const user = new UserModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        emailId: req.body.emailId,
        password: req.body.password,
        age: req.body.age,
        gender: req.body.gender
    })


    app.use(express.json());
    await user.save()
        .then((result) => {
            console.log('user created successfully', result);
            res.status(201).json({
                message: 'user created successfully',
                user: result
            })
        })
        .catch((err) => {
            console.log('error creating user', err);
            res.status(500).json({
                message: 'error creating user',
                error: err
            })
        })
})

// get user data by email id
app.get('/getOneUser', async (req,res)=>{
    const email = req.body.emailId;

    try{
    const userData = await UserModel.find({emailId: email})
    if(userData.length === 0){
        return res.status(404).json({
            message: 'user not found'
        })
    }
    else{
    res.send(userData).status(200)
}
}
     catch(err){
        console.log('error fetching user data', err);
        res.status(500).json({
            message: 'error fetching user data',
            error: err
        })
     }
})

// get all users data
app.get('/getAllUsers', async (req,res)=>{
    try{
        const allUserData = await UserModel.find({});
        if(allUserData.length === 0){
            return res.status(404).json({
                message : 'No user found'
            })
        }
        else{
            res.send(allUserData).status(200).json({
                message: 'All the users data fetched successfully'
            })
        }
    }
    catch(err){
        console.log('error fetching all users data', err);
        res.status(500).json({
            message: 'error fetching all users data',
            error: err
        })
    }
})

// get user by id
app.get('/getUserById', async (req, res)=>{
    const userId = req.body.userId;
    try{
        const userData = await UserModel.findById(userId);
        if(!userData){
            return res.status(404).json({
                message : 'user not found'
            })
        }
            res.send(userData).status(200)
    }
    catch(err){
        console.log('failed to fetch user data by id', err);
        res.status(500).json({
            message: 'failed to fetch the user data by id'
        })
    }
})

// delete user by id
app.delete('/deleteUserById', async (req, res)=>{
    const Id = req.body.userId;
    try{
        const userId = await UserModel.findByIdAndDelete(Id);
        if(!userId){
            return res.status(404).json({
                message: 'user not forund'
            })
        }
        res.status(200).json({
            message: 'user deleted successfully'
        })
    }
    catch(err){
        res.status(500).json({
            message : 'error deleting user by id',
            error: err
        })
    }
})

// update user by id
app.patch('/updateUserById', async (req, res)=>{
    const userId = req.body.userId;
    const updateData = req.body;
    try{
        const updatedUser = await UserModel.findByIdAndUpdate(userId, updateData);
        if(!updatedUser){
            res.status(404).json({
                message: 'user not found'
            })
        }
        res.status(200).json({
            message: 'user updated successfully'
        })
    }
    catch(err){
        console.log('error updating user data by id', err);
        res.status(500).json({
            message: 'error updating user data by id',
            error: err
        })
    }
})

const port = 7777
connectDB()
    .then(() => {
        console.log('connected to database');
        app.listen(port, () => {
            console.log(`your server is running at http://localhost:${port}`);
        });
    })
    .catch((err) => {
        console.log('error connecting to database', err);
    })
 
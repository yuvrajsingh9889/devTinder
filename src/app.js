const express = require('express');
const connectDB = require('./config/database');
const UserModel = require('./models/user');


const app = express();

app.use(express.json());


app.post('/signup', async (req, res) => {
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

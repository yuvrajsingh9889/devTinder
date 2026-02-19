const express = require('express')

const app = express();

app.get('/user',(req,res)=>{
    res.send({
        userName : "Yuvraj Singh",
        department : "Dev Team"
    })
});

app.post("/user",(req,res)=>{
    res.send('Save data successfully to the database');
});

app.delete("/user",(req,res)=>{
    res.send('data deleted successfully from the databse');
});

const port = 3001
app.listen(port,()=>{
    console.log(`your server is running at http://localhost:${port}`);
});
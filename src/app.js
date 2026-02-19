const express = require('express')

const app = express();

app.get("/user/:age/:name/:department",(req,res)=>{
    console.log(req.params);
    console.log(req.query);
    res.send({
        userName : "Yuvraj Singh",
        department : "Dev Team"
    })
});

const port = 3001
app.listen(port,()=>{
    console.log(`your server is running at http://localhost:${port}`);
});
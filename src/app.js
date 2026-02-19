const express = require('express')

const app = express();

// app.get("/user",(req,res)=>{
//     console.log(req.query);  // used to read valuse from the URL in form of : 
//     res.send({
//         userName : "Yuvraj Singh",
//         department : "Dev Team"
//     })
// });

app.get("/user:age/:name/:department",(req,res)=>{
    console.log(req.params); //used to read values from the URL in form of : http://localhost:3001/user/2112/yuvraj/developer
    res.send({
        userName : "Yuvraj Singh",
        department : "Dev Team"
    })
});

const port = 3001
app.listen(port,()=>{
    console.log(`your server is running at http://localhost:${port}`);
});
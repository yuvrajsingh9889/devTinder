const express = require('express')

const app = express();

app.use((req,res)=>{
    if(req.url === '/'){
    res.send("hello, from the server");
    }
    else if (req.url === '/admin') {
        res.send("hello, from the admin");
    }
    else if (req.url === '/employee') {
        res.send("hello, from the employee");
    }
    else if (req.url === '/hr') {
        res.send("hello, from the hr");
    }
     else {
        res.send("hello, from the client");
    }
})

const port = 3001
app.listen(port,()=>{
    console.log(`your server is running at http://localhost:${port}`);
});
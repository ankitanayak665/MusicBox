const express = require("express");
const app = express();


app.get("/index.html",(req,res,next)=>{
    res.send("<h1>Helllo</h1>");
    
});

app.listen(8000,()=>{
    console.log("Server started")
});

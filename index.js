var express = require("express");
const app =express();
const port=1200;
var imp = require('./module');
app.get("/",(req,res)=>{
    res.send(imp.hw1());
    
}).listen(port)

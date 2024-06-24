const express = require("express");
const mainrouter=require("./routes/index.js");
const userrouter=require("./routes/user.js");
const cors=require("cors")
const app=express();
app.use(cors)
app.use(express.json)  


app.use("/api/v1",mainrouter); 
   //ALL REQUESTS WHICH COME TO /API/V1 GOES TO MAIN ROUTER 


   app.listen(3000)

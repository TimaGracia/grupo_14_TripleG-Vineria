const express = require("express");
const register = express.Router();
const path = require("path");
register.get("/register",(req,res)=>res.sendFile(path.join(__dirname,"../views/register.html")));

module.exports = register;
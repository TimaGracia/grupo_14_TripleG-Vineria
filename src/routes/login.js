const express = require("express");
const login = express.Router();
const path = require("path");
login.get("/login",(req,res)=>res.sendFile(path.join(__dirname,"../views/login.html")));

module.exports = login;
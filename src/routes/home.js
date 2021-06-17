const express = require("express");
const home = express.Router();
const path = require("path");
home.get("/",(req,res)=>res.sendFile(path.join(__dirname,"../views/home.html")));

module.exports = home;

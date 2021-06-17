const express = require("express");
const productCart = express.Router();
const path = require("path");
productCart.get("/productCart",(req,res)=>res.sendFile(path.join(__dirname,"../views/productCart.html")));

module.exports = productCart;
const express = require("express");
const productDetail = express.Router();
const path = require("path");
productDetail.get("/productDetail",(req,res)=>res.sendFile(path.join(__dirname,"../views/productDetail.html")));

module.exports = productDetail;
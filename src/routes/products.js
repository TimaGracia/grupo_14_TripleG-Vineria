const express = require("express");
const router = express.Router();
const path = require("path");
const productController = require("../controllers/productController")


//router.get("/productDetail",(req,res)=>res.sendFile(path.join(__dirname,"../views/productDetail.html")));


//router.get("/productCart",(req,res)=>res.sendFile(path.join(__dirname,"../views/productCart.html")));

router.get("/productCart", productController.productCart);

router.get("/productDetail", productController.productDetail);

module.exports = router;

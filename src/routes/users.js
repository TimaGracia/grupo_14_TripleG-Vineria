const express = require("express");
const router = express.Router();
const path = require("path");
const userController = require("../controllers/userController")

//router.get("/register",(req,res)=>res.sendFile(path.join(__dirname,"../views/register")));

router.get("/register", userController.register)
//router.get("/login",(req,res)=>res.sendFile(path.join(__dirname,"../views/login.html")));
router.get("/login", userController.login)

module.exports = router;
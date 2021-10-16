const express = require("express");
const router = express.Router();
const path = require("path");
const main = require("../controllers/mainController")
const productController = require("../controllers/productController");
const userController = require("../controllers/userController");

router.get("/api/users", userController.all);
router.get("/api/user/:id", userController.apiGetById);

router.get("/api/products");


module.exports = router;

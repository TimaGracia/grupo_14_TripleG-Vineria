const express = require("express");
const router = express.Router();
const path = require("path");
const main = require("../controllers/mainController")
const productController = require("../controllers/productController");
const userController = require("../controllers/userController");

router.get("/api/users", userController.all);
router.get("/api/user/:id", userController.apiGetById);

router.get("/api/products", productController.all);
router.get("/api/product/:id", productController.apiGetById);

router.get("/api/business", productController.apiAllBusiness);


module.exports = router;

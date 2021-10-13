const express = require("express");
const router = express.Router();
const path = require("path");
const main = require("../controllers/mainController")

router.get("/", main.index)
router.get("/nosotros", main.nosotros)
router.get("/contacto", main.contacto)

module.exports = router;

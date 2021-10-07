const express = require("express");
const router = express.Router();
const path = require("path");
const userController = require("../controllers/userController");
const {body} = require("express-validator");
const guestMiddleware= require("../middlewares/guestMiddleware");
const authMiddleware= require("../middlewares/authMiddleware")

const validateRegister = [
    body("nombreCompleto").notEmpty().withMessage("Ingrese su nombre y apellido"),
    body("nombreCompleto").isLength(2).withMessage("Ingrese un nombre y apellido mayor a 2 caracteres"),
    body("email").notEmpty().withMessage("Ingrese su email").bail(), 
    body("email").isEmail().withMessage("Ingrese un email valido"), 
    body("contrasenia").notEmpty().withMessage("Contraseña invalida"), 
    body("contrasenia").isLength(8).withMessage("La contraseña debe tener al menos 8 caracteres").bail(),
    body("contrasenia").isStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1
    })
    .withMessage("La contraseña debe contener una letra Mayuscula, un numero y un caracter especial")

];

const validateLogin = [
    body("email").notEmpty().withMessage("Ingrese su email").bail(), 
    //body("email").isEmail().withMessage("Ingrese un email valido"), 
    body("password").notEmpty().withMessage("Contraseña invalida"), 

];


router.post("/register",validateRegister, userController.store);

router.get("/register", guestMiddleware, userController.register);

router.get("/users/user/:id", userController.getById);

router.get("/login",guestMiddleware, userController.login);

router.get("/logout",authMiddleware, userController.logout);

router.post("/login", validateLogin, userController.processLogin);

module.exports = router;
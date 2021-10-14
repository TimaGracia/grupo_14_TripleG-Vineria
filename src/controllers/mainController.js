const path = require("path");
//const productModel = require("../models/productModel")
const productUtil = require("../controllers/productUtil")

let mainController = {
    index: async function (req, res){
        productos = await productUtil.all();
    
        res.render("home", {style:"home", title: "Home",products:productos})

    }, 
    nosotros: function (req, res){
        res.render("nosotros", {style:"nosotros", title: "Nosotros"})
    },
    contacto: function (req, res){
        res.render("contacto", {style:"nosotros", title: "Nosotros"})
    }

}

module.exports = mainController;
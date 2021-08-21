const path = require("path");
const productModel = require("../models/productModel")

let mainController = {
    index: function (req, res){
        //res.send("Bienvenidos al sitio");
        res.render("home", {style:"home", title: "Home",productos:productModel.all()})
        
        //res.render(path.resolve(__dirname, "../views/home"));
        //sendFile(path.resolve(__dirname, "../views", "home"))
        //res.render("productos");
    }

}

module.exports = mainController;
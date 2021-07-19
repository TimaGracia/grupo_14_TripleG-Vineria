const path = require("path");

let productController = {
    productCart: function(req, res){
        res.render("productCart", {style:"productCart", title: "Carrito de Productos"})
    },
    productDetail: function(req, res){
        res.render("productDetail", {style:"productDetail", title: "Detalle del Producto"})
    },
    productCreate: function(req, res){
        res.render("productCreate", {style:"productCreate", title: "Crear y editar Productos"}, {select: "select"})
    },
    

}

module.exports = productController;

const path = require("path");
const productModel = require("../models/productModel")

let productController = {
    productCart: function(req, res){
        res.render("productCart", {style:"productCart", title: "Carrito de Productos"})
    },
    productDetail: function(req, res){
        res.render("productDetail", {style:"productDetail", title: "Detalle del Producto"})
    },
    productCreate: function(req, res){
        res.render("productCreate", {style:"productCreate", title: "Crear y editar Productos"})//, {select: "select"}
    },
    list: function(req, res){
        res.render("products", {productos:productModel.all(), style:"productCreate",title: "Listado de Productos"})
    }, 
    create: function(req, res){
        //console.log(req.body);
        let saved = productModel.create(req.body);
        
        return saved ? res.redirect("products/"+saved.id) : res.status(500).send("Error en el servidor");
    },
    getById: function(req, res){
        //console.log(req.params.id)
        res.render("productDetail", {product:productModel.getById(req.params.id), style:"productDetail", title: "Detalle del Producto"})
    },
    delete: function (req, res){
    
        let deleted = productModel.delete(req.params.id);
        console.log("ESTE ES EL ID DESDE EL CONTROLLER"+req.params.id)
        return deleted ? res.redirect("/") : res.status(500).send("Error en el servidor");
    }

}

module.exports = productController;

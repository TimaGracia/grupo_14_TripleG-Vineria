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
    getByIdEdit: function(req, res){
        //console.log(req.params.id)
        res.render("productEdit", {product:productModel.getById(req.params.id), style:"productDetail", title: "Editar el Producto"})
    },
    delete: function (req, res){
    
        let deleted = productModel.delete(req.params.id);
        
        return deleted ? res.redirect("/") : res.status(500).send("Error en el servidor");
    },
    update: function (req, res){
        
        let idUpdate = req.params.id;
        //console.log(req.body);
        let updated = productModel.update(req.body, idUpdate);
        return updated ? res.redirect("/products/"+idUpdate) : res.status(500).send("Error en el servidor");
    }

}

module.exports = productController;

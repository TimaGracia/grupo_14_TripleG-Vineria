const path = require("path");
const productModel = require("../models/productModel")
const db = require("../database/models")

let productController = {
    productCart: function(req, res){
        res.render("productCart", {style:"productCart", title: "Carrito de Productos"})
    },
    productDetail: function(req, res){
        res.render("productDetail", {style:"productDetail", title: "Detalle del Producto",productos:productModel.all()})
    },
    productCreate: async function(req, res){
        
        try {
            let categories = await db.Category.findAll();
            res.render("productCreate", {style:"productCreate", title: "Crear y editar Productos", categories: categories})//, {select: "select"}
            
        } catch (error) {
            console.log(error);
            
        }
        
    },
    list: async function(req, res){

        try {
            let products = await db.Product.findAll({
                include: [{association: "categories"}, {association: "business"}]
            });
            //productos:productModel.all()
            res.render("products", {productos:products, style:"list",title: "Listado de Productos"})
            
        } catch (error) {
            console.log(error);
            
        }
        
    }, 
    create: function(req, res){

        //let saved = productModel.create(req.body,req.file);
        let file = req.file;
        let img;
        if (file){
            img = "/uploads/products/"+file.filename;
        } else img = "/uploads/products/default.jpg";

        db.Product.create({
            idBusiness: 1,
            name: req.body.name,
            description: req.body.description,
            stock:req.body.stock,
            image:img,
            idCategory:1,
            price:req.body.price,
        })

        return res.redirect("/products")
        //redirect("products")
        
       // return saved ? res.redirect("products/"+saved.id) : res.status(500).send("Error en el servidor");
    },
    getById: function(req, res){
        //console.log(req.params.id)
        res.render("productDetail", {product:productModel.getById(req.params.id),productos:productModel.all(), style:"productDetail", title: "Detalle del Producto"})
    },
    getByIdEdit: function(req, res){
        //console.log(req.params.id)
        res.render("productEdit", {product:productModel.getById(req.params.id), style:"productEdit",productos:productModel.all(), title: "Editar el Producto"})
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

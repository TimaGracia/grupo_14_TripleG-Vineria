const path = require("path");
const productModel = require("../models/productModel")
const db = require("../database/models")
const productUtil = require("./productUtil")
const {validationResult} = require("express-validator");
const { resolveNaptr } = require("dns");


let productController = {
    productCart: async function(req, res){
        //console.log(req.session)
        //list of products for idUser
        let products = await productUtil.getProductCart(req.session.userLogged.idUser);
        //console.log(products)
 
        res.render("productCart", {style:"productCart", title: "Carrito de Productos", productos:products})},
    all: async function(req, res){

        let products = await productUtil.apiAll();
        res.send(JSON.stringify(products));

    },
    apiGetById: async function(req, res){
        let product = await db.Product.findByPk(req.params.id);
        res.send(JSON.stringify(product));

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
    listFilter: async function(req, res){

        let name = req.body.nombre;

        try {
            let productos = await productUtil.allFilter(req.body.minimo, req.body.maximo, name);

            res.render("products", {productos:productos, style:"list",title: "Listado de Productos"})
            
        } catch (error) {
            console.log(error);
            
        }
        
    }, /*
    
    listFilterPrice: async function(req, res){
        console.log("llegue")
        console.log(req.body)

        try {
            let productos = await productUtil.allFilterPrice(req.body.minimo, req.body.maximo);
            console.log(productos);
            //res.redirect("/products", {productos:productos, style:"list",title: "Listado de Productos"})
            res.render("products", {productos:productos, style:"list",title: "Listado de Productos"})
            
        } catch (error) {
            console.log(error);
            
        }
        
    }, 
    listFilterName: async function(req, res){
        console.log("llegue")
        console.log(req.body)

        try {
            let productos = await productUtil.allFilterName(req.body.nombre);
            console.log(productos);
            //res.redirect("/products", {productos:productos, style:"list",title: "Listado de Productos"})
            res.render("products", {productos:productos, style:"list",title: "Listado de Productos"})
            
        } catch (error) {
            console.log(error);
            
        }
        
    }, */

 
    create: function(req, res){
        //console.log(req.body)
        let errors = validationResult(req);
        console.log(errors);

        if (errors.isEmpty()){
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
        } else {
            console.log(req.body)
            res.render("productCreate", {style:"productCreate", title: "Crear y editar Productos", errors:errors.mapped(), old:req.body});//errors:errors.array()
            
        }
        //let saved = productModel.create(req.body,req.file)
        //redirect("products")
       // return saved ? res.redirect("products/"+saved.id) : res.status(500).send("Error en el servidor");
    },
    addToCart: async function (req, res) {


        try {
            //console.log(req)
            console.log("El usuario logueado es: "+req.session)

            let registry = await db.ProductCart.create({
                idUser: req.body.user, 
                idProduct: req.body.product, 
                cant: 5
            })
            res.redirect("productCart")
            
        } catch (error) {
            console.log(error);
            
        }



    },
    getById: async function(req, res){
        //console.log(req.params.id)
        let productos = await productUtil.all();
        //console.log("Esto son los productos"+productos);
        
        try {
            let productId = await db.Product.findByPk(req.params.id);
            res.render("productDetail", {product: productId,productos: productUtil.all(), style:"productDetail", title: "Detalle del Producto"})
            
        } catch (error) {
            console.log(error);
            
        }
    },
    getByIdEdit: async function(req, res){
        //console.log(req.params.id)
        let productId = await db.Product.findByPk(req.params.id);
        res.render("productEdit", {product:productId, style:"productEdit",productos:productUtil.all(), title: "Editar el Producto"})
    },
    delete: async function (req, res){
    
        let deleted = await db.Product.destroy({
            where: {
                idProduct: req.params.id}
        });
        
        return deleted ? res.redirect("/products") : res.status(500).send("Error en el servidor");
    },
    success: async function (req, res){
    
        let deleted = await db.ProductCart.destroy({
            where: {
                idUser: req.session.userLogged.idUser}
        });
        console.log("Este es el id del usuario "+req.session.userLogged.idUser)
        console.log(deleted);
        
        return deleted ? res.redirect("/productCart") : res.status(500).send("Error en el servidor");
    },
    removeProductCart: async function (req, res){
        console.log("esto es req.body"+req.body);
    
        let deleted = await db.ProductCart.destroy({
            where: {
                idUser: req.session.userLogged.idUser, 
                idProduct: req.params.id}
        });

        console.log(deleted);
        
        return deleted ? res.redirect("/productCart") : res.status(500).send("Error en el servidor");
    },
    update: async function (req, res){
        
        let updated  = await db.Product.update({
            idBusiness: 1,
            name: req.body.name,
            description: req.body.description,
            stock:req.body.stock,
            idCategory:1,
            price:req.body.price,
        },{
            where: {idProduct: req.params.id}
        })

        let idUpdate = req.params.id;
        //console.log(req.body);
        //let updated = productModel.update(req.body, idUpdate);
        return updated ? res.redirect("/products/"+idUpdate) : res.status(500).send("Error en el servidor");
    }, 
    listBusiness: async function(req, res){

        try {
            let business = await db.Business.findAll({
                //include: [{association: "categories"}, {association: "business"}]
            });
            //productos:productModel.all()
            res.render("bodegas", {business:business, style:"bodegas",title: "Listado de Empresas"})
            
        } catch (error) {
            console.log(error);
            
        }
        
    }, 

}

module.exports = productController;

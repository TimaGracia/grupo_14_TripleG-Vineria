const express = require("express");
const router = express.Router();
const path = require("path");
const productController = require("../controllers/productController")


//router.get("/productDetail",(req,res)=>res.sendFile(path.join(__dirname,"../views/productDetail.html")));

//router.get("/productCart",(req,res)=>res.sendFile(path.join(__dirname,"../views/productCart.html")));

router.get("/productCart", productController.productCart);

//router.get("/productDetail", productController.productDetail);

router.get("/products/create", productController.productCreate);

router.get("/products", productController.list);


//router.post("/create", productController.create);
router.post("/products", productController.create);

router.get("/products/:id", productController.getById);

//router.get("/products/:id/edit", productController.getById);

router.get("/products/:id/edit", productController.getByIdEdit);

router.put("/products/:id", productController.update);

router.delete("/products/:id", productController.delete);

/*
1. /products (GET) -> hecho
Listado de productos

2. /products/create (GET) -> hecho
Formulario de creación de productos

3. /products/:id (GET) -> hecho
Detalle de un producto particular

4. /products (POST) -> Hecho
Acción de creación (a donde se envía el formulario)

5. /products/:id/edit (GET) --> hecho
Formulario de edición de productos

6. /products/:id (PUT)
Acción de edición (a donde se envía el formulario):

7. /products/:id (DELETE) -> Hecho
Acción de borrado
*/
module.exports = router;

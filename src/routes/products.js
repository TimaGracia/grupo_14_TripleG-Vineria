const express = require("express");
const multer = require("multer");
const router = express.Router();
const path = require("path");
const {body} = require("express-validator");
const productController = require("../controllers/productController");
const authMiddleware= require("../middlewares/authMiddleware");
const isAdminMiddleware= require("../middlewares/isAdminMiddleware");


const validateProduct = [
    body("name").notEmpty().withMessage("El campo nombre no puede estar vacío"),
    body("name").isLength(5).withMessage("El nombre debe tener al menos 5 caracteres"),
    body("description").isLength(20).withMessage("La descripción debe tener al menos 20 caracteres"),
    //check("image-vino").custom(())
];
//multer config

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(__dirname,"../../public/uploads/products"))
        
    }, 
    filename: (req, file, cb) => {
        
        const newFilename = file.fieldname + "-" + Date.now()+ path.extname(file.originalname);
        cb(null, newFilename)

    }
}); 

const upload = multer({storage : storage});//: storage


router.get("/productCart",authMiddleware, productController.productCart);

router.get("/products/create", authMiddleware, productController.productCreate);//sql

router.get("/products", isAdminMiddleware, productController.list);//sql

router.get("/bodegas", productController.listBusiness);//sql

router.post("/products",upload.single("image-vino"), validateProduct, productController.create);

router.post("/addToCart", productController.addToCart)

router.get("/products/:id", productController.getById);

router.get("/products/:id/edit",authMiddleware, productController.getByIdEdit);

router.put("/products/:id", productController.update);

router.delete("/products/:id", productController.delete);

router.post("/success", productController.success);
/*
router.post("/products/filterPrice", productController.listFilterPrice);
router.post("/products/filterName", productController.listFilterName);*/
router.post("/products/filter", productController.listFilter);

router.get("/remove/:id", productController.removeProductCart);


module.exports = router;

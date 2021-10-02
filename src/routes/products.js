const express = require("express");
const multer = require("multer");
const router = express.Router();
const path = require("path");
const productController = require("../controllers/productController");
const authMiddleware= require("../middlewares/authMiddleware");


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

router.get("/products", productController.list);//sql

router.post("/products", upload.single("image-vino"), productController.create);//sql

router.get("/products/:id", productController.getById);

router.get("/products/:id/edit",authMiddleware, productController.getByIdEdit);

router.put("/products/:id", productController.update);

router.delete("/products/:id", productController.delete);


module.exports = router;

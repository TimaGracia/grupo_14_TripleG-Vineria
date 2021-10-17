const db = require("../database/models")

module.exports = {
    all: async function(){

        try {
            let products = await db.Product.findAll({
                include: [{association: "categories"}, {association: "business"}]
            });

            return products;
            
        } catch (error) {
            console.log(error);
            
        }

    },
    getProductCart: async function(id){
        try {
            let products = await db.ProductCart.findAll({
                include: [{association: "products"}, {association: "users"}],
                where: {
                    idUser: id}
            });
            //console.log("Este es el id del user"+id)
            //console.log(products);
            return products;
            
        } catch (error) {
            console.log(error);
            
        }

    }

}
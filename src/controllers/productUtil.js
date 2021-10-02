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

}
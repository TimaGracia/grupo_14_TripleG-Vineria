const db = require("../database/models")

module.exports = {
    all: async function(){

        let all = await db.Product.findAll({raw : true});
        return all;

    },
    apiAll: async function(){

        let all = await db.Product.findAll({
            raw : true, 
            attributes: {exclude: ['image']}
        
        });
        return all;

    },
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
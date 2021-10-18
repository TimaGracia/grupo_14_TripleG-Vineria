const db = require("../database/models")
const { Op } = require("sequelize");

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
    allFilter: async function(min, max, name){

        try {
            let products = await db.Product.findAll({
                where: {
                    price: {
                        [Op.between]: [min, max]
                    }, 
                    name: {
                        [Op.like]: "%"+name+"%",
                    }
                },
                include: [{association: "categories"}, {association: "business"}]
            });

            return products;
            
        } catch (error) {
            console.log(error);
            
        }

    },

/*
    allFilterPrice: async function(min, max){

        try {
            let products = await db.Product.findAll({
                where: {
                    price: {
                        [Op.between]: [min, max]
                    }
                },
                include: [{association: "categories"}, {association: "business"}]
            });

            return products;
            
        } catch (error) {
            console.log(error);
            
        }

    },
    allFilterName: async function(name){
        
        try {
            let products = await db.Product.findAll({
                where: {
                    name: {
                        [Op.like]: "%"+name+"%",
                    }
                },
                include: [{association: "categories"}, {association: "business"}]
            });

            return products;
            
        } catch (error) {
            console.log(error);
            
        }

    },*/
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
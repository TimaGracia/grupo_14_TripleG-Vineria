const db = require("../database/models")
const bcrypt = require('bcryptjs');

module.exports = {
    all: async function(){

        let all = await db.User.findAll({raw : true});
        return all;

    },
    apiAll: async function(){

        let all = await db.User.findAll({
            raw : true, 
            attributes: {exclude: ['password', "admin"]}
        
        });
        return all;

    },

    create: async function(data, file){
        let all = this.all();
        let img;

        if (file){
            img = "/uploads/users/"+file.filename;
        } else img = "/uploads/users/default.png";

        try {
            let newElement = await db.User.create({
                name: data.nombreCompleto,
                email: data.email,
                password: bcrypt.hashSync(data.contrasenia, 10),
                admin: false,
                avatar: img
            });
            
        } catch (error) {
            console.log(error);
            
        }
 
    }

}
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

module.exports = {
    directory: path.resolve(__dirname, '../data', "users.json"),
    all: function(){
        const file = fs.readFileSync(this.directory);
        
        return JSON.parse(file);
    }, 
    getById: function(id){
        return this.all().find(element => element.id == id)
    },
    findByField: function (field, text) {
		let allUsers = this.all();
		let userFound = allUsers.find(oneUser => oneUser[field] === text);
		return userFound;
	},
    create: function(data, file){
        let all = this.all();
        let img;

        if (file){
            img = "/uploads/users/"+file.filename;
        } else img = "/uploads/users/default.png";

        let newElement = {
            id: all.length > 0 ? all[all.length - 1].id +1 : 1,
            name: data.nombreCompleto,
            email: data.email,
            password: bcrypt.hashSync(data.contrasenia, 10),
            admin: false,
            avatar: img
 
        }
        all.push(newElement);
        fs.writeFileSync(this.directory, JSON.stringify(all, null, 2));
        return newElement;
    },
}
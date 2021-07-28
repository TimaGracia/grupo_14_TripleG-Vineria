const fs = require('fs');
const path = require('path');

module.exports = {
    directory: path.resolve(__dirname, '../data', "products.json"),
    all: function(){
        const file = fs.readFileSync(this.directory);
        console.log(JSON.parse(file));
        return JSON.parse(file);
    }, 
    getById: function(id){
        return this.all().find(element => element.id == id)
    },
    create: function(data){
        let all = this.all();
        //console.log(all);
        let newElement = {
            id: all.length > 0 ? all[all.length - 1].id +1 : 1,
            name: data.name,
            description: data.description,
            image: data.image,
            category: data.category,
            price: data.price
        }
        all.push(newElement);
        fs.writeFileSync(this.directory, JSON.stringify(all, null, 2));
        return newElement;
    },
    update: function(){},
    delete: function(id){
        let all = this.all();
        let deleted = this.getById(id);

        console.log("ESTE ES EL ID en model:"+id);

        all = all.filter(element => element.id != deleted.id)
        fs.writeFileSync(this.directory, JSON.stringify(all, null, 2));
        return true;
    },
}
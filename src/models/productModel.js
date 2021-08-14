const fs = require('fs');
const path = require('path');

module.exports = {
    directory: path.resolve(__dirname, '../data', "products.json"),
    all: function(){
        const file = fs.readFileSync(this.directory);
        
        return JSON.parse(file);
    }, 
    getById: function(id){
        return this.all().find(element => element.id == id)
    },
    create: function(data, file){
        let all = this.all();
        //console.log(all);
        //console.log(file);
        let img;
        if (file){
            img = "/uploads/products/"+file.filename;
        } else img = "/uploads/products/default.jpg";

        let newElement = {
            id: all.length > 0 ? all[all.length - 1].id +1 : 1,
            name: data.name,
            description: data.description,
            image: img,
            category: data.category,
            price: data.price
        }
        all.push(newElement);
        fs.writeFileSync(this.directory, JSON.stringify(all, null, 2));
        return newElement;
    },
    update: function(data,id){
        let all = this.all();
        
       all = all.map(element => {
 
            if(element.id == id){
                element.name = data.name,
                element.description = data.description,
                element.image = data.image,
                element.category = data.category,
                element.colors = data.colors,
                element.price = data.price;

                return element;
            }
            return element
        });
        fs.writeFileSync(this.directory, JSON.stringify(all, null, 2));
        return true;
    },
    delete: function(id){
        let all = this.all();
        let deleted = this.getById(id);

        all = all.filter(element => element.id != deleted.id)
        fs.writeFileSync(this.directory, JSON.stringify(all, null, 2));
        return true;
    },
}
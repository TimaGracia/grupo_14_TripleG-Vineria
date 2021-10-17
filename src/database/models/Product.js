module.exports = (sequelize, DataTypes) => {

    const Product = sequelize.define("Product", {
        idProduct: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idBusiness: {
            type: DataTypes.INTEGER,
            
        },
        name: {
            type: DataTypes.STRING,
            
        },
        description: {
            type: DataTypes.STRING,
            
        },
        stock: {
            type: DataTypes.INTEGER,
        },
        image: {
            type: DataTypes.STRING,
        },
        idCategory: {
            type: DataTypes.INTEGER,
        },
        price: {
            type: DataTypes.FLOAT,
        },

    }, {
        tableName: "products",
        timestamps: false
    });

    Product.associate = function(models){
        Product.belongsTo(models.Business, {
            as: "business", 
            foreignKey: "idBusiness"
        });
        Product.belongsTo(models.Category, {
            as: "categories", 
            foreignKey: "idCategory"
        });
 
    }

    return Product;
}
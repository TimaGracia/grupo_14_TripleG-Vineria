module.exports = (sequelize, DataTypes) => {

    const ProductCart = sequelize.define("ProductCart", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idUser: {
            type: DataTypes.INTEGER,
            
        },
        idProduct: {
            type: DataTypes.STRING,
            
        },
        cant: {
            type: DataTypes.INTEGER,
        },

    }, {
        tableName: "productCart",
        timestamps: false
    });

    ProductCart.associate = function(models){
       /* ProductCart.hasMany(models.User, {
            as: "users", 
            foreignKey: "idUser"
        });
        ProductCart.hasMany(models.Product, {
            as: "products", 
            foreignKey: "idProduct"
        });*/
        ProductCart.belongsTo(models.User, {
            as: "users", 
            foreignKey: "idUser"
        });

        ProductCart.belongsTo(models.Product, {
            as: "products", 
            foreignKey: "idProduct"
        });
    }

    return ProductCart;
}
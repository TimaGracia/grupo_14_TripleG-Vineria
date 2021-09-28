module.exports = (sequelize, DataTypes) => {

    const Category = sequelize.define("Category", {
        idCategory: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        type: {
            type: DataTypes.STRING,
            
        },
        description: {
            type: DataTypes.STRING,
            
        }

    }, {
        tableName: "categories",
        timestamps: false
    });

    Category.associate = function(models){
        Category.hasMany(models.Product, {
            as: "products", 
            foreignKey: "idCategory"
        })
    }

    return Category;
}
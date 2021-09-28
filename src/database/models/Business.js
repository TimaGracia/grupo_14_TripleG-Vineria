module.exports = (sequelize, DataTypes) => {

    const Business = sequelize.define("Business", {
        idBusiness: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            
        },
        description: {
            type: DataTypes.STRING,
            
        }

    }, {
        tableName: "business",
        timestamps: false
    });

    Business.associate = function(models){
        Business.hasMany(models.Product, {
            as: "products", 
            foreignKey: "idBusiness"
        })
    }

    return Business;
}
module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("User", {
        idUser: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            
        },
        email: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
        admin: {
            type: DataTypes.BOOLEAN,
        },
        avatar: {
            type: DataTypes.STRING,
        }

    }, {
        tableName: "users",
        timestamps: false
    });

    return User;
}
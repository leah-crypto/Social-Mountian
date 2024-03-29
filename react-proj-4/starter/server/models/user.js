const { DataTypes } = require("sequelize");

const { sequelize } = require("../utli/database");



module.exports = {
    user: sequelize.define("user", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        } ,
        username: DataTypes.STRING,
        hashedPass: DataTypes.STRING
    })
}
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class User extends Model { }
User.init({
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull:false,
        validate: {
            isEmail:true,
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    userName: {
        type: DataTypes.STRING,
        unique: true,
    }
}, {
    sequelize,
    modelName: "users"
});

module.exports = User;
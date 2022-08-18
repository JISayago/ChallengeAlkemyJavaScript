const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Category extends Model { }
Category.init({
    categoryName: {
        type: DataTypes.STRING,        
        unique: true,
        allowNull: false,
        notEmpty:true,
        isLowerCase:true,
    }
}, {
    sequelize,
    modelName: "categories",
});

module.exports = Category;
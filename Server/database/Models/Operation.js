const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Operation extends Model { }
Operation.init({
    amount: {
        type: DataTypes.DOUBLE,
        allowNull:false,
        notEmpty: true,
        isDecimal: true,
    },
    concept: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull:false,
        isDate: true,
        notEmpty:true,
    },
    typeOf: {//tipeof hanlde with tinyint 0,1,etc  (extraction, insertion, and the posibility to add other type whith number)
        type: DataTypes.TINYINT,
        allowNull: false,
        isInt: true,
        notEmpty: true,
    }
}, {
    sequelize,
    modelName: "operations"
});


 

module.exports = Operation;
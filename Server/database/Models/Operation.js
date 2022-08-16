const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Operation extends Model { }
Operation.init({
    amount: {
        type: DataTypes.DOUBLE,
        validate: {
            isDecimal: true,
            notEmpty:true,
        }
    },
    concept: {
        type: DataTypes.STRING,
    },
    date: {
        type: DataTypes.DATE,
        validate: {
            isDate: true,
            notEmpty:true,
        }
    },
    tipeOf: {
        type: DataTypes.STRING,
        validate: {
            isAlpha: true,
            notEmpty:true,
        }//tipeof hanlde with tinyint 0 or 1 (extraction, insertion)
    }
}, {
    sequelize,
    modelName: "Operation"
});

module.exports = Operation;
/* RELATIONSHIPS
User (ONE TO MANY) Operation
Category (ONE TO MANY) Operation
 */
const { post } = require('../../routes/operations');
const Category = require('./Category');
const Operation = require('./Operation');
const User = require('./User');

User.hasMany(Operation);
Operation.belongsTo(User);


Operation.hasOne(Category);
Category.belongsToMany(Operation,  {through: 'operation_category'});

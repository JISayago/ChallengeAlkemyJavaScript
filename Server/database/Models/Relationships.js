/* RELATIONSHIPS
User (ONE TO MANY) Operation
Category (ONE TO MANY) Operation
 */
const Category = require('./Category');
const Operation = require('./Operation');
const User = require('./User');

User.hasMany(Operation);
Operation.belongsTo(User);


Operation.belongsTo(Category);
Category.hasMany(Operation);

// const Sequelize = require('sequelize');

// const Sequelize = require('../utils/database.js');

// const User = Sequelize.define('users', {
//    id: {
//       type: Sequelize.INTEGER,
//       autoIncrement: true,
//       allowNull: false,
//       primaryKey: true,
//    },
//    email: {
//       type: Sequelize.STRING,
//       allowNull: false,
//    },
//    name: {
//       type: Sequelize.STRING,
//    },
//    password: {
//       type: Sequelize.STRING,
//       allowNull: false,
//    },
// });

// // export default User;
// module.exports = User;
const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    permissionLevel: Number
 });
 
 const user = mysql.model('Users', UserSchema)

const mysql2 = require('mysql2');
const Schema = mysql.Schema;

var UserSchema = new Schema({
    fullName: String,
    emailAddress: String,
    contactNumber: String,
    password: String,
    confirmPassword: String
});

const User = mysql.model('User', UserSchema);

module.exports = User;

// const Sequelize = require('sequelize');
// // const Sequelize = new sequelize('sqlite::memory:');
// // const Sequelize = require('../utils/database.js');

// var Users = Sequelize.define('Users', {
//    // User.init()
//    id: {
//       type: Sequelize.INTEGER,
//       autoIncrement: true,
//       allowNull: false,
//       primaryKey: true,
//    },
//    email: {
//       type: Sequelize.STRING,
//       allowNull: false,
//    },
//    name: {
//       type: Sequelize.STRING,
//    },
//    password: {
//       type: Sequelize.STRING,
//       allowNull: false,
//    },
// });

// console.log(User === sequelize.models.User);
// // module.exports = {User};
// // export default User;
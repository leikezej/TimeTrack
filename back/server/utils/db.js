
// import { Sequelize } from 'sequelize';

const Sequelize = require('sequelize');

const sequelize = new Sequelize('time-tracker', 'jim-user', 'Password@420230', {
    dialect: 'mysql',
    host: 'solidbbm.online', 
});

// export default sequelize;
module.exports = sequelize;

// const db = mysql({
//     config: {
//       host: process.env.MYSQL_HOST,
//       port: process.env.MYSQL_PORT,
//       database: process.env.MYSQL_DATABASE,
//       user: process.env.MYSQL_USER,
//       password: process.env.MYSQL_PASSWORD
//     }
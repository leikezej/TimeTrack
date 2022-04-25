const Sequelize = require ('sequelize');

const sequelize = new Sequelize('time-tracker-db', 'root', '', {
    dialect: 'mysql',
    host: 'localhost', 
});

exports.module=sequelize;
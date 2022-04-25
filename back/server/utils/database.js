
// // import { Sequelize } from 'sequelize';
// const Sequelize = require('sequelize');
// const mysql = require('mysql');

// const connection = mysql.createConnection({
//     database: "time-tracker",
//     host: "solidbbm.online",
//     user: "jim-user",
//     password: "Password@420230",
// });

// connection.connect((err) => {
//     if (err) {
//         console.error("Error Meroi: " + err);
//         return;
//     }
    
//     console.log("MySQL Database Activated")
// })

// module.exports = {connection};
const Sequelize = require('sequelize');

const sequelize = new Sequelize('time-tracker-db', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
    
    pool: {//pool configuration
        max: 5,//maximum number of connection in pool
        min: 0,//minimum number of connection in pool
        acquire: 30000,//maximum time in ms that pool will try to get connection before throwing error
        idle: 10000//maximum time in ms, that a connection can be idle before being released
        }
});
    
    console.log("MySQL Database Activated")

module.exports = {sequelize};

// export default sequelize;



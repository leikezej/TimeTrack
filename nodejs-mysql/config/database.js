const mysql = require("mysql");
var db;


connectDatabase = () => {
    if(!db) {
        db = new mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "time-tracker-db"
        });
        
        db.connect(err => {
            if (!err) {
                console.log('database connected');
            } else {
                console.log('error connection');
            }
        });
    }
    return db;
};
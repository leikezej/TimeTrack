const mysql = require('mysql');

const connection = mysql.createConnection({
    database: "time-tracker-db",
    host: "localhost",
    user: "root",
    password: "",
});


connection.connect((err) => {
    if (err) {
        console.error("Error Meroi: " + err);
        return;
    }
    
    console.log("Successfully Connected To MySQL Database")
})

module.exports = {connection};
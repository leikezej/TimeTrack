var mysql = require('mysql');  
const express = require("express");
const port = 5000;

const app = express();
app.use(express.urlencoded({ extended: true }));

var con = mysql.createConnection({  
host: "localhost",  
user: "root",  
password: "",  
database: "time-tracker-db"  
});  

app.listen((err) => {
    if(err) {
        console.log('error connecting to db = ', err);
        return;
    }
    // app.listen(5000, () => console.log('SERVER IS NOW LIVE AND RUNNING'));
    console.log(`Server is running at http://localhost:${port}`);
})





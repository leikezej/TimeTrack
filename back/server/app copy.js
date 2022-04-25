const express = require("express");
// const mysql2 = require('mysql2');
const bcrypt = require('bcryptjs')
const sequelize = require('./utils/database.js');
const router = require('./routes/routes.js');

const port = 5000;

const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use((_, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

//cors 
const cors = require("cors");
app.use(cors());

//para pag karawat ht POST data tikang form
const bodyParser = require("express").json;
app.use(bodyParser());

// database connection
mysqldb = require('./utils/database').connection;


app.get("/", (req, res) => {
res.send("Connected to React-Native");
});

app.listen((err) => {
    if(err) {
        console.log('error connecting to db = ', err);
        return;
    }
    app.listen(5000, () => console.log('SERVER IS NOW LIVE AND RUNNING'));
    console.log(`Server is running at http://localhost:${port}`);
})


// // form data parsing

// app.post("/add", (req, res) => {
//     const details = req.body;
    
//     mysqldb.query("INSERT INTO teams SET?", details, (error, results) => {
//         if (error) throw error;
//             http://localhost:3000/data
//         res.json(results);
//     });
// });

// app.get("/data/:searchid", (req, res) => {
//     const {searchid} = req.params ;
//     mysqldb.query("SELECT * FROM team WHERE id = ?", [searchid], (error, results) => {
//         if (error) throw error;
//         res.json(results); 
//     })
// })

// // get data from table users in db
// app.get("/data", (req, res) => {
//     mysqldb.query("SELECT * FROM users", (error, results) => {
//         if (error) throw error;
//             // http://localhost:3000/data
//         res.json(results);
//     })
// })

// const UserRouter = require("./api/User");

// app.post("/create", async (req, res) => {
//     const [ name, contact, email, password ] = req.body;
    
//     try {
//         connection.query(
//             "INSERT INTO user (name, contact, email, pasword) VALUES (?, ?, ?)",
//             [name, contact, email, password],
//             (err, results, fields) => {
//                 if (err) {
//                     console.log("Error while inserting a user into database", err);
//                     return res.status(400).send();
//                 }
                
//                 return res
//                     .status(201)
//                     .json({ message: " new user successfully created "});
//             }
//         );
//     } catch (err) {
//         console.log(err);
//         return res.status(500).send();
//     }
// });

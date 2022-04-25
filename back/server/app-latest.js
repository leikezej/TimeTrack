const express = require('express');
const cors = require("cors");
const mysql = require('mysql');
const bodyParser = require('body-parser');
const logger = require('morgan');

// const bcrypt = require('bcryptjs')
// const bcrypt = require('bcrypt')
// const router = require('./routes/routes');
// app.use(router);

const router = require('./routes/routes.js');
require("./routes/student.routes.js");
//
const app = express();
app.use(express.json());

// const hostname = '192.168.1.100';
const port = 5000;

app.use((_, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(logger('dev'));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  express.urlencoded({
    extended: true,
  })
);

// simple route
app.get("/api/users", (req, res) => {
    res.json({ message: "Welcome to esparkinfo application." });
  });
  
// simple route
app.get("/connection", (req, res) => {
    res.send("Connected to React-Native");
});

// sync database
// models.sequilize.sync().then()

const corsOptions = {
    origin: "http://localhost:5001"
  };
app.use(cors(corsOptions));


const database = require('./utils/database.js');
// const connection = mysql.createConnection({
//     database: "time-tracker-db",
//     host: "localhost",
//     user: "root",
//     password: "",
// });


    
// dat.connect((err) => {
//     if(err) {
//         console.log('error connecting to db = ', err);
//         return;
//     }
//     console.log('connected to online mysql in localhost');
// })
console.log(`Connected to MySQL http://localhost:${port}`);

app.listen(5000, () => console.log('server running on port 5000'));

{
// const express = require("express");
// // const mysql2 = require('mysql2');
// const bcrypt = require('bcryptjs')
// const sequelize = require('./utils/database.js');
// const router = require('./routes/routes.js');

// const port = 5000;

// const app = express();
// app.use(express.urlencoded({ extended: true }));

// app.use(express.json());

// app.use((_, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
// });

// //cors 
// const cors = require("cors");
// app.use(cors());

// //para pag karawat ht POST data tikang form
// const bodyParser = require("express").json;
// app.use(bodyParser());

// // database connection
// mysqldb = require('./utils/database').connection;


// app.get("/", (req, res) => {
// res.send("Connected to React-Native");
// });

// app.listen((err) => {
//     if(err) {
//         console.log('error connecting to db = ', err);
//         return;
//     }
//     app.listen(5000, () => console.log('SERVER IS NOW LIVE AND RUNNING'));
//     console.log(`Server is running at http://localhost:${port}`);
// })

}
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
//             (err, results, fields) => {r
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






// const port = process.env.PORT || 5000;

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

// get data from table users in db
// app.get("/data", (req, res) => {
//     mysqldb.query("SELECT * FROM users", (error, results) => {
//         if (error) throw error;
//             // http://localhost:3000/data
//         res.json(results);
//     })
// })

// Creating a GET route that returns data from the 'users' table.
// app.get('/users', function (req, res) {
//     // Connecting to the database.
//     connection.getConnection(function (err, connection) {

//     // Executing the MySQL query (select all data from the 'users' table).
//     connection.query('SELECT * FROM users', function (error, results, fields) {
//       // If some error occurs, we throw an error.
//       if (error) throw error;

//       // Getting the 'response' from the database and sending it to our route. This is were the data is.
//       res.send(results)
//     });
//   });
// });

//add new user
// app.post('/store',(req, res) => {
//     let data = {name: req.body.name};
//     let sql = "INSERT INTO users SET ?";
//     let query = conn.query(sql, data,(err, results) => {
//       if(err) throw err;
//       res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
//     });
//   });


// app.post("/add", (req, res) => {
//     const details = req.body;
    
//     mysqldb.query("INSERT INTO teams SET?", details, (error, results) => {
//         if (error) throw error;
//             http://localhost:5000/data
//         res.json(results);
//     });
// });

// Creating a GET route that returns data from the 'users' table.
// app.get('/users', function (req, res) {
//     // Connecting to the database.
//     connection.getConnection(function (err, connection) {

// app.get('/posts', function (req, res) {
//     connection.connect();

//     connection.query('SELECT * FROM posts LIMIT 0, 10', function (error, results, fields) {
//       if (error) throw error;
//       res.send(results)
//     });

//     connection.end();
// });

// const connection = require('../utils/database.js');

// async function getAll() {
//     const sql = "SELECT * FROM tableName";
//     const [rows] = await connection.promise().query(sql);
//     return rows;
// } 
// exports.getAll = getAll;

// const connection = mysql.createConnection({
//     database: "time-tracker",
//     host: "solidbbm.online",
//     user: "jim-user",
//     password: "Password@420230",
// });

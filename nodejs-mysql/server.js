const express = require("express");
const app = express();
const port = 3000;
// const port = process.env.PORT || 3000;


// Starting our app.
// const app = express();

// cors
// const cors = require("cors");
//     app.use(cors());
    
// const UserRouter = require("./api/User");

// //para pag karawat ht POST data tikang form
// const bodyParser = require("express").json;
// app.use(bodyParser());

// app.use("/user", UserRouter);

// // database
// mysqldb = require('./database').connection;

// // form data parsing
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));

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
//     mysqldb.query("SELECT * FROM user", (error, results) => {
//         if (error) throw error;
//             http://localhost:3000/data
//         res.json(results);
//     })
// })


// app.get("/", (req, res) => {
//     res.send("Connected to React-Native");
//   });
    
        // <form action="../../post" method="post" 
        // className="form">
        // <button type="submit">Connected?</button>
        // </form>
        
// app.get("/", (req, res) => {
//     res.send("I Am The NodeJS Server Inside React-Native");
// });

// app.listen(port, () => {
//     console.log(`Server is running at http://localhost:${port}`);
// }); 

app.listen((err, port) => {
    if (err) {
      console.log("Error occurred", err);
    } else {
      console.log("Connected to MySQL Server in port:${port}");
    }
});
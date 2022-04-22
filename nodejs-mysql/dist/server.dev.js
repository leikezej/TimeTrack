"use strict";

var express = require("express");

var app = express();
var port = 3000; // const port = process.env.PORT || 3000;
//cors

var cors = require("cors");

app.use(cors());

var UserRouter = require("./api/User"); //para pag karawat ht POST data tikang form


var bodyParser = require("express").json;

app.use(bodyParser());
app.use("/user", UserRouter); // database

mysqldb = require('./database').connection; // form data parsing

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.post("/add", function (req, res) {
  var details = req.body;
  mysqldb.query("INSERT INTO teams SET?", details, function (error, results) {
    if (error) throw error;

    http: //localhost:3000/data
    res.json(results);
  });
});
app.get("/data/:searchid", function (req, res) {
  var searchid = req.params.searchid;
  mysqldb.query("SELECT * FROM team WHERE id = ?", [searchid], function (error, results) {
    if (error) throw error;
    res.json(results);
  });
}); // get data from table users in db

app.get("/data", function (req, res) {
  mysqldb.query("SELECT * FROM user", function (error, results) {
    if (error) throw error;

    http: //localhost:3000/data
    res.json(results);
  });
});
app.get("/", function (req, res) {
  res.send("I Am The NodeJS Server Inside React-Native");
});
app.listen(port, function () {
  console.log("Server is running at http://localhost:".concat(port));
});
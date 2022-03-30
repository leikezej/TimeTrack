"use strict";

var mysql = require('mysql');

var connection = mysql.createConnection({
  database: "time-tracker-db",
  host: "localhost",
  user: "root",
  password: ""
});
connection.connect(function (err) {
  if (err) {
    console.error("Error Meroi: " + err);
    return;
  }

  console.log("Successfully Connected To MySQL Database");
});
module.exports = {
  connection: connection
};
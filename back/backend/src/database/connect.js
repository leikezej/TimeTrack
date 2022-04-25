
const mysql = require('mysql');
const env = require('../../config');

const db = mysql.createConnection({
	host: env.HOST,
	user: env.USER,
	password: env.PASS,
	database: env.DB,
});

db.connect(function(err){
	if(err) throw err;
});

module.exports = db;
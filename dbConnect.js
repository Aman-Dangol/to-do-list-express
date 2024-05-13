const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "aman",
  password: "root",
  database: "to-do-list",
});

module.exports.conn = conn;

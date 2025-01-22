const mysql = require("mysql2");

const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "real_admin",
  password: process.env.DB_PASSWORD || "12345678",
  database: process.env.DB_NAME || "realstate",
});

module.exports = db;

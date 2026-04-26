const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'vueappdb'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL Connected');
});

module.exports = db;


// CREATE DATABASE vueappdb;
// USE vueappdb;

// CREATE TABLE users (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   name VARCHAR(100),
//   email VARCHAR(100)
// );


const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',         // Replace with your MySQL username
  password: '',         // Replace with your MySQL password
  database: 'car_sales' // Replace with your database name
});

db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err.stack);
    return;
  }
  console.log('Connected to database');
});

module.exports = db;

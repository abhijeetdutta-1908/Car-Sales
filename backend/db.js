const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',         
  password: '',         
  database: 'car_sales' 
});

db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err.stack);
    return;
  }
  console.log('Connected to database');
});

module.exports = db;

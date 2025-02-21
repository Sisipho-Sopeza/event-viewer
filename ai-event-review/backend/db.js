const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost', // Change this if your DB is hosted elsewhere
  user: 'root', // Your MySQL username
  password: 'Iphemnaimolathile@3', // Your MySQL password
  database: 'event_review_platform' // Your database name
});

// Check connection
connection.connect((err) => {
  if (err) {
    console.error('❌ MySQL Connection Failed:', err);
    return;
  }
  console.log('✅ MySQL Connected Successfully!');
});

module.exports = connection;


const express = require('express');
const cors = require('cors');
const connection = require('./db'); // Import MySQL connection

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test Route to Check Database Connection
app.get('/test-db', (req, res) => {
  connection.query('SELECT 1 + 1 AS result', (err, results) => {
    if (err) {
      res.status(500).json({ success: false, message: 'Database connection failed', error: err });
    } else {
      res.json({ success: true, message: 'Database is connected!', data: results });
    }
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});


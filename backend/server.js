const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors'); // Add CORS module
const app = express();

// Enable CORS for requests from http://localhost:3000
app.use(cors({
  origin: 'http://localhost:3000'
}));

const dbConfig = {
  host: 'db',
  user: 'testuser',
  password: 'testpass',
  database: 'testdb'
};

app.get('/users', async (req, res) => {
  try {
    const connection = await mysql.createConnection(dbConfig);
    await connection.query('CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))');
    await connection.query('INSERT IGNORE INTO users (id, name) VALUES (1, "User1"), (2, "User2")');
    const [rows] = await connection.query('SELECT * FROM users');
    await connection.end();
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));

const express = require('express');
const { Pool } = require('pg');

const app = express();
const PORT = 3000;


// Set up PostgreSQL connection pool
const pool = new Pool({
    user: 'your_username',
    host: 'your_host',
    database: 'your_database',
    password: 'your_password',
    port: 5432, // Change the port if your PostgreSQL server is running on a different port
});

// Test the database connection
pool.query('SELECT NOW()', (err, res) => {
if (err) {
    console.error('Error connecting to the database:', err);
} else {
    console.log('Connected to PostgreSQL database:', res.rows[0].now);
}
});

// Middleware to parse JSON requests
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ info: 'Node.js, Express, and Postgres API' })
});

// Define a route that interacts with the database
app.get('/users', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM users');
      const users = result.rows;
      client.release(); // Release the client back to the pool
      res.json(users);
    } catch (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
    }
});


app.listen(
    PORT, 
    () => {console.log(`Server is running on http://localhost:${PORT}`)
});

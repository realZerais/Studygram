const express = require('express');
const { Pool } = require('pg');
const cors = require('cors'); // Import the cors middleware


const app = express();
const PORT = 3000;


// Middlewares
app.use(express.json());

app.use(cors()); // Enable CORS for all routes

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));


// Set up PostgreSQL connection pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'studygram',
  password: 'sasageyo',
  port: 5432, // Change the port if your PostgreSQL server is running on a different port
});

// Test the database connection
pool.query('SELECT * from tasks', (err, res) => {
  if (err) {
      console.error('Error connecting to the database:', err);
  } else {
      console.log(res.rows);
  }
});



app.get('/', (req, res) => {
    res.json({ info: 'Node.js, Express, and Postgres API' })
});




app.listen(
    PORT, 
    () => {console.log(`Server is running on http://localhost:${PORT}`)
});



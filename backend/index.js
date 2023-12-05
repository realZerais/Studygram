const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const cors = require('cors'); // Import the cors middleware


const app = express();
const PORT = 3000;




// Middleware to parse JSON requests
app.use(express.json());

app.use(cors()); // Enable CORS for all routes

app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(express.static('public'));


// Set up PostgreSQL connection pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'studygram',
  password: 'sasageyo',
  port: 5432, // Change the port if your PostgreSQL server is running on a different port
});



app.get('/', (req, res) => {
    res.json({ info: 'Node.js, Express, and Postgres API' })
});



//testroute
app.post('/test', (req, res) => {
  const { name, age, gender } = req.body;

  // Do something with the form data
  console.log('Received form data:', { name, age, gender });

  // Send a response (you can customize this based on your needs)
  res.send(req.body);

});

// Test the database connection
pool.query('SELECT * from tasks', (err, res) => {
  if (err) {
      console.error('Error connecting to the database:', err);
  } else {
      console.log(res.rows);
  }
});

//test add material


// Endpoint to get all tasks
app.get('/tasks', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM tasks');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



// Endpoint to add a new task
app.post('/tasks', async (req, res) => {
  const { description } = req.body;
  try {
    await pool.query('INSERT INTO tasks (description) VALUES ($1)', [description]);
    res.status(201).send('Task added successfully');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint to delete a task
app.delete('/tasks/:id', async (req, res) => {
  const taskId = req.params.id;
  try {
    await pool.query('DELETE FROM tasks WHERE id = $1', [taskId]);
    res.send('Task deleted successfully');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.listen(
    PORT, 
    () => {console.log(`Server is running on http://localhost:${PORT}`)
});



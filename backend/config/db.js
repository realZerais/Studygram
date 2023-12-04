const { Pool } = require('pg');

// Set up PostgreSQL connection pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'test',
    password: 'sasageyo',
    port: 5432, // Change the port if your PostgreSQL server is running on a different port
});

// Test the database connection
pool.query('SELECT * from users', (err, res) => {
if (err) {
    console.error('Error connecting to the database:', err);
} else {
    console.log(res.rows);
}
});

const { Pool } = require('pg');

// Set up PostgreSQL connection pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'studygram',
    password: 'sasageyo',
    port: 5432, 
});

module.exports = pool;

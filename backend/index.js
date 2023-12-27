const express = require('express');
const cors = require('cors');


const materialRoutes = require("./routes/materials");


const app = express();
const PORT = 3000;


// Middlewares
app.use(express.json());

app.use(cors()); // Enable CORS for all routes

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));


//ROUTES
app.get('/', (req, res) => {
  res.json({ info: 'Node.js, Express, and Postgres API' });
});

app.use('/materials', materialRoutes);




app.listen(
    PORT, 
    () => {console.log(`Server is running on http://localhost:${PORT}`)
});



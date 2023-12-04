const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;



// Middleware to parse JSON requests
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(express.static('public'));



app.get('/', (req, res) => {
    res.json({ info: 'Node.js, Express, and Postgres API' })
});



//testroute
app.post('/test', (req, res) => {
  const { name, age, gender } = req.body;

  // Do something with the form data
  console.log('Received form data:', { name, age, gender });

  // Send a response (you can customize this based on your needs)
  res.send(req.body.age);

});



app.listen(
    PORT, 
    () => {console.log(`Server is running on http://localhost:${PORT}`)
});

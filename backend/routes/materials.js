const express = require("express");
const router = express.Router();
const {getAllMaterials, createMaterial} = require("../controllers/materialsController.js") 

const db = require('../config/db');


// Test the database connection
// db.query('SELECT * from tasks', (err, res) => {
//     if (err) {
//         console.error('Error connecting to the database:', err);
//     } else {
//         console.log(res.rows);
//     }
//   });


router.get("/", getAllMaterials);

router.post("/", createMaterial);




module.exports = router;
const express = require("express");
const router = express.Router();
const {getAllMaterials, getMaterial, createMaterial, deleteAllMaterials, deleteMaterial, editMaterial} = require("../controllers/materialsController.js") 

const db = require('../config/db');


router.get("/", getAllMaterials);

router.get("/:id", getMaterial);

router.post("/", createMaterial);

router.delete("/", deleteAllMaterials);

router.delete("/:id", deleteMaterial);

router.put("/:id", editMaterial);






module.exports = router;
const db = require('../config/db');


// const getAllMaterials = (req,res)=>{
//     console.log("testtstst")
//     res.json({test: "hellooo"});
// }

const getAllMaterials = async (req,res)=>{
   

    try {
    
        const materials = await db.query('SELECT * from materials');
        console.log(materials.rows);
        res.status(200).json(materials.rows);
    
    } catch (error) {
        res.status(400).json(error.message)
    
    }
 
} 


//await db.query('SELECT * from materials')
// const createMaterial = (req, res) =>{
    
// }

module.exports =  {getAllMaterials};
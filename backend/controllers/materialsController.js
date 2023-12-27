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


// const createMaterial = async (req, res) =>{
//     const {title, date, content} = req.body;

//     try {
//         await db.query('INSERT INTO materials (material_title, creation_date, material_content) VALUES ($1, $2, $3, $4)',
//          [title, date, content]);
//         res.status(201).send('Material added successfully');
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// }


const createMaterial = async (req, res) => {
    try {
        const materials = req.body;

        // Assuming materials is an array of objects
        for (const material of materials) {
            const { title, date, content } = material;

            await db.query(
                'INSERT INTO materials (material_title, creation_date, material_content) VALUES ($1, $2, $3)',
                [title, date, content]
            );
        }

        res.status(201).send('Materials added successfully');
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};




module.exports =  {getAllMaterials, createMaterial};
const db = require('../config/db');

const getAllMaterials = async (req,res)=>{
    try {
    
        const materials = await db.query('SELECT * from materials');
        console.log(materials.rows);
        res.status(200).json(materials.rows);
    
    } catch (error) {
        res.status(400).json(error.message)
    
    }
} 

const getMaterial = async (req, res) =>{
    const {id} = req.params;

    try {
    
        const material = await db.query(`SELECT * from materials WHERE material_id = ${id}`);
        console.log("TITLE: " + material.rows[0].material_title);
        res.status(200).json(material.rows);
    
    } catch (error) {
        res.status(400).json(error.message)
    
    }
}

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

//WARNING!!!!!!!! DONT USE THIS ROUTE PLSSS
const deleteAllMaterials = async (req, res) =>{
    try {
        await db.query('DELETE FROM materials');
        console.log('All materials are deleted');
        res.status(200).send('All materials are deleted');
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const deleteMaterial = async (req, res) =>{
    const {id} = req.params;
    try {
    
        const material = await db.query(`DELETE FROM materials WHERE material_id = ${id}`); // this returns a promise with empty row so i cant log the title
        // console.log(material);
        console.log(`Material ${id} was deleted!`);
        res.status(200).send(`Material ${id} was deleted!`);

    } catch (error) {
        res.status(400).json(error.message)
    }
}

const editMaterial = async (req, res) => {
    const {id} = req.params;
    const materials = req.body;


    
  


    try {
        for(const material  of materials){
            const content = material.material_content;

            const query = {
                text: 'UPDATE materials SET material_content = $1 WHERE material_id = $2',
                values: [content, id],
            };
            
            console.log(query);
            await db.query(query); 
        }

        res.status(200).json(`Material ${id} was edited!`);

    } catch (error) {
        res.status(400).json(error.message)
    }

}







module.exports =  {
    getAllMaterials, 
    getMaterial, 
    createMaterial, 
    deleteAllMaterials, 
    deleteMaterial, 
    editMaterial
};
const materialsAPI = 'http://localhost:3000/materials';

export const getAllMaterial = async () => {
    try {
        const response = await fetch(materialsAPI);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
};

export const deleteMaterial = async (materialID) => {
    try {
        const response = await fetch(`${materialsAPI}/${materialID}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        // Handle the response from the server
        console.log('Server Response:', data);
    } catch (error) {
        console.error('Error:', error);
    }
};

export const editMaterial = () => {
    console.log('HELLO');
};
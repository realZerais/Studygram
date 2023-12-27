<script>
    // Material Upload: Students can upload study materials, including notes, slides, and practice exams.
    // Categorization and Tagging: Categorize study materials by subject, course, and topic for easy navigation.
    // Comments and Ratings: Allow users to leave comments and rate the usefulness of study materials.

    import {onMount} from 'svelte';

    const materialsAPI = 'http://localhost:3000/materials';

    let materials = [];

    const nowDate = () =>{
        const currentDate = new Date();

        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const day = String(currentDate.getDate()).padStart(2, '0')
        return `${year}-${month}-${day}`;
    }
        
    let title = '';
    let content = '';    
    let date = nowDate();

    // console.log(nowDate)


    onMount(async () => {
        try {
            const response = await fetch(materialsAPI);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            materials = await response.json();
            console.log(materials);
        } catch (error) {
            console.error('Error:', error);
        }
    });



    const handleSubmit = async () =>{

        const formData = JSON.stringify([
            {
                title,
                date,
                content,
            },
        ]);

        console.log(formData);
        
        try {   
            const response = await fetch('http://localhost:3000/materials', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: formData,
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

        
       
    }

    

</script>

<main class="flex flex-col justify-center items-center mt-2 gap-10">
    
    <form on:submit|preventDefault={handleSubmit} class="h-[40vh] w-[60%] flex flex-col gap-5 justify-center items-center border-black border-2 rounded-md">
        <h1>UPLOAD MATERIAL</h1>
        <p>Material TITLE:</p>
        <!-- <p>{title}</p> -->
        <input type="text" name="title" bind:value={title} required class="h-[20%]  border-2 rounded-sm border-black ">
        <input type="text" name="content" bind:value={content} placeholder="What's on your mind?" class="h-[50%] w-[70%] border-2 rounded-sm border-black ">
        <button>UPLOAD</button>
    </form>

    <h1>FEED</h1>

    <div class="w-[60%] flex flex-col gap-20 justify-center items-center border-black border-2 rounded-md p-6 m-6">
       
        
            {#each materials as material}
            <div class="w-[100%] flex justify-around items-center gap-2" >
                    <h1>MATERIAL TITLE: {material.material_title}</h1>
                    <h1>DATE POSTED: {material.creation_date}</h1>
            </div>
            <div>
                <p>{material.material_content}</p>
            </div>
                    
                
           
            {/each}

            
        

    </div>


       

    
</main>
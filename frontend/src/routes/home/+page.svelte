<script>
    // Material Upload: Students can upload study materials, including notes, slides, and practice exams.
    // Categorization and Tagging: Categorize study materials by subject, course, and topic for easy navigation.
    // Comments and Ratings: Allow users to leave comments and rate the usefulness of study materials.

    import {onMount} from 'svelte';

    const materialsAPI = 'http://localhost:3000/materials';

    let materials = [];

    onMount(async () => {
        const response = await fetch(materialsAPI);
        materials = await response.json();
        console.log(materials);
    });
    
   

</script>

<main class="flex flex-col justify-center items-center mt-2 gap-10">
    
    <div class="h-[40vh] w-[60%] flex flex-col gap-5 justify-center items-center border-2 rounded-md">
        <h1>UPLOAD MATERIAL</h1>
        <h2>Material Caption:</h2>
        <input type="text">

        <form action="/action_page.php">
            <input type="file" id="myFile" name="filename">
            <input type="submit">
        </form>
    </div>

    <h1>FEED</h1>

    <div class="w-[60%] flex flex-col gap-20 justify-center items-center border-2 rounded-md p-6">
       
        
            {#each materials as material}
            <div class="w-[100%] flex justify-around items-center gap-2" >
                    <h1>MATERIAL TITLE: {material.material_title}</h1>
                    <h1>DATE POSTED: {material.creation_date}</h1>
            </div>
            
                    <p>{material.material_content}</p>
                
           
            {/each}

            
        

    </div>


       

    
</main>
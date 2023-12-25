<script>
    // Material Upload: Students can upload study materials, including notes, slides, and practice exams.
    // Categorization and Tagging: Categorize study materials by subject, course, and topic for easy navigation.
    // Comments and Ratings: Allow users to leave comments and rate the usefulness of study materials.
</script>

<main class="flex flex-col justify-center items-center mt-2 gap-10">
    
    <div class="h-[40vh] w-[40%] flex flex-col gap-5 justify-center items-center border-2 rounded-md">
        <h1>UPLOAD MATERIAL</h1>
        <h2>Material Caption:</h2>
        <input type="text">

        <form action="/action_page.php">
            <input type="file" id="myFile" name="filename">
            <input type="submit">
        </form>
    </div>
    <hr>
    <div>
       
        <h1>FEED</h1>
    </div>
    
</main>
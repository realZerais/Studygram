<script>
	// Material Upload: Students can upload study materials, including notes, slides, and practice exams.
	// Categorization and Tagging: Categorize study materials by subject, course, and topic for easy navigation.
	// Comments and Ratings: Allow users to leave comments and rate the usefulness of study materials.

	import UploadMaterial from '../../components/UploadMaterial.svelte';
	import Materials from '../../components/Materials.svelte';
</script>

<main class="flex flex-col justify-center items-center mt-2 gap-10">
	<UploadMaterial />
	<h1>FEED</h1>
	<Materials />
</main>

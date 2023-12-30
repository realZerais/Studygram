<script>
	// Material Upload: Students can upload study materials, including notes, slides, and practice exams.
	// Categorization and Tagging: Categorize study materials by subject, course, and topic for easy navigation.
	// Comments and Ratings: Allow users to leave comments and rate the usefulness of study materials.

	import { onMount } from 'svelte';
	import UploadMaterial from '../../components/uploadMaterial.svelte';

	const materialsAPI = 'http://localhost:3000/materials';

	let materials = [];

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
</script>

<main class="flex flex-col justify-center items-center mt-2 gap-10">
	<UploadMaterial />
	<h1>FEED</h1>

	<div
		class="w-[60%] flex flex-col gap-20 justify-center items-center border-black border-2 rounded-md p-6 m-6">
		{#each materials as material}
			<div class="w-[100%] flex justify-around items-center gap-2">
				<h1>MATERIAL TITLE: {material.material_title}</h1>
				<h1>DATE POSTED: {material.creation_date}</h1>
			</div>
			<div>
				<p>{material.material_content}</p>
			</div>
		{/each}
	</div>
</main>

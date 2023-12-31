<script>
	// let materials = [];

	import { getAllMaterial, deleteMaterial } from '../utils/materialUtil.js';

	const editMaterial = () => {
		console.log('HELLO');
	};
</script>

{#await getAllMaterial()}
	<p>loading materials...</p>
{:then data}
	{#each data as material}
		<div
			class="w-[60%] flex flex-col gap-20 justify-center items-center border-black border-2 rounded-md p-6 m-6"
		>
			<div class="w-[100%] flex justify-between items-center gap-2">
				<h1>MATERIAL TITLE: {material.material_title}</h1>
				<h1>DATE POSTED: {material.creation_date}</h1>
			</div>
			<div>
				<p>{material.material_content}</p>
			</div>
			<div class="w-[100%] flex items-center justify-between">
				<button on:click={() => editMaterial(material.material_id)}
					>edit material</button
				>
				<button on:click={() => deleteMaterial(material.material_id)}
					>delete material</button
				>
			</div>
		</div>
	{/each}
	<!-- {JSON.stringify(data)} -->
{:catch error}
	<p>Failed to load Materials</p>
	<p class="text-red-600">{error.message}</p>
{/await}

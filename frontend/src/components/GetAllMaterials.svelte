<script>
	const materialsAPI = 'http://localhost:3000/materials';

	let materials = [];

	const getAllMaterial = async () => {
		try {
			const response = await fetch(materialsAPI);
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			const data = await response.json();
			return data;
			console.log(data);
		} catch (error) {
			console.error('Error:', error);
		}
	};

	const deleteMaterial = async (materialID) => {
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
				<button>edit material</button>
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

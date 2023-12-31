<script>
	import { nowDate } from '../utils/dateUtil.js';

	// console.log(nowDate)
	let title = '';
	let content = '';
	let date = nowDate();

	const handleSubmit = async () => {
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
	};
</script>

<form
	on:submit|preventDefault={handleSubmit}
	class="h-[40vh] w-[60%] flex flex-col gap-5 justify-center items-center border-black border-2 rounded-md"
>
	<h1>UPLOAD MATERIAL</h1>
	<p>Material TITLE:</p>
	<!-- <p>{title}</p> -->
	<input
		type="text"
		name="title"
		bind:value={title}
		required
		class="h-[20%] border-2 rounded-sm border-black"
	/>
	<input
		type="text"
		name="content"
		bind:value={content}
		placeholder="What's on your mind?"
		class="h-[50%] w-[70%] border-2 rounded-sm border-black"
	/>
	<button>UPLOAD</button>
</form>

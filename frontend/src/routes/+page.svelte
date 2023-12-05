<script>
    import { onMount } from 'svelte';
    import axios from 'axios';
  
    let tasks = [];
  
    onMount(async () => {
      // Fetch tasks from the backend on component mount
      const response = await axios.get('http://localhost:3000/tasks');
      tasks = response.data;
    });
  
    // Function to add a new task
    async function addTask() {
      const description = prompt('Enter task description:');
      if (description) {
        await axios.post('http://localhost:3000/tasks', { description });
        // Refresh tasks after adding
        const response = await axios.get('http://localhost:3000/tasks');
        tasks = response.data;
      }
    }
  
    // Function to delete a task
    async function deleteTask(id) {
      if (confirm('Are you sure you want to delete this task?')) {
        await axios.delete(`http://localhost:3000/tasks/${id}`);
        // Refresh tasks after deletion
        const response = await axios.get('http://localhost:3000/tasks');
        tasks = response.data;
      }
    }
  </script>
  
  <main>
    <h1>Task Management</h1>
  
    <ul>
      {#each tasks as task (task.id)}
        <li on:click={() => deleteTask(task.id)}>
          {task.description}
        </li>
      {/each}
    </ul>
  
    <button on:click={addTask}>Add Task</button>
  </main>
  
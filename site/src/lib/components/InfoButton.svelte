<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function openInfoModal() {
		dispatch('message');
	}
</script>

<button on:click={openInfoModal}> i </button>

<style>
	button {
		background-color: #954c98;
		color: whitesmoke;
		font-size: 16px;
		font-family: 'Fredoka Variable', sans-serif;
		font-weight: 600;
		width: 25px;
		height: 25px;
		border: none;
		border-radius: 50%;
		cursor: pointer;
		text-align: center;
		line-height: 16px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0;
	}

	button:hover {
		background-color: #b169b4;
	}
</style>

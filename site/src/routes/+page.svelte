<script lang="ts">
	import Clicker from '$lib/components/Clicker.svelte';
	import {
		getGlobalCount,
		globalCount,
		sendBatchedCounts,
		setGlobalCount
	} from '$lib/utils/counts';
	import { onInterval } from '$lib/utils/utils';
	import { onMount } from 'svelte';

	async function initializeGlobalCount() {
		const val = await getGlobalCount();
		await setGlobalCount(globalCount.set, val);
	}

	onMount(async () => {
		await sendBatchedCounts();
		await initializeGlobalCount();
	});

	onInterval(sendBatchedCounts, 10 * 1000);
</script>

<div id="main">
	<Clicker />
</div>

<style lang="scss">
	:global(body) {
		--accent-light: #ee62b8;
		--accent-mid: #8e4597;
		--accent-mid-darker: #944a97;
		--accent-dark: #743b87;
		--background-pink: #f45e9e;
		--background-white: #fde5f1;
		--accent-white: #fec3e0;

		background: linear-gradient(to right, var(--background-white) 0%, var(--accent-mid) 100%);
		margin: 0;
	}

	#main {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		overflow: auto;
	}
</style>

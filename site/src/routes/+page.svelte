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

	onInterval(sendBatchedCounts, 5 * 1000);
</script>

<div id="main">
	<Clicker />
</div>

<style lang="scss">
	:global(body) {
		background: #fde5f1;
		background-image: url(/images/svgs/bg_pattern.svg);
		background-position: center;
		background-size: 90%;

		margin: 0;
	}

	@media only screen and (min-width: 600px) {
		:global(body) {
			background-size: 85%;
		}
	}

	@media only screen and (min-width: 768px) {
		:global(body) {
			background-size: 80%;
		}
	}

	@media only screen and (min-width: 1216px) {
		:global(body) {
			background-size: 50%;
		}
	}

	@media only screen and (min-width: 1408px) {
		:global(body) {
			background-size: 40%;
		}
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

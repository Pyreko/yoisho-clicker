<script lang="ts">
	import { getAndPlaySound, getNumAudioTracks } from '$lib/utils/audio';
	import { localCount, globalCount, updateCounts } from '$lib/utils/store';
	import Chat from './Chat.svelte';

	let numAudioTracks: undefined | number = undefined;
	let audioContext: AudioContext | undefined = undefined;

	async function onClick() {
		updateCounts(1);

		if (numAudioTracks === undefined) {
			numAudioTracks = (await getNumAudioTracks()) - 1;
		}

		await getAndPlaySound(audioContext, numAudioTracks);
	}
</script>

<div id="clicker">
	<div id="globalCount">
		<p class="label">Global Yoishos</p>
		<p class="value">{$globalCount.toLocaleString()}</p>
	</div>
	<Chat />
	<div id="chatDivider" />
	<div id="bottomSection">
		<div id="localCount">
			<p>Yoishos: {$localCount.toLocaleString()}</p>
		</div>
		<button id="yoishoButton" on:click={onClick}>Yoisho!</button>
	</div>
</div>

<style lang="scss">
	#clicker {
		clip-path: polygon(
			47% 0,
			74% 5%,
			88% 20%,
			98% 41%,
			85% 82%,
			51% 100%,
			22% 86%,
			8% 67%,
			4% 45%,
			16% 15%
		);

		padding: 4rem;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		gap: 2.25rem;

		min-width: 25rem;
		width: 70%;
		max-width: 50rem;
		min-height: 25rem;
		height: 70%;
		max-height: 50rem;
		aspect-ratio: 1;

		background: linear-gradient(to bottom, #753f81 0%, #753f81 45%, #cb4092 100%);
	}

	#globalCount {
		margin-top: 15px;
		margin-bottom: 0;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.1rem;

		p {
			font-family: sans-serif;
			text-align: center;
			margin: 0;
		}

		.label {
			font-size: 2rem;
		}

		.value {
			font-size: 3rem;
		}
	}

	#chatDivider {
		height: 2px;
		width: 68%;

		background-image: radial-gradient(
			circle at center,
			rgba(255, 255, 255, 50%) 1px,
			transparent 1px
		);
		background-position: left bottom;
		background-size: 12px 2px;
		background-repeat: repeat-x;
	}

	#bottomSection {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		gap: 1.25rem;

		margin-bottom: 15px;
	}

	#localCount {
		p {
			font-family: sans-serif;
			font-size: 1.5rem;
			text-align: center;
			margin-top: 0;
			margin-bottom: 0;
		}
	}

	#yoishoButton {
		background-color: #fee9f5;
		color: #644e72;
		font-family: sans-serif;
		font-size: 1.25rem;
		padding: 10px 20px;
		text-align: center;
		text-decoration: none;
		border: none;
		border-radius: 6px;
		cursor: pointer;
	}

	#yoishoButton:hover {
		background-color: #e5d0dc;
	}
</style>

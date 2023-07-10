<script lang="ts">
	import { getAndPlaySound, getNumAudioTracks } from '$lib/utils/audio';
	import { localCount, globalCount, updateCounts } from '$lib/utils/counts';
	import ChatBox from './ChatBox.svelte';

	let numAudioTracks: undefined | number = undefined;
	let audioContext: AudioContext | undefined = undefined;

	let chatChild: ChatBox | undefined = undefined;

	async function onClick() {
		updateCounts(1);

		if (numAudioTracks === undefined) {
			numAudioTracks = (await getNumAudioTracks()) - 1;
		}

		await getAndPlaySound(audioContext, numAudioTracks);

		setTimeout(() => {
			if (chatChild !== undefined) {
				chatChild.generateMessages();
			}
		}, 200);
	}
</script>

<div id="clicker">
	<div id="global-count">
		<p class="label">GLOBAL YOISHOS</p>
		<p class="value">{$globalCount.toLocaleString()}</p>
	</div>
	<div id="chat-background">
		<div id="chat-filler" />
		<div id="chat-wrapper">
			<ChatBox bind:this={chatChild} />
		</div>
		<div id="chat-divider" />
	</div>

	<div id="bottom-section">
		<div id="local-count">
			<p>Yoishos: {$localCount.toLocaleString()}</p>
		</div>
		<button id="yoisho-button" on:click={onClick}>Yoisho!</button>
	</div>
</div>

<style lang="scss">
	#clicker {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		gap: 1rem;

		width: 100%;
		height: 100%;
	}

	@media only screen and (min-width: 600px) {
		#clicker {
			width: 80%;
			height: 80%;
		}
	}

	#chat-background {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		gap: 1rem;

		min-width: 300px;
		width: 100%;
		max-width: 50rem;

		min-height: 300px;
		height: 100%;
		max-height: 50rem;

		aspect-ratio: 1;

		background: linear-gradient(
			to bottom,
			rgb(114, 59, 138, 0.85) 60%,
			rgb(203, 64, 146, 0.85) 100%
		);

		mask-image: url(images/svgs/chat-mask.svg);
		mask-size: contain;
		mask-repeat: no-repeat;
		mask-position: center;

		backdrop-filter: blur(5px);

		overflow: hidden;
	}

	#global-count {
		margin-top: 15px;
		margin-bottom: 0;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.1rem;
		color: #dc77ab;
		font-family: sans-serif;

		p {
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

	#chat-filler {
		height: 15%;
	}

	#chat-wrapper {
		width: 60%;
		height: 45%;
	}

	#chat-divider {
		height: 2px;

		min-width: 200px;
		width: 65%;

		background-image: radial-gradient(
			circle at center,
			rgba(255, 255, 255, 50%) 1px,
			transparent 1px
		);
		background-position: left bottom;
		background-size: 12px 2px;
		background-repeat: repeat-x;
	}

	@media only screen and (min-width: 600px) {
		#chat-wrapper {
			height: 55%;
		}

		#chat-divider {
			min-width: 250px;
			width: 65%;
		}
	}

	#bottom-section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		gap: 1.25rem;

		margin-bottom: 15px;
	}

	#local-count {
		p {
			font-family: sans-serif;
			font-size: 1.5rem;
			text-align: center;
			margin-top: 0;
			margin-bottom: 0;
		}
	}

	#yoisho-button {
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

	#yoisho-button:hover {
		background-color: #e5d0dc;
	}
</style>

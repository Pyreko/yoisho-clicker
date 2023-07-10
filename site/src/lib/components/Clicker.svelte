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
		<p>{$globalCount.toLocaleString()}</p>
	</div>
	<div id="chat-background">
		<div id="chat-filler" />
		<div id="chat-wrapper">
			<ChatBox bind:this={chatChild} />
		</div>
		<div id="chat-divider" />
		<div id="under-chat">
			<p>yoishos</p>
			<p id="local-count">{$localCount.toLocaleString()}</p>
		</div>
	</div>
	<button id="yoisho-button" on:click={onClick}>Yoisho!</button>
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

	#chat-background {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;

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

		-webkit-mask-image: url(images/svgs/chat-mask.svg);
		-webkit-mask-size: contain;
		-webkit-mask-repeat: no-repeat;
		-webkit-mask-position: center;

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
		color: #954c98;
		font-family: 'Fredoka Variable', sans-serif;

		p {
			text-align: center;
			margin: 0;
			font-size: 3.25rem;
		}
	}

	#chat-filler {
		height: 15%;
	}

	#chat-wrapper {
		width: 65%;
		height: 50%;

		margin-top: 1rem;
		margin-bottom: 1rem;
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

	#under-chat {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.1rem;
		padding-bottom: 10px;

		p {
			font-family: 'Fredoka Variable', sans-serif;
			font-size: 1rem;
			font-weight: 500;

			color: whitesmoke;

			text-align: center;
			margin-top: 0;
			margin-bottom: 0;
		}

		#local-count {
			font-size: 1.5rem;
		}
	}

	@media only screen and (min-width: 600px) {
		#clicker {
			width: 80%;
			height: 80%;
		}

		#global-count {
			p {
				font-size: 4rem;
			}
		}

		#chat-filler {
			height: 12%;
		}

		#chat-wrapper {
			height: 55%;
		}

		#under-chat {
			gap: 0.2rem;

			p {
				font-size: 1rem;
			}

			#local-count {
				font-size: 1.5rem;
			}
		}
	}

	@media only screen and (min-width: 768px) {
		#global-count {
			p {
				font-size: 4.5rem;
			}
		}

		#under-chat {
			gap: 0.25rem;

			p {
				font-size: 1.5rem;
			}

			#local-count {
				font-size: 2rem;
			}
		}
	}

	#yoisho-button {
		background-color: #954c98;
		color: whitesmoke;
		font-family: 'Fredoka Variable', sans-serif;
		font-weight: 600;
		font-size: 1.25rem;

		width: 130px;
		height: 60px;

		text-align: center;
		text-decoration: none;
		border: none;
		border-radius: 6px;
		cursor: pointer;
	}

	#yoisho-button:hover {
		background-color: #b169b4;
	}
</style>

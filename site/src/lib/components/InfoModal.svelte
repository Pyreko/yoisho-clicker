<script lang="ts">
	import { fade } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	import { numAudioTracks } from '$lib/utils/audio';

	const dispatch = createEventDispatcher();
	function closeInfoModal() {
		dispatch('message');
	}

	function onKeyPress(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			closeInfoModal();
		}
	}
</script>

<svelte:window on:keydown={onKeyPress} />

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div id="modal-background" on:click={closeInfoModal} transition:fade={{ duration: 100 }}>
	<div class="modal-wrapper" on:click|stopPropagation>
		<div class="modal-header">
			<h1>About</h1>
			<button class="close" on:click={closeInfoModal}>✕</button>
		</div>
		<div class="modal-body">
			<div class="text-block">
				<h1>What is this?</h1>
				<p>
					Last year, I made <a
						href="https://howsthevolu.me/"
						target="_blank"
						rel="noopener noreferrer">howsthevolu.me</a
					> as a bit of a joke clicker website to celebrate IRyS' one year anniversary. And so, for the
					second anniversary, I decided to follow it up with another one, this time around another common
					phrase of hers, 'yoisho'.
				</p>
				<p>
					Similar to last year, the general premise is inspired by sites like
					<a href="https://impomu.com/" target="_blank" rel="noopener noreferrer">impomu</a>
					and
					<a href="https://faunaraara.com/" target="_blank" rel="noopener noreferrer">faunaraara</a
					>.
				</p>
				<p>
					For those interested in the source code for both the site and server, it can be found <a
						href="https://github.com/Pyreko/yoisho-clicker"
						target="_blank"
						rel="noopener noreferrer">over here on GitHub</a
					>.
				</p>
			</div>
			<div class="text-block">
				<h1>Where can I get the yoishos?</h1>
				<p>
					All voice clips can be found <a
						href="https://github.com/Pyreko/yoisho-clicker/tree/main/server/assets"
						target="_blank"
						rel="noopener noreferrer">here</a
					>. There are {$numAudioTracks + 1} voice clips as of writing.
				</p>
			</div>
			<div class="text-block">
				<h1>Credits</h1>
				<p>
					I couldn't have done this alone! Lots of stuff was used or referred to in order to make
					this site:
				</p>
				<ul>
					<li>
						<p>
							Jabah on the <a
								href="https://discord.gg/ZkqBG5Tx"
								target="_blank"
								rel="noopener noreferrer">IRyS' Stage Discord server</a
							> for doing all the voice clips and the inspiration in the first place.
						</p>
					</li>
					<li>
						<p>
							Favicon and chat emotes/badges are from <a
								href="https://twitter.com/chrone_co/status/1633428830311550976"
								target="_blank"
								rel="noopener noreferrer">Chroneco</a
							>.
						</p>
					</li>
					<li>
						<p>
							Theming and design are inspired by <a
								href="https://twitter.com/hanamori_design/status/1600460112874950656?cxt=HHwWgMC-kcf__LUsAAAA"
								>IRyS' stream and schedule overlay by 花杜ゆのき</a
							>.
						</p>
					</li>
					<li>
						<p>
							The fonts used throughout are <a
								id="fred"
								href="https://fonts.google.com/specimen/Fredoka"
								target="_blank"
								rel="noopener noreferrer">Fredoka</a
							>
							and
							<a
								id="mp2"
								href="https://fonts.google.com/specimen/M+PLUS+2"
								target="_blank"
								rel="noopener noreferrer">M PLUS 2</a
							>.
						</p>
					</li>
					<li>
						<p>
							The frontend is written in <a
								href="https://svelte.dev/"
								target="_blank"
								rel="noopener noreferrer">Svelte</a
							>.
						</p>
					</li>
					<li>
						<p>
							The backend is written in <a
								href="https://www.rust-lang.org/"
								target="_blank"
								rel="noopener noreferrer">Rust</a
							>, using the
							<a href="https://github.com/tokio-rs/axum" target="_blank" rel="noopener noreferrer"
								>axum framework</a
							>.
						</p>
					</li>
					<li>
						<p />
					</li>
					<li>
						<p>
							<a href="https://impomu.com/" target="_blank" rel="noopener noreferrer">impomu</a> and
							<a href="https://faunaraara.com/" target="_blank" rel="noopener noreferrer"
								>faunaraara</a
							> for the clicker website inspiration.
						</p>
					</li>
				</ul>
			</div>
			<div class="text-block">
				<h1>Something not working?</h1>
				<p>
					If you find something not working, please report it <a
						href="https://github.com/Pyreko/hows-the-volume/issues"
						target="_blank"
						rel="noopener noreferrer">here</a
					>!
				</p>
			</div>
			<div class="image-block">
				<img src="/images/emotes/heart.webp" alt="heart" loading="lazy" />
			</div>
		</div>
	</div>
</div>

<style>
	#modal-background {
		display: flex;
		position: fixed;
		z-index: 1;
		left: 0;
		top: 0;
		width: 100%;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.5);
		justify-content: center;
		align-items: center;
	}

	.modal-wrapper {
		position: relative;
		width: 900px;
		max-width: 95%;
		height: auto;
		max-height: 95%;
		border: none;
		border-radius: 6px;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		background-color: #fde5f1;
	}

	.modal-header {
		display: flex;
		background-color: #fde5f1;
		flex-direction: row;
		border: none;
		border-bottom-style: solid;
		border-bottom-width: 2px;
		border-bottom-color: #fbcfe5;
	}

	.modal-header h1 {
		font-family: 'Fredoka Variable', sans-serif;
		font-weight: 500;
		font-size: 28px;
		flex-grow: 2;
		padding: 20px 0px 20px 22px;
		margin: 0;
		line-height: 28px;
	}

	.close {
		font-family: 'Fredoka Variable', sans-serif;
		font-weight: 600;
		width: 16px;
		height: 16px;
		background-color: transparent;
		border: 0;
		font-size: 16px;
		color: darkgray;
		cursor: pointer;
		margin-right: 8px;
		margin-top: 4px;
		padding: 0;
	}

	.close:hover {
		color: gray;
	}

	.modal-body {
		display: flex;
		flex-direction: column;
		gap: 1.75em;
		justify-content: start;
		padding: 12px 22px 26px 22px;
		overflow-y: auto;
	}

	.text-block {
		font-family: 'Fredoka Variable', sans-serif;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.5em;
	}

	.text-block h1 {
		font-size: larger;
		font-weight: 500;
		margin-top: 0px;
		margin-bottom: 0px;
	}

	.text-block p,
	.text-block a,
	.text-block ul {
		font-size: medium;
		font-weight: 400;
		margin: 0px;
	}

	.image-block {
		text-align: center;
	}

	.image-block > img {
		width: 96px;
		height: auto;
	}

	#fred {
		font-family: 'Fredoka Variable', sans-serif;
		font-weight: 600;
	}

	#mp2 {
		font-family: 'M PLUS 2', sans-serif;
	}
</style>

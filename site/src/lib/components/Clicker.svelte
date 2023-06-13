<script lang="ts">
	import { localCount, globalCount } from '$lib/store';

	async function onClick() {}
</script>

<div id="clicker">
	<div id="globalCount">
		<p class="label">Global Yoishos</p>
		<p class="value">{$globalCount.toLocaleString()}</p>
	</div>
	<div id="chatArea" />
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
			88% 19%,
			99% 41%,
			87% 82%,
			51% 100%,
			18% 86%,
			6% 67%,
			3% 40%,
			16.5% 12.5%
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

	#chatArea {
		background-color: red;
		height: 65%;
		width: 65%;
	}

	#chatDivider {
		height: 2px;
		width: 72%;

		background-image: radial-gradient(circle at center, #fefefe 1px, transparent 1px);
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

<script lang="ts">
	import { generateUsername } from '$lib/utils/usernames';
	import { randomInt, randomIntRange } from '$lib/utils/utils';
	import { Queue } from '@datastructures-js/queue';
	import { fly } from 'svelte/transition';

	type YoishoText = {
		contents: string;
	};

	type YoishoEmotes = {
		repetitions: number;
	};

	type Message = {
		username: string;
		isMember: boolean;
		message: YoishoText | YoishoEmotes;
	};

	const isEmotes = (object: YoishoText | YoishoEmotes): object is YoishoEmotes => {
		return 'repetitions' in object;
	};

	const generateYoishoText = (): string => {
		// Skew towards a single yoisho.
		const times = (() => {
			const t = randomIntRange(1, 20);
			if (t > 3) {
				return 1;
			} else {
				return t;
			}
		})();

		// This is deliberate, skew the punctuation lower.
		const endingPunctuation = randomInt(15);

		let message = '';

		let confusionRng = randomIntRange(0, 10000);
		if (confusionRng == 116) {
			message = "What's going on?";
		} else {
			for (let i = 0; i < times; i++) {
				message += 'yoisho';
				if (i < times - 1) {
					message += ' ';
				}
			}

			switch (endingPunctuation) {
				case 1:
					message += '!';
					break;
				case 2:
					message += '?';
					break;
				case 3:
					message += '!?';
					break;
				case 4:
					message += '...';
					break;
				case 5:
					message += '?!';
					break;
			}
		}

		return message;
	};

	let currentMessages = new Queue<Message>();

	/// Note this array is stored in *reverse* order, since we want the latest message first!
	let currentMessagesArray: Array<Message> = [];

	export const generateMessages = () => {
		const numMessages = randomIntRange(1, 5);
		for (let i = 0; i < numMessages; i++) {
			const username = generateUsername();
			const isMember = randomIntRange(1, 3) == 2;
			const messageType = randomInt(3);
			const message =
				messageType == 3
					? { contents: generateYoishoText() }
					: { repetitions: randomIntRange(1, 6) };

			currentMessages.push({
				username: username,
				isMember: isMember,
				message: message
			});
		}

		while (currentMessages.size() > 30) {
			currentMessages.pop();
		}

		currentMessagesArray = currentMessages.toArray().reverse();
	};
</script>

<div id="chat-area">
	{#each currentMessagesArray as msg (msg)}
		<div class="message" in:fly={{ y: 10 }}>
			<p>{msg.username}</p>
			{#if msg.isMember}
				<p>M</p>
			{/if}
			{#if isEmotes(msg.message)}
				<p>
					{#each { length: msg.message.repetitions } as _, i}
						EMOTE
					{/each}
				</p>
			{:else}
				<p>{msg.message.contents}</p>
			{/if}
		</div>
	{/each}
</div>

<style lang="scss">
	#chat-area {
		background-color: transparent;
		height: 100%;
		width: 100%;
		overflow: hidden;

		display: flex;
		flex-direction: column-reverse;
		gap: 0.6rem;

		-webkit-mask-image: linear-gradient(to top, black 65%, transparent 100%);
		mask-image: linear-gradient(to top, black 65%, transparent 100%);
	}

	.message {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		justify-content: flex-start;
		gap: 10px;

		p {
			margin: 0;
			padding: 0;

			font-size: small;
		}
	}

	@media only screen and (min-width: 600px) {
		#chat-area {
			gap: 1.25rem;
		}

		.message {
			p {
				font-size: medium;
			}
		}
	}
</style>

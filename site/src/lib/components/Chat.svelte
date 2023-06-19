<script lang="ts">
	import { generateUsername } from '$lib/utils/usernames';
	import { randomInt, randomIntRange } from '$lib/utils/utils';
	import { Queue } from '@datastructures-js/queue';

	type YoishoText = {
		contents: string;
	};

	type YoishoEmotes = {
		repetitions: number;
	};

	type Message = {
		username: string;
		message: YoishoText | YoishoEmotes;
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

		return message;
	};

	let currentMessages = new Queue<Message>();

	const generateMessages = () => {
		const numMessages = randomIntRange(1, 5);
		for (let i = 0; i < numMessages; i++) {
			const username = generateUsername();
			const messageType = randomInt(3);
			const message =
				messageType == 3
					? { contents: generateYoishoText() }
					: { repetitions: randomIntRange(1, 6) };

			currentMessages.push({
				username: username,
				message: message
			});
		}

		while (currentMessages.size() > 10) {
			currentMessages.pop();
		}
	};
</script>

<div id="chatArea" />

<style lang="scss">
	#chatArea {
		background-color: red;
		height: 65%;
		width: 65%;
	}
</style>

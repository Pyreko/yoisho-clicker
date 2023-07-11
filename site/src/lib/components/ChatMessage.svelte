<script lang="ts">
	import {
		MembershipLevel,
		type Message,
		type YoishoEmotes,
		type YoishoText
	} from '$lib/utils/chat';
	import { fly } from 'svelte/transition';

	export let msg: Message;

	const membershipMapping = new Map<number, string>([
		[MembershipLevel.New, 'new'],
		[MembershipLevel.Base, 'base'],
		[MembershipLevel.Silver, 'silver'],
		[MembershipLevel.Gold, 'gold'],
		[MembershipLevel.Plat, 'plat'],
		[MembershipLevel.Pon, 'pon']
	]);

	const isEmotes = (object: YoishoText | YoishoEmotes): object is YoishoEmotes => {
		return 'repetitions' in object;
	};
</script>

<div class="message" in:fly={{ y: 10 }}>
	{#if msg.membership != MembershipLevel.None}
		<p class="username member">{msg.username}</p>
		{@const membershipLevel = membershipMapping.get(msg.membership)}
		<img
			src={`images/badges/${membershipLevel}.webp`}
			alt={`${membershipLevel} membership badge`}
			class="badge"
		/>
	{:else}
		<p class="username">{msg.username}</p>
	{/if}
	<div class="message-contents">
		{#if isEmotes(msg.message)}
			<!-- eslint-disable -->
			{#each { length: msg.message.repetitions } as _}
				<img src="images/emotes/yoisho.webp" alt="yoisho membership emote" class="emote" />
			{/each}
		{:else}
			<p>{msg.message.contents}</p>
		{/if}
	</div>
</div>

<style lang="scss">
	.badge {
		height: 1.25rem;
		width: 1.25rem;
		text-align: center;
		padding: 0;
		padding-left: 5px;
	}

	.emote {
		height: 1.25rem;
		width: 1.25rem;
		text-align: center;
		padding: 0;
		padding-left: 2px;
	}

	.message {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
	}

	p {
		padding: 0;
		margin: 0;
		font-size: small;
		font-family: 'M PLUS 2', sans-serif;
		font-weight: 700;
	}

	@media only screen and (min-width: 600px) {
		p {
			font-size: small;
		}
	}

	@media only screen and (min-width: 768px) {
		p {
			font-size: medium;
		}
	}

	.username {
		color: #ddb0fa;

		&.member {
			color: #eaa3ca;
		}
	}

	.message-contents {
		margin: 0;
		padding: 0;
		color: whitesmoke;

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;

		padding-left: 8px;
	}
</style>

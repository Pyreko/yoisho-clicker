import { dev } from '$app/environment';
import { onDestroy } from 'svelte';

export const API_URL_BASE: string = dev
	? 'http://localhost:8088'
	: 'https://apiyoisho.howsthevolu.me';

/**
 *  Returns a random value from `start` up to and including `end`.
 */
export const randomIntRange = (min: number, max: number) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
};

/**
 *  Returns a random value from 0 to the given `maxVal`.
 */
export const randomInt = (maxVal: number) => {
	return randomIntRange(0, maxVal);
};

/**
 * Returns a random boolean.
 */
export const randBool = () => {
	return Math.random() < 0.5;
};

export const getLocalKey = (key: string) => {
	if (typeof localStorage !== 'undefined') {
		const storedVal = localStorage.getItem(key);

		if (storedVal == null) {
			return undefined;
		} else {
			return storedVal;
		}
	} else {
		return undefined;
	}
};

export const getLocalNum = (key: string) => {
	const storedCount = getLocalKey(key);

	if (storedCount == undefined) {
		return 0;
	} else {
		const parsed = parseInt(storedCount, 10);
		if (isNaN(parsed)) {
			// If it isn't a number, also erase the value.
			localStorage.removeItem(key);
			return 0;
		} else {
			return parsed;
		}
	}
};

export const onInterval = (callback: TimerHandler, milliseconds: number) => {
	const interval = setInterval(callback, milliseconds);

	onDestroy(() => {
		clearInterval(interval);
	});
};

import { dev } from '$app/environment';

export const API_URL_BASE: string = dev ? 'http://localhost:8088' : 'https://api.yoisho.clicker';

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

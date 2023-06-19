import { dev } from '$app/environment';

export const API_URL_BASE: string = dev ? 'http://localhost:8088' : 'https://api.yoisho.clicker';

/**
 *  Returns a random value from 0 to the given `maxVal`.
 */
export const randomInt = (maxVal: number) => {
	return Math.floor(Math.random() * (maxVal + 1));
};

/**
 *  Returns a random value from `start` up to and including `end`.
 */
export const randomRange = (start: number, end: number) => {
	return Math.floor(Math.random() * (end - start) + start);
};

/**
 * Returns a random boolean.
 */
export const randBool = () => {
	return Math.random() < 0.5;
};

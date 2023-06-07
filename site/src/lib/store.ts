import { get, writable, type Subscriber } from 'svelte/store';
import { dev } from '$app/environment';

export const API_URL_BASE: string = dev ? 'http://localhost:8080' : 'https://api.yoisho.clicker';

/**
 * Obtains local count stored on localStorage.
 * @returns The local count, if it exists/is valid, or 0.
 */
const getLocalCount = () => {
	if (typeof localStorage !== 'undefined') {
		const countKey = 'localYoishoCount';
		const storedCount = localStorage.getItem(countKey);

		if (storedCount == null) {
			return 0;
		} else {
			const parsed = parseInt(storedCount, 10);
			if (isNaN(parsed)) {
				// If it isn't a number, also erase the value.
				localStorage.removeItem(countKey);
				return 0;
			} else {
				return parsed;
			}
		}
	} else {
		return 0;
	}
};

/**
 * The local count. The initial value is obtained from localStorage.
 */
export const localCount = writable(getLocalCount());

/**
 * Obtains the global count via the API.
 * @returns The global count. If it fails, it will just return 0.
 */
const getGlobalCount = async (): Promise<number> => {
	try {
		const resp = await fetch(`${API_URL_BASE}/count`);

		if (resp.ok) {
			const json = await resp.json();
			const parsed = parseInt(json['count'], 10);

			if (!isNaN(parsed)) {
				return parsed;
			}
		}

		return 0;
	} catch {
		return 0;
	}
};

/**
 *
 * @param diff The difference between the previous value and the new value.
 * @returns How much to increment the counter by.
 */
const calculateIncrement = (diff: number) => {
	return Math.max(1, 10 ** Math.floor(Math.log10(diff)));
};

// This is a global for lazy reasons.
let timer: undefined | ReturnType<typeof setInterval> = undefined;

export const setGlobalCount = async (set: Subscriber<number>, newVal: number) => {
	// Some ugly code to make a pretty count-up.
	let currentVal = get(globalCount);

	if (currentVal != newVal) {
		let increment = calculateIncrement(newVal - currentVal);
		if (timer !== undefined) {
			clearInterval(timer);
		}

		timer = setInterval(() => {
			if (currentVal >= newVal) {
				clearInterval(timer);
			} else {
				const diff = newVal - currentVal;
				if (diff < increment) {
					increment = calculateIncrement(diff);
				}

				currentVal += increment;
				set(Math.min(currentVal, newVal));
			}
		}, 20);
	}
};

/**
 * The global count.
 */
export const globalCount = writable(0, (set) => {
	const interval = setInterval(async () => {
		const newVal = await getGlobalCount();
		await setGlobalCount(set, newVal);
	}, 20 * 1000);

	return () => {
		clearInterval(interval);
	};
});

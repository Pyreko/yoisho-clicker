import { get, writable, type Subscriber } from 'svelte/store';
import { API_URL_BASE, getLocalNum } from './utils';

/**
 * The local count. The initial value is obtained from localStorage.
 */
export const localCount = writable(getLocalNum('localYoishoCount'));

/**
 * Holds values to batch send as part of a global update.
 */
let batchedGlobalCounts = getLocalNum('batchedYoishoCount');

/**
 * Sends the current globally stored batched counts, and resets it to 0.
 */
export const sendBatchedCounts = async () => {
	if (batchedGlobalCounts > 0) {
		await fetch(`${API_URL_BASE}/increment`, {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ amount: batchedGlobalCounts })
		});
		batchedGlobalCounts = 0;
		localStorage.setItem('batchedYoishoCount', batchedGlobalCounts.toString());
	}
};

/**
 * Updates the local storage by the amount, and also stores it as part
 * of the batched counts to send later.
 */
export const updateCounts = (amount: number) => {
	let newLocalCount = 0;

	localCount.update((curr) => {
		newLocalCount = curr + amount;
		return newLocalCount;
	});
	localStorage.setItem('localYoishoCount', newLocalCount.toString());

	batchedGlobalCounts += amount;
	localStorage.setItem('batchedYoishoCount', batchedGlobalCounts.toString());

	globalCount.update((curr) => curr + amount);
};

/**
 *
 * @param diff The difference between the previous value and the new value.
 * @returns How much to increment the counter by.
 */
const calculateIncrement = (diff: number) => {
	return Math.max(1, 10 ** Math.floor(Math.log10(diff)));
};

/**
 * Obtains the global count via the API.
 * @returns The global count. If it fails, it will just return 0.
 */
export const getGlobalCount = async (): Promise<number> => {
	try {
		const resp = await fetch(`${API_URL_BASE}/count`);

		if (resp.ok) {
			const json = await resp.json();
			const parsed = parseInt(json, 10);

			if (!isNaN(parsed)) {
				return parsed;
			}
		}

		return 0;
	} catch {
		return 0;
	}
};

// This is a global for lazy reasons.
let getGlobalCountTimer: undefined | ReturnType<typeof setInterval> = undefined;

/**
 * Some ugly code to make a pretty count-up.
 * @param set
 * @param newVal
 */
export const setGlobalCount = async (set: Subscriber<number>, newVal: number) => {
	let currentVal = get(globalCount);

	if (currentVal != newVal) {
		let increment = calculateIncrement(newVal - currentVal);
		if (getGlobalCountTimer !== undefined) {
			clearInterval(getGlobalCountTimer);
		}

		getGlobalCountTimer = setInterval(() => {
			if (currentVal >= newVal) {
				clearInterval(getGlobalCountTimer);
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

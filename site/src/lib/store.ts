import { get, writable, type Subscriber } from 'svelte/store';
import { dev } from '$app/environment';

export const API_URL_BASE: string = dev ? 'http://localhost:8088' : 'https://api.yoisho.clicker';

const getLocalKey = (key: string) => {
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

const getLocalNum = (key: string) => {
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

/**
 * The local count. The initial value is obtained from localStorage.
 */
export const localCount = writable(getLocalNum('localYoishoCount'));

/**
 *  Returns a random value from 0 to the given `maxVal`.
 */
function randomInt(maxVal: number) {
	return Math.floor(Math.random() * (maxVal + 1));
}

/**
 * Gets and plays a single sound from the API.
 */
export const getAndPlaySound = async (
	audioContext: AudioContext | undefined,
	numAudioTracks: number
) => {
	const whichTrack = randomInt(numAudioTracks);
	const audio = new Audio();

	audio.crossOrigin = 'anonymous';
	audio.src = `${API_URL_BASE}/sound/${whichTrack}`;

	// Now stick it in a random channel from -1 to 1.
	if (audioContext == undefined) {
		audioContext = new AudioContext();
	}

	if (audioContext != undefined) {
		const src = audioContext.createMediaElementSource(audio);
		const pan = randomInt(2) - 1; // Random value from -1, 0, and 1.
		const stereoNode = new StereoPannerNode(audioContext, { pan });
		src.connect(stereoNode).connect(audioContext.destination);
	}

	audio.play();
};

/**
 * Gets the number of audio tracks from the API.
 */
export const getNumAudioTracks = async (): Promise<number> => {
	const DEFAULT_NUM_AUDIO_TRACKS = 300;

	try {
		const resp = await fetch(`${API_URL_BASE}/num-files`);

		if (resp.ok) {
			const json = await resp.json();
			const parsed = parseInt(json['count'], 10);
			if (!isNaN(parsed)) {
				return parsed;
			}
		}

		return DEFAULT_NUM_AUDIO_TRACKS;
	} catch {
		return DEFAULT_NUM_AUDIO_TRACKS;
	}
};

/**
 * Holds values to batch send as part of a global update.
 */
let batchedForGlobal = getLocalNum('batchedYoishoCount');

// This is a global for lazy reasons.
// TODO: Make this stop running if 0, and start again otherwise.
let setGlobalCountTimer = setInterval(async () => {
	if (batchedForGlobal > 0) {
		await fetch(`${API_URL_BASE}/increment`, {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ amount: batchedForGlobal })
		});
		batchedForGlobal = 0;
		localStorage.setItem('batchedYoishoCount', batchedForGlobal.toString());
	}
}, 10 * 1000);

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

	batchedForGlobal += amount;
	localStorage.setItem('batchedYoishoCount', batchedForGlobal.toString());

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

export const setGlobalCount = async (set: Subscriber<number>, newVal: number) => {
	// Some ugly code to make a pretty count-up.
	// This is fine as it's not a hot loop... once every 20 seconds is fine... right?
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

import { writable } from 'svelte/store';
import { API_URL_BASE, randomInt } from './utils';

export const numAudioTracks = writable(0);

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
	// if (audioContext == undefined) {
	// 	audioContext = new AudioContext();
	// }

	// if (audioContext != undefined) {
	// 	const src = audioContext.createMediaElementSource(audio);
	// 	const pan = randomInt(2) - 1; // Random value from -1, 0, and 1.
	// 	const stereoNode = new StereoPannerNode(audioContext, { pan });
	// 	src.connect(stereoNode).connect(audioContext.destination);
	// }

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
			const parsed = parseInt(json, 10);
			if (!isNaN(parsed)) {
				return parsed;
			}
		}

		return DEFAULT_NUM_AUDIO_TRACKS;
	} catch {
		return DEFAULT_NUM_AUDIO_TRACKS;
	}
};

import { randBool, randomInt, randomIntRange } from './utils';

const username_bases = [
	'IRyStocrat',
	'Diamond',
	'Goose',
	'Honk',
	'Pon',
	'Yeet',
	'Huh',
	'Bloom',
	'Gloom',
	'Zoom',
	'Guy',
	'Wheeze',
	'Banana',
	'Tofu',
	'Meatball',
	'Chan',
	'Kun',
	'Yoisho',
	'Volume',
	'Hope',
	'Despair',
	'Caesura',
	'Seiso',
	'Nephilim',
	'Hopium',
	'Copium',
	'Ch.',
	'Shark',
	'Rawr',
	'Idol',
	'Gravity',
	'Sleep',
	'Lost',
	'BL',
	'Baseball',
	'Bromance',
	'Sports',
	'Flower',
	'Frozen',
	'Dumb',
	'Genias',
	'GuyRyS',
	'Evil',
	'Cute',
	'Small',
	'Smol',
	'Ethereal',
	'Seraphic',
	'Wistful',
	'Celestial',
	'Harmonize',
	'Mystical',
	'Whispers',
	'Confused',
	'Excited',
	'Radiant',
	'Dreamer',
	'Serene',
	'Phoenix',
	'Sparkle',
	'Harmony',
	'Mystic',
	'Blissful',
	'Captain',
	'Doctor',
	'Alex',
	'Emily',
	'Ethan',
	'Sophia',
	'Jacob',
	'Olivia',
	'Ava',
	'Michael',
	'Isabella',
	'Daniel',
	'Mia',
	'Matthew',
	'David',
	'Noah',
	'Harper',
	'James',
	'Amelia',
	'Watson',
	'Benjamin',
	'Evelyn',
	'William',
	'Scarlett',
	'Alexander',
	'Grace',
	'Henry',
	'Lily',
	'Samuel',
	'Aria',
	'Zoe',
	'Gabriel',
	'Riley',
	'Jackson',
	'Nora',
	'Eleanor',
	'Forte',
	'Aubrey',
	'Stella',
	'Joshua',
	'Hazel',
	'Anthony',
	'Penelope',
	'Ryan',
	'Lilith'
];

export const generateUsername = () => {
	const usernameBaseLength = randomIntRange(1, 2);
	const nameType = randomInt(116);

	let username = '';
	for (let i = 0; i < usernameBaseLength; i++) {
		const isLowerCase = randBool();
		if (isLowerCase) {
			username += username_bases[randomInt(username_bases.length - 1)].toLowerCase();
		} else {
			username += username_bases[randomInt(username_bases.length - 1)];
		}

		const hasSpace = randBool();
		if (hasSpace) {
			username += ' ';
		}
	}

	if (nameType == 69) {
		username = 'IRySo' + username;
	} else if (nameType == 116) {
		username += 'RyS';
	}

	const hasNumber = randBool();
	if (hasNumber) {
		username += randomInt(9999).toString();
	}

	return username;
};

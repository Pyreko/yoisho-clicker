export type YoishoText = {
	contents: string;
};

export type YoishoEmotes = {
	repetitions: number;
};

export enum MembershipLevel {
	None,
	New,
	Base,
	Silver,
	Gold,
	Plat,
	Pon
}

export type Message = {
	username: string;
	membership: MembershipLevel;
	message: YoishoText | YoishoEmotes;
};

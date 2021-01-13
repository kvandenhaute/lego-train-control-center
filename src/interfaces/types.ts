export interface AvailableTrainEngine {
	uuid: string;
	name: string;
}

export interface RegisteredTrain {
	id: string;
	name: string;
	locomotives: Array<RegisteredLocomotive>;
}

interface RegisteredLocomotive {
	uuid: string;
	position: string;
}

export interface Message {
	key: string;
	value?: unknown;
}

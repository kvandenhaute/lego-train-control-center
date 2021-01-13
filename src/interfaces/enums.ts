export enum ClientType {
	'CONTROL_CENTER' = 'CONTROL_CENTER',
	'REGISTRAR' = 'REGISTRAR',
	'TRAIN' = 'TRAIN'
}

export enum ControlCenterMessage {
	'GET_TRAINS' = 'GET_TRAINS',
	'GET_TRAIN_ENGINES' = 'GET_TRAIN_ENGINES'
}

export enum TrainMessage {
	'LINK' = 'LINK_TRAIN',
	'START' = 'START_TRAIN',
	'STOP' = 'STOP_TRAIN'
}

export enum TrainStatus {
	'OFFLINE' = 'OFFLINE',
	'WAITING_FOR_LOCOMOTIVES' = 'WAITING_FOR_LOCOMOTIVES',
	'READY' = 'READY'
}

/// <reference types="web-bluetooth" />

export class TrainControl {
	private motor: BluetoothRemoteGATTServer;

	constructor(motor: BluetoothRemoteGATTServer) {
		this.motor = motor;
	}
}

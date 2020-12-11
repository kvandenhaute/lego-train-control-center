/// <reference types="web-bluetooth" />

import { PoweredUpHub } from './powerd-up.enums';

export class ControlTower {
	private connecting: boolean = false;

	async connectDevice(): Promise<BluetoothDevice |  null> {
		if (this.connecting) {
			throw new Error('Already connecting');
		}

		this.connecting = true;

		const device: BluetoothDevice | null = await navigator.bluetooth.requestDevice({
			filters: [{ services: [PoweredUpHub.LPF2] }],
			optionalServices: ['battery_service', 'device_information']
		}).catch((err: Error) => {
			if (err instanceof DOMException) {
				console.info(err.message)
			} else {
				console.error('ERROR', err)
			}

			return null;
		});

		if (device === null) {
			this.connecting = false;

			return null;
		} else if (typeof device.gatt === 'undefined') {
			this.connecting = false;

			throw new Error('Unsupported device');
		}

		this.connecting = false;

		return device;
	}

	async reconnectDevices(): Promise<Array<BluetoothDevice>> {
		return navigator.bluetooth.getDevices();
	}
}

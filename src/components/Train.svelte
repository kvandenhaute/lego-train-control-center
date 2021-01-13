<script lang="ts">
	import type { RegisteredTrain, Message } from '../interfaces/types';

	import { onMount } from 'svelte';
	import { ClientType, TrainMessage, TrainStatus } from '../interfaces/enums';

	export let train: RegisteredTrain;

	let ws: WebSocket | undefined;
	let connected: boolean = false;
	let ready: boolean = false;
	let status: TrainStatus = TrainStatus.OFFLINE;

	onMount(async () => {
		connectToServer();
	});

	function logger(message: string): void {
		console.info(`[ ${ClientType.TRAIN} ] ${message}`);
	}

	function debug(message: unknown): void {
		console.debug(`[ ${ClientType.TRAIN} ]`, message);
	}

	function connectToServer() {
		ws = new WebSocket('ws://localhost:3001/', ClientType.TRAIN);

		ws.onopen = () => {
			connected = true;

			send(TrainMessage.LINK, train);
		};

		ws.onclose = () => {
			connected = false;

			window.setTimeout(connectToServer, 5000);
		};

		ws.onmessage = e => {
			const message = JSON.parse(e.data);

			logger(`Incoming message ${message.key}`);
			debug(message.value);

			switch (message.key) {
				case 'STATUS_UPDATE':
					status = TrainStatus[ message.value as keyof typeof TrainStatus ];
					ready = status === TrainStatus.READY;
					break;
			}
			// 	case 'CONNECTED_HUBS':
			// 		message.hubs.forEach(hub => {
			// 			if (train.hubs.includes(hub)) {
			// 				hubs = [...hubs, { uuid: hub }];
			// 			}
			// 		});
			//
			// 		connected = hubs.length === train.hubs.length;
			//
			// 		break;
			// 	case 'CONNECTED_HUB':
			// 		if (train.hubs.includes(message.hub)) {
			// 			hubs = [...hubs, { uuid: message.hub }];
			// 		}
			//
			// 		connected = hubs.length === train.hubs.length;
			//
			// 		break;
			// }
		};
	}

	function send(key: string, value?: unknown) {
		logger(`Outgoing message ${key}`);

		const message: Message = { key };

		if (value) {
			message.value = value;
		}

		ws.send(JSON.stringify(message));
	}

	function update() {
		const formData = new FormData(this);

		ws.send(JSON.stringify({
			key: 'UPDATE_TRAIN',
			value: {
				id: train.id,
				name: formData.get('name')
			}
		}));
	}

	function start() {
		send(TrainMessage.START);
	}

	function stop() {
		send(TrainMessage.STOP);
	}
</script>

<form on:submit|preventDefault={update}
	class:offline={!connected}
	class:ready={ready}
>
	<input type="text" name="name" bind:value={train.name}>
	<ul>
		{#each train.locomotives as locomotive}
			<li>{locomotive.uuid}: {locomotive.position}</li>
		{/each}
	</ul>
	<button type="submit">Update</button>
</form>

<button type="button" on:click={start}>Start</button>
<button type="button" on:click={stop}>Stop</button>

<style lang="scss">
	form {
		background-color: #eee;
	}

	.offline {
		background-color: orangered;
	}

	.ready {
		background-color: greenyellow;
	}
</style>

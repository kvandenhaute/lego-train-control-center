<script lang="ts">
	import RegisterTrainComponent from '../components/RegisterTrain.svelte';
	import TrainComponent from '../components/Train.svelte';

	// import type { RegisteredTrain } from '../interfaces/types';

	import type { AvailableTrainEngine, RegisteredTrain, Message } from '../interfaces/types';

	import { onMount } from 'svelte';
	import { ClientType, ControlCenterMessage } from '../interfaces/enums';

	let ws: WebSocket | undefined;
	let connected: boolean = false;
	let trainEngines: Array<AvailableTrainEngine> = [];
	let trains: Array<RegisteredTrain> = [];

	onMount(async () => {
		connectToServer();
	});

	function logger(message: string): void {
		console.info(`[ ${ClientType.CONTROL_CENTER} ] ${message}`);
	}

	function debug(message: unknown): void {
		console.debug(`[ ${ClientType.CONTROL_CENTER} ]`, message);
	}

	function connectToServer() {
		ws = new WebSocket('ws://localhost:3001/', ClientType.CONTROL_CENTER);

		function send(...keys: Array<string>) {
			keys.forEach(key => {
				logger(`Outgoing message ${key}`);
				ws.send(JSON.stringify({ key }));
			});
		}

		ws.onopen = () => {
			connected = true;

			send(
				ControlCenterMessage.GET_TRAINS,
				// ControlCenterMessage.GET_TRAIN_ENGINES
			);
		};

		ws.onclose = () => {
			connected = false;
			// trains = [];

			window.setTimeout(connectToServer, 5000);
		};

		ws.onmessage = e => {
			const message = JSON.parse(e.data);

			logger(`Incoming message ${message.key}`);
			debug(message.value);

			switch (message.key) {
				case 'TRAINS':
					trains = message.value || [];
					break;
				case 'TRAIN_ENGINES':
					trainEngines = message.value || [];
					break;
				case 'TRAIN_ENGINE_ADDED':
					trainEngines = [...trainEngines, message.value];
					break;
			}
		};
	}
</script>

<div>
	{#each trains as train}
		<TrainComponent {train} />
	{/each}
<!--	{#if trainEngines.length > 0}-->
<!--		<RegisterTrainComponent {trainEngines} />-->
<!--	{/if}-->
</div>

<script lang="ts">
	import type { AvailableTrainEngine } from '../interfaces/types';

	import { onMount } from 'svelte';

	import { ClientType } from '../interfaces/enums';

	let ws: WebSocket | undefined;
	let open: boolean = false;
	export let trainEngines: Array<AvailableTrainEngine> = [];

	onMount(async () => {
		connectToServer();
	});

	function connectToServer() {
		ws = new WebSocket('ws://localhost:3001/', ClientType.REGISTRAR);

		ws.onopen = () => {
			open = true;

			// ws.send(JSON.stringify({
			// 	key: 'GET_TRAIN_ENGINES'
			// }));
		};

		ws.onclose = () => {
			open = false;
			// trainEngines = [];

			window.setTimeout(connectToServer, 5000);
		};

		ws.onmessage = e => {
			const message = JSON.parse(e.data);

			console.log('REGISTRAR', message);

			switch (message.key) {
				// case 'TRAIN_ENGINES':
				// 	trainEngines = message.value;
				// 	break;
				case 'NEW_TRAIN_ENGINE':
					// trainEngines = [...trainEngines, message.trainEngine];
					break;
			}
		};
	}

	function register() {
		const formData = new FormData(this);
		const train = {
			name: formData.get('name'),
			trainEngines: formData.getAll('trainEngines')
		};

		ws.send(JSON.stringify({
			key: 'REGISTER_TRAIN',
			value: train
		}));

		this.reset();
	}

	$: canRegister = open && trainEngines.length > 0;
</script>

<div class="card">
	<div class="card-header">
		Register train
	</div>
	<div class="card-body">
		<form on:submit|preventDefault={register}>
			<div class="form-group">
				<label for="name">Name</label>
				<input type="text" name="name" id="name" class="form-control" required placeholder="Enter name" value="Trein" disabled={!canRegister}>
			</div>
			<div class="form-group">
				<label for="trainEngines">Train engines</label>
				<select name="trainEngines" id="trainEngines" class="form-control" required multiple size="2" disabled={!canRegister}>
					{#each trainEngines as trainEngine (trainEngine.uuid)}
						<option value={trainEngine.uuid} selected>{trainEngine.name}</option>
					{/each}
				</select>
			</div>
			<button type="submit" class="btn btn-primary" disabled={!canRegister}>Register</button>
		</form>
	</div>
</div>

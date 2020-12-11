<script lang="ts">
	import TrainControl from '../components/TrainControl.svelte';

	import { ControlTower } from '../lib/ControlTower';
	import { onMount } from 'svelte';

	let controlTower = new ControlTower();
	let trains: Array<BluetoothDevice> = [];

	onMount(async () => {
		trains = await controlTower.reconnectDevices();
	});
</script>

<button><span class="material-icons">add</span></button>

<div class="train-controls">
	{#each trains as train}
		<TrainControl {train} />
	{/each}
</div>

<style lang="scss">
	//.train-controls {
	//	display: grid;
	//	grid-gap: 1rem;
	//	//grid-auto-columns: 300px;
	//	grid-auto-flow: column;
	//}
</style>

<!--<script lang="ts">-->
<!--	// import { Statuses } from '../lib/Statuses';-->

<!--	// export let state: Statuses = Statuses.ONLINE;-->
<!--</script>-->

<!--<span class="blob" class:blob&#45;&#45;connecting={state === Statuses.CONNECTING}>-->
<!--	{#if state === Statuses.ONLINE}-->
<!--		<span class="material-icons">bluetooth_connected</span>-->
<!--	{:else if state === Statuses.CONNECTING}-->
<!--		<span class="material-icons">bluetooth_searching</span>-->
<!--	{:else}-->
<!--		<span class="material-icons">bluetooth_disabled</span>-->
<!--	{/if}-->
<!--</span>-->

<!--<style lang="scss">-->
<!--	$dimensions: 50px;-->
<!--	$bluetooth-blue: hsl(217, 87%, 30%);-->
<!--	$bluetooth-blue2: hsla(217, 87%, 30%, .7);-->

<!--	.blob {-->
<!--		display: inline-block;-->
<!--		position: relative;-->
<!--		width: $dimensions;-->
<!--		height: $dimensions;-->
<!--		//margin: $dimensions / 2;-->
<!--		transform: scale(1);-->
<!--		border-radius: 50%;-->
<!--		background-color: $bluetooth-blue;-->
<!--		color: hsl(0, 100%, 100%);-->
<!--		box-shadow: 0 0 0 0 $bluetooth-blue;-->

<!--		&&#45;&#45;connecting {-->
<!--			animation: pulse 2s infinite;-->
<!--		}-->

<!--		span {-->
<!--			position: absolute;-->
<!--			top: 50%;-->
<!--			left: 50%;-->
<!--			transform: translate(-50%, -50%);-->
<!--		}-->
<!--	}-->

<!--	@keyframes pulse {-->
<!--		0% {-->
<!--			transform: scale(.95);-->
<!--			box-shadow: 0 0 0 0 $bluetooth-blue2;-->
<!--		}-->

<!--		70% {-->
<!--			transform: scale(1);-->
<!--			box-shadow: 0 0 0 $dimensions/2 rgba(52, 172, 224, 0);-->
<!--		}-->

<!--		100% {-->
<!--			transform: scale(.95);-->
<!--			box-shadow: 0 0 0 0 rgba(52, 172, 224, 0);-->
<!--		}-->
<!--	}-->
<!--</style>-->

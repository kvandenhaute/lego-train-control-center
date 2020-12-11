<script lang="ts">
	import { TrainControl } from '../lib/TrainControl';

	export let train: BluetoothDevice;

	let connected: boolean = false;
	let speed: number = 0;

	// const poweredUp = new TrainControl();

	console.log(train);

	function connect() {
		// poweredUp.connect();
	}
</script>

<article>
	<h1>{train.name}</h1>


<!--	<img alt="LEGO 60197" src="lego-60197.jpeg">-->
<!--	<div class="body">-->
<!--		<h1>Name of the train</h1>-->

<!--	</div>-->

<!--	&lt;!&ndash;{#if connected}&ndash;&gt;-->
<!--	&lt;!&ndash;	<div class="card">&ndash;&gt;-->
<!--	&lt;!&ndash;		<div class="card-body">&ndash;&gt;-->
<!--	&lt;!&ndash;			<h5 class="card-title">{motor.device.name}</h5>&ndash;&gt;-->
<!--	&lt;!&ndash;			<button class="btn btn-primary">GO!</button>&ndash;&gt;-->
<!--	&lt;!&ndash;		</div>&ndash;&gt;-->
<!--	&lt;!&ndash;	</div>&ndash;&gt;-->
<!--	&lt;!&ndash;{/if}&ndash;&gt;-->

<!--	&lt;!&ndash;<button class="btn btn-light" on:click={startScanning}>Start scanning</button>&ndash;&gt;-->
</article>

<!--<div class="gauge gauge&#45;&#45;step-{speed}">-->
<!--	<div class="slice-colors">-->
<!--		<div class="st slice-item"></div>-->
<!--		<div class="st slice-item"></div>-->
<!--		<div class="st slice-item"></div>-->
<!--		<div class="st slice-item"></div>-->
<!--		<div class="st slice-item"></div>-->
<!--	</div>-->
<!--	<div class="needle"></div>-->
<!--	<div class="gauge-center"></div>-->
<!--</div>-->

<!--<button on:click={faster}>+</button>-->
<!--<button on:click={slower}>-</button>-->

<style lang="scss">
	//article {
	//	width: 400px;
	//	//height: 450px;
	//	//padding: 1rem;
	//	border-radius: 5px;
	//	border: 1px solid;
	//	background-color: #fff;
	//}
	//
	//img {
	//	width: 100%;
	//	padding: 1px;
	//	border-top-left-radius: 5px;
	//	border-top-right-radius: 5px;
	//	border-bottom: 1px solid;
	//}
	//
	//.body {
	//	padding: 1rem;
	//}
	//
	//h1 {
	//	font-size: 1.5em;
	//	text-align: center;
	//}

	//.gauge {
	//	margin-bottom: 1rem;
	//	background: #e7e7e7;
	//	box-shadow: 0 0 0 6px rgba(255, 255, 255, 0.09), 0 0 35px 5px rgba(255, 255, 255, 0.29);
	//	width: 200px;
	//	height: 100px;
	//	border-radius: 100px 100px 0 0;
	//	position: relative;
	//	overflow: hidden;
	//	/* safari fix */
	//	-webkit-transform-style: flat;
	//	-webkit-transform: translateZ(0px);
	//}
	//
	//.gauge-center {
	//	content: '';
	//	color: #fff;
	//	width: 60%;
	//	height: 60%;
	//	background: #15222e;
	//	border-radius: 100px 100px 0 0;
	//	position: absolute;
	//	box-shadow: 0 -13px 15px -10px rgba(0, 0, 0, 0.28);
	//	right: 21%;
	//	bottom: 0;
	//	color: #fff;
	//}
	//
	//.gauge-center::before {
	//	font-size: 1.5em;
	//	width: 100%;
	//	padding: 10px 0 0 0;
	//	text-align: center;
	//	float: left;
	//	-webkit-font-smoothing: antialiased;
	//}
	//
	//.gauge-center::after {
	//	content: '';
	//	width: 100%;
	//	float: left;
	//	opacitY: .6;
	//	text-align: center;
	//}
	//
	//.needle {
	//	width: 78px;
	//	height: 7px;
	//	background: #15222e;
	//	border-radius: 100% 5px 5px 100%;
	//	position: absolute;
	//	bottom: 4px;
	//	left: 20px;
	//	transform-origin: 100% 4px;
	//	//animation: speed 5s infinite;
	//	box-shadow: 0 2px 2px 1px rgba(0, 0, 0, 0.38);
	//	transition: transform 400ms ease-in-out;
	//
	//	.gauge--step-1 & {
	//		transform: rotate(18deg);
	//	}
	//
	//	.gauge--step-2 & {
	//		transform: rotate(36deg);
	//	}
	//
	//	.gauge--step-3 & {
	//		transform: rotate(54deg);
	//	}
	//}
	//
	//.slice-colors .st {
	//	position: absolute;
	//	bottom: 0;
	//	width: 60px;
	//	height: 0;
	//	border-bottom: 80px solid #000;
	//	border-left: 12px solid transparent;
	//	border-right: 12px solid transparent;
	//}
	//
	//.slice-colors .st.slice-item:nth-child(1) {
	//	border-bottom-color: #1eaa59;
	//	left: -2px;
	//}
	//
	//.slice-colors .st.slice-item:nth-child(2) {
	//	border-bottom-color: #9baa1e;
	//	transform: rotate(135deg);
	//	transform-origin: right;
	//	top: 12px;
	//	left: -65px;
	//}
	//
	//.slice-colors .st.slice-item:nth-child(3) {
	//	border-bottom-color: #f1c40f;
	//	transform: rotate(179deg);
	//	transform-origin: right;
	//	top: -20px;
	//	left: -62px;
	//	border-bottom-width: 90px;
	//	border-left-width: 45px;
	//	border-right-width: 45px;
	//	width: 18px;
	//}
	//
	//.slice-colors .st.slice-item:nth-child(4) {
	//	border-bottom-color: #e67e22;
	//	transform: rotate(219deg);
	//	transform-origin: right;
	//	top: -23px;
	//	left: 43px;
	//}
	//
	//.slice-colors .st.slice-item:nth-child(5) {
	//	border-bottom-color: #e84c3d;
	//	transform: rotate(240deg);
	//	transform-origin: right;
	//	right: 52px;
	//}
	//
	//@keyframes speed {
	//	0% {
	//		transform: rotate(0);
	//	}
	//	40% {
	//		transform: rotate(180deg);
	//	}
	//	55% {
	//		transform: rotate(170deg);
	//	}
	//	75% {
	//		transform: rotate(180deg);
	//	}
	//}
</style>

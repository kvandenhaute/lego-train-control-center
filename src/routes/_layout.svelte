<header>
	<img src="/lego.svg" alt="LEGO">
</header>
<main>
	<slot></slot>
</main>

<style global lang="scss">
	@import 'src/assets/scss/main';

	header {
		grid-area: header;
		padding: .5rem;
		background-color: $lego-yellow;
	}

	main {
		grid-area: main;
		padding: .5rem;
	}

	img {
		height: 50px;
	}
</style>

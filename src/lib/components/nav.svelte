<header id="nav">
	<a href="/" aria-label="Homepage"> home</a>

	<nav class="item">
		<!-- <a href='/lab'>lab</a> -->
		<!-- <a href='/now'>now</a> -->
		<a href="/note"> notes</a>
		<a href="/lab"> lab</a>
	</nav>
</header>

<style is:global>
	header#nav {
		/* fixed px-4 md:px-0 py-2 left-0 right-0 bottom-0 text-lg z-10 transition-all duration-1000 ease-in-out */
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 12;
		width: 100%;
		padding: 1.5em 1.75em 0.5em;
		display: flex;
		align-items: center;
		justify-content: space-between;

		background: red;
		background: color-mix(in oklch var(--bg-low) 20%, oklch(1, 1, 40));
		backdrop-filter: blur(4px);
		/* opacity: .58; */
		mask-image: linear-gradient(in oklch, transparent 6%, var(--bg-low) 80%);
		/* background: linear-gradient(red 12%, var(--bg-low) 85%); */

		& > a {
			font-style: italic;
		}
		nav {
			display: flex;
			gap: 2em;
		}
	}
</style>

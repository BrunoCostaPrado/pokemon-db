<script lang="ts">
	import { partytownSnippet } from "@builder.io/partytown/integration"
	import "../app.postcss"
</script>

<main class="container">
	<slot />
</main>

<svelte:head>
	<script>
		// Forward the necessary functions to the web worker layer
		partytown = {
			forward: ["dataLayer.push"]
		}
	</script>

	<!-- {@html "<script>" + partytownSnippet() + "</script>"} -->
</svelte:head>

<script script lang="ts" module>
	import SuperDebug, { superForm } from "sveltekit-superforms"
	import * as devalue from "devalue"
	import { deleteAll, getPokemons, root, getPokemon, getPokemonByName, seed } from "$api"

	export let data

	const { form, errors, constraints, enhance, reset, message } = superForm(data.form, {
		resetForm: false,
		onUpdate({ form }) {
			if (!data.form.data.name) {
				reset({ keepMessage: true })
			}
		}
	})

	export { form }
	export { $data, $constraints }
</script>

<!-- <SuperDebug data={$form} /> -->

<article>
	<header>
		<h1 class="mb-0">New Pokemon</h1>
	</header>

	<body class="px-1 mb-0">
		<form method="POST" use:enhance>
			<label for="name">Name</label>
			<input
				type="text"
				name="name"
				aria-invalid={$errors.name ? "true" : undefined}
				bind:value={$form.name}
				{...$constraints.name}
			/>
			{#if $errors.name}<span class="invalid">{$errors.name}</span>{/if}

			<label for="number">Number</label>
			<input
				type="number"
				name="number"
				aria-invalid={$errors.number ? "true" : undefined}
				bind:value={$form.number}
				{...$constraints.number}
			/>
			{#if $errors.number}<span class="invalid">{$errors.number}</span>{/if}

			<!--  -->

			<label for="price">Price</label>
			<input
				type="text"
				name="price"
				aria-invalid={$errors.price ? "true" : undefined}
				bind:value={$form.price}
				{...$constraints.price}
			/>
			{#if $errors.price}<span class="invalid">{$errors.price}</span>{/if}
			<!--  -->
			<label for="quantity">Quantity</label>
			<input
				type="number"
				name="quantity"
				aria-invalid={$errors.quantity ? "true" : undefined}
				bind:value={$form.quantity}
				{...$constraints.quantity}
			/>
			{#if $errors.quantity}<span class="invalid">{$errors.quantity}</span>{/if}

			<!--  -->
			<label for="rarity">Rarity</label>
			<input
				type="text"
				name="rarity"
				aria-invalid={$errors.rarity ? "true" : undefined}
				bind:value={$form.rarity}
				{...$constraints.rarity}
			/>
			{#if $errors.rarity}<span class="invalid">{$errors.rarity}</span>{/if}

			<!--  -->
			<label for="collection">Collection</label>
			<input
				type="text"
				name="collection"
				aria-invalid={$errors.collection ? "true" : undefined}
				bind:value={$form.collection}
				{...$constraints.collection}
			/>
			{#if $errors.collection}<span class="invalid">{$errors.collection}</span>{/if}

			<div>
				<button type="submit">Submit</button>
			</div>
		</form>
		<div>
			<button type="button" class="btn variant-filled-success" on:click={getPokemons}
				>Get Pokemons</button
			>

			<button type="button" class="btn btn-xl variant-filled-warning" on:click={deleteAll}
				>deleteAll</button
			>

			<button type="button" class="btn btn-xl variant-filled" on:click={root}>Root</button>
		</div>

		<div>
			<button type="button" class="btn btn-xl variant-filled" on:click={getPokemon}
				>getPokemon</button
			>
		</div>
		<!-- <div class="px-2 py-2 flex flex-row justify-start">hello</div> -->

		<br />
		<div>
			<button type="button" class="btn btn-xl variant-filled flex flex-row" on:click={seed}
				>Seed</button
			>
		</div>
		<!-- <div><button type="button" class="btn btn-xl variant-filled" on:click={root}>Root</button></div> -->
	</body>
</article>

<style>
	.invalid {
		color: red;
	}
</style>

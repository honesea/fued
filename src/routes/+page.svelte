<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from '$lib/RadioButton.svelte';

	export let data;
	export let form;

	let formValid = false;
	let formSubmitted = false;

	$: showPicker = !form && !formSubmitted;

	function checkFormValid() {
		formValid = true;
	}
</script>

<div class="my-16 flex h-full w-full flex-col items-center justify-center gap-16">
	{#if showPicker}
		<h2 class="text-center text-4xl font-thin">{data.pick.question}</h2>
		<form
			method="POST"
			use:enhance={() => {
				formSubmitted = true;
			}}
			class="flex w-full max-w-xs flex-col gap-4"
		>
			{#each data.pick.answers as answer}
				<Button text={answer} on:change={checkFormValid} />
			{/each}

			<button
				type="submit"
				class="w-full max-w-md rounded-xl p-4 text-xl font-bold uppercase"
				class:bg-slate-100={!formValid}
				class:bg-amber-200={formValid}
			>
				submit
			</button>
		</form>
	{:else}
		<h2 class="text-center text-4xl font-thin">{data.order.question}</h2>
		<div class="flex w-full max-w-sm flex-col gap-4">
			{#each data.order.answers as answer}
				<button>
					{answer.option}, {answer.votes}
				</button>
			{/each}
		</div>
	{/if}
</div>

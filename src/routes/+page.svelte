<script lang="ts">
	import { onMount } from 'svelte';
	import { enhance } from '$app/forms';
	import RadioButton from '$lib/RadioButton.svelte';
	import DraggableList from '$lib/DraggableList.svelte';

	export let data;
	export let form;

	let formInvalid = false;
	let formSubmitted = false;
	let gameFinished = false;

	let answers: { option: string; votes: number }[] = [];
	let incorrectGuesses: { option: string; votes: number }[][] = [];

	$: showPicker = !form && !formSubmitted;
	$: lives = 3 - incorrectGuesses.length;

	function checkFormValid() {
		formInvalid = false;
	}

	function checkOrder() {
		let lastAnswer;
		for (const answer of answers) {
			if (lastAnswer && answer.votes > lastAnswer) {
				console.log('wrong answer');
				incorrectGuesses = [...incorrectGuesses, [...answers]];

				if (incorrectGuesses.length >= 3) {
					console.log('game over');
					gameFinished = true;
				}

				return;
			}

			lastAnswer = answer.votes;
		}

		console.log('you won');
		gameFinished = true;
	}

	async function share() {
		console.log(incorrectGuesses);

		const shareData = {
			title: 'FUED',
			url: 'https://www.fued.com',
			text: `
				You ${incorrectGuesses.length < 3 ? 'Won!' : 'Lost :('}
			`
		};

		if (navigator.canShare && navigator.canShare(shareData)) {
			await navigator.share(shareData);
		} else {
			navigator.clipboard.writeText(shareData.text);
		}

		console.log('shared');
	}

	onMount(() => {
		formInvalid = true;
		answers = data.order.answers;
	});
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
				<RadioButton text={answer} on:change={checkFormValid} />
			{/each}

			<button
				type="submit"
				class="w-full max-w-md rounded-xl p-4 text-xl font-bold uppercase"
				class:bg-slate-100={formInvalid}
				class:bg-amber-200={!formInvalid}
			>
				submit
			</button>
		</form>
	{:else if !gameFinished}
		<h2 class="text-center text-4xl font-thin">{data.order.question}</h2>
		<div class="flex w-full justify-center gap-12">
			{#each Array(3) as _, i}
				<div class="h-6 w-6 rotate-45 bg-red-200 transition-opacity" class:opacity-0={i >= lives} />
			{/each}
		</div>
		<div class="flex w-full max-w-sm flex-col gap-4 px-6">
			<DraggableList {answers} />

			<button
				class="w-full max-w-md rounded-xl bg-amber-200 p-4 text-xl font-bold uppercase"
				on:click={checkOrder}
			>
				submit
			</button>
		</div>
	{:else}
		<h2 class="text-center text-4xl font-thin">
			{incorrectGuesses.length < 3 ? 'You Won!' : 'You Lost :('}
		</h2>

		<button
			class="w-full max-w-md rounded-xl bg-amber-200 p-4 text-xl font-bold uppercase"
			on:click={share}
		>
			share
		</button>
	{/if}
</div>

<script lang="ts">
	export let answers: { option: string; votes: number }[] = [];

	let draggedItem = -1;

	function dragStart(item: number) {
		setTimeout(() => (draggedItem = item), 0);
	}

	function dragEnd() {
		draggedItem = -1;
	}

	function drop(target: number) {
		const item = answers[draggedItem];
		answers[draggedItem] = answers[target];
		answers[target] = item;
	}
</script>

{#each answers as answer, index}
	<button
		class="flex w-full items-center gap-6"
		on:drop={() => drop(index)}
		on:dragenter|preventDefault
		on:dragover|preventDefault
	>
		<span class="text-4xl font-thin">{index + 1}</span>

		<button
			class="w-full rounded-xl border border-slate-100 bg-slate-100 p-6 text-xl font-thin"
			class:opacity-0={draggedItem === index}
			draggable="true"
			on:dragstart={() => dragStart(index)}
			on:dragend={dragEnd}
		>
			{answer.option}, {answer.votes}, {draggedItem === index ? 'true' : 'false'}
		</button>
	</button>
{/each}

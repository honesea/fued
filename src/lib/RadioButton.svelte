<script lang="ts">
	export let text = '';
</script>

<label for="html" class="relative">
	<input
		class="peer absolute left-0 top-0 h-full w-full opacity-0"
		type="radio"
		id={text}
		name="pick"
		value={text}
		required
		on:change
	/>
	<div
		class="rounded-xl border border-slate-100 bg-slate-100 p-6 text-xl font-thin peer-checked:border-lime-300 peer-checked:bg-lime-50"
	>
		<span>{text}</span>
	</div>
</label>

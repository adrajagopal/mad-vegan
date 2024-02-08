<script  setup>

/* props
	for & id
	label text
	label class??
	type=radio
	value
	v-model
	name (must be shared across all options)
	sort order as a class (reverse or empty)
*/

</script>

<template>
	<div class="radio-container" :class="sortOrder">
		<label for="vegan">
			<input
				id="vegan"
				type="radio"
				value="vegan"
				name="diet_category"
			/>Option
		</label>
	</div>
</template>

<style scoped>
	
	.radio-container.reverse label {
		display: flex;
		flex-direction: row-reverse;
		justify-content: flex-start;
	}
</style>

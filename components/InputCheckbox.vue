<script setup>
	
/* props
	for & id
	label text
	label class??
	type=checkbox
	value
	v-model
*/



</script>

<template>
	<div class="radio-container" :class="sortOrder">
		<label for="vegan">
			<input
				id="vegan"
				type="checkbox"
				value="vegan"
			/>Option
		</label>
	</div>
</template>

<style scoped></style>

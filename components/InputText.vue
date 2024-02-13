<script  setup>

	const props = defineProps({
		inputType: String, //values: email, number, text, pw
		name: String, // used for: for, id, v-model
		required: Boolean,
		label: String, //used for: label element
		autocomplete: String, //values: on, off
		stackDetails: String, // direction: "column" or leave blank for row; order: "reverse" or leave blank for default
		//next -- handle defineModel stuff
	});

</script>

<template>
	<div class="input-container" :class="stackDetails">
		<label class="med-plus-voice" :for="name">{{label}}</label>
		<input :required="required" :id="name" :type="inputType"/>
	</div>
</template>

<style scoped>

	input[type="text"],
	input[type="number"],
	input[type="email"],
	input[type="password"] {
		padding: 12px;
		border: var(--border);
		background-color: var(--paper);
		font-size: 16px;
		max-width: 400px;

		&:focus {
			background-color: var(--paper-accent);
		}
	}




</style>

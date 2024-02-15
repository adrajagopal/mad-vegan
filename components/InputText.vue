<script  setup>

	const props = defineProps({
		inputType: String, //values: email, number, text, pw
		name: String, // used for: for, id, v-model
		required: Boolean,
		label: String, //used for: label element
		autocomplete: String, //values: on, off
		stackDetails: String, // direction: "column" or leave blank for row; order: "reverse" or leave blank for default
		
		//v-model -- put on the parent
	});

	const model = defineModel();

</script>

<template>
	<div class="input-container" :class="stackDetails">
		<label class="med-plus-voice" :for="name">{{label}}</label>
		<input :required="required" :id="name" :type="inputType" v-model="model"/>
	</div>
</template>

<style scoped>

	input[type="text"],
	input[type="number"],
	input[type="email"],
	input[type="password"] {
		padding: 8px 12px;
		border: var(--border);
		border-radius: var(--corners);
		background-color: var(--paper);
		font-size: 16px;
		max-width: 400px;

		&:focus {
			background-color: var(--paper-accent);
		}
	}

	.input-container {
		display: flex;
		gap: 12px;

		&.row {
			align-items: center;
		}

		&.reverse {
			flex-direction: row-reverse;
			justify-content: flex-end;
		}

		&.column {
			flex-direction: column;
		}

		&.column.reverse {
			flex-direction: column-reverse;
			justify-content: flex-end;
		}
	}




</style>

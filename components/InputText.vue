<script  setup>

	const props = defineProps({
		inputType: String, //values: email, number, text, pw

		name: String, // used for: for, id, v-model
		label: String, //used for: label element

		required: Boolean,
		autocomplete: String, //values: on, off

		minlength: Number,
		maxlength: Number,
		pattern: String, //RegEx pattern

		helper: String, //put in the helper text here if you have any
		stackDetails: String, // direction: "column" or leave blank for row; order: "reverse" or leave blank for default
		
		//v-model -- put on the parent
	});

	const model = defineModel();

</script>

<template>
	<div class="input-container">
		<div class="input" :class="stackDetails">
			<label class="med-plus-voice" :for="name">{{label}}</label>
			<input
				:type="inputType"
				:id="name"
				:required="required"
				:autocomplete="autocomplete"
				:minlength="minlength"
				:maxlength="maxlength"
				:pattern="pattern"
				v-model="model"
			/>
		</div>
		<p v-if="helper" class="small-voice">{{helper}}</p>
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
		flex-direction: column;
		gap: 12px;
	}

	.input {
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

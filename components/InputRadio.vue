<script setup>

	const props = defineProps({
		title: String, //the question that accompanies the options
		name: String, //shared across all options
		options: {
			forId: String,
			value: String, //might be same as forId	
			label: String			
		}
	});

	const model = defineModel();

</script>

<template>
	<div class="radio-container">
		<h3 class="large-voice">{{title}}</h3>
		<div class="radio-options">
			<label :for="option.forId" v-for="option in props.options">
				<input
					type="radio"
					v-model="model"
					:value="option.value ?? option.forId"
					:id="option.forId"
					:name="name"
				/>{{option.label}}
			</label>
		</div>
	</div>
</template>

<style scoped>
	.radio-container {
		display: grid;
		gap: 8px;
	}

	.radio-options {
		display: grid;
		gap: 6px;
	}

	.radio-container + .radio-container {
		margin-top: 20px;
	}


</style>

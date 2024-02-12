<script  setup>
/*data
	"for" and "id" values
	label text
	v-model value
	required boolean
	type (text, email, password, number)
	autocomplete
	stack direction -- vert or horiz
	stack order -- default or reverse
*/

</script>

<template>
	<div class="input-container">
		<label class="large-voice" for="lat">Latitude</label>
		<input required id="lat" type="number"/>
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

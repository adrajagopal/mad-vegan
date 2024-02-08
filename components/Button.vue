<script setup>

	/* props
		submit boolean
		type (action, link) --> if link, drop in a RouterLink
			if link --> href
		style class
		copy

		



	*/
	


</script>

<template>
<button>Long text button name</button>
</template>

<style scoped>
	button {
/*		max-width: 150px;*/
		background-color: var(--color);
		color: white;
		font-size: 16px;
		font-weight: 600;
		text-wrap: nowrap;
		padding: 8px;
		border: var(--border);
		border-radius: var(--corners);

		&:hover {
			background-color: var(--color-light);
		}

		&:active {
			background-color: var(--color-dark);
		}

		cursor: pointer;

		&.warning {
			background-color: var(--warning);

			&:active {
				background-color: var(--warning-dark);
			}
		}
	}

</style>

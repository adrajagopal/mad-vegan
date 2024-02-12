<script setup>

	const props = defineProps({
		copy: String,
		btnType: String,
		isLink: Boolean,
		styleClass: String,
		linkHref: String,
		linkTarget: String
	});

</script>

<template>
	
	<NuxtLink
		class="button"
		v-if="isLink"
		:to="linkHref"
		:target="linkTarget"
	>
		{{copy}}
		<span v-if="linkTarget === `_blank`">--></span>
	</NuxtLink>

	<button
		v-else
		type="btnType"
	>
		{{copy}}
	</button>

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

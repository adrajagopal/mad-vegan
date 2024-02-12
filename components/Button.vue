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
		/* fallback if no props */
		background-color: var(--color);
		color: var(--paper);
		border: var(--border);

		&.fill.color {
			background-color: var(--color);
			color: var(--paper);
			border-color: var(--ink);

			&:hover {
				background-color: var(--color-light);
			}
		}

		&.fill.paper {
			background-color: var(--paper-accent);
			color: var(--ink);
			border-color: var(--ink);

			&:hover {
				background-color: var(--paper);
			}



		}

		&.transparent {
			background-color: transparent;
			border: 2px solid transparent;

			&.color {
				color: var(--color);
			}

			&.ink {
				color: var(--ink);
			}

		}

		&:active {
			filter: opacity(50%);
		}

		&.warning {
			background-color: var(--warning);

			&:active {
				background-color: var(--warning-dark);
			}
		}
	}

</style>

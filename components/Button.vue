<script setup>

	const props = defineProps({
		copy: String,
		btnType: String,
		isLink: Boolean,
		linkHref: String,
		linkTarget: String
	});

	/* 
		style should be defined on the component parent -- <Button /> -- like a normal CSS class
		options are:
		**** style like a button: .fill.color, .fill.paper
		**** style like a link: .transparent.color, .transparent.ink
	*/

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
		min-width: 180px;
	}

	.button.fill {
		min-width: 100px;
	}

	button, .button {
		cursor: pointer;
		justify-self: start; /* since i make buttons display: block, this prevents it from spanning full width of parent*/
		font-size: 16px;
		font-weight: 600;
		text-wrap: nowrap;
		text-align: center;
		text-decoration: none;
		padding: 8px;
		border-radius: var(--corners);

		/* fallback if no props */
		background-color: var(--color);
		color: var(--paper);
		border: var(--border);

		&.fill {
			color: var(--ink);
			border-color: var(--ink);

			&.color {
				background-color: var(--color);

				&:hover {
					background-color: var(--color-light);
				}
			}

			&.paper {
				background-color: var(--paper-accent);

				&:hover {
					background-color: var(--paper);
				}
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
			filter: brightness(50%);
		}

		&.warning {
			background-color: var(--warning);

			&:active {
				background-color: var(--warning-dark);
			}
		}
	}

</style>

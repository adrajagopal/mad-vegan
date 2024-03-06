<script setup>

	const props = defineProps({
		copy: String,
		btnType: String,
		isLink: Boolean,
		linkHref: String,
		linkTarget: String,
		state: String //options: default, loading, success
	});

	const btnDisabled = computed(() => {
		return props.state === "loading" ? true : false;
	})

	// this might be a good area to think about "watch" to see when the state changes and run gsap functions to start and stop animations

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
		:class="state"
		:disabled="btnDisabled"
	>
		<!-- can't use flexbox on buttons (I don't think / officially) / but you can put a child div and put flex on that - (if you need to layout content in here) -->
		<!-- <div class="position"></div> -->

		{{copy}} <!-- probably put this in a span or div or something -->
		<div v-if="state === 'loading'" class="loader"></div>
	</button>

</template>

<style scoped>

	/*	size */
	button {
		min-width: 180px;
	}

	.button.fill {
		min-width: 100px;
	}

	button, .button {
		cursor: pointer;
		justify-self: start; /* since i make buttons display: block, this prevents it from spanning full width of parent*/
		font-size: 16px; /* should be 1rem */
		font-weight: 600;
		text-wrap: nowrap;
		text-align: center;
		text-decoration: none;
		padding: 8px; /* should probably be em */
		border-radius: var(--corners);

		/* fallback if no props */
		background-color: var(--color);
		color: var(--paper);
		border: var(--border);

		/* variants */
		&.fill { /* should fill just be the default??? */
			color: var(--ink);
			border-color: var(--ink);

			&.color {
				background-color: var(--color);

				&:not(.loading):hover {
					background-color: var(--color-light);
				}
			}

			&.paper {
				background-color: var(--paper-accent);

				&:not(.loading):hover {
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

		&:not(.loading):active {
			filter: brightness(50%);
		}

		&.warning {
			background-color: var(--warning);

			&:active {
				background-color: var(--warning-dark);
			}
		}

		&.loading {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 12px;
			cursor: auto;
			filter: grayscale(50%);

			& .loader {
				border: 5px double var(--ink);
				border-radius: 25%;
				width: 1.1rem;
				height: 1.1rem;
				animation: spin 1s linear infinite;
			}
		}
	}

	@keyframes spin {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}

</style>

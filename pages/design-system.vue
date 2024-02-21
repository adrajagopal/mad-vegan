<script setup>
	
	const questions = [
		{
			title: "Please select a diet option",
			name: "diet",
			options: [
				{
					forId: "vegan",
					value: "vegan",
					label: "Vegan"
				},
				{
					forId: "vegetarian",
					label: "Vegetarian"
				},
				{
					forId: "meat",
					value: "meatatarian",
					label: "Omnivore",
					checked: true
				}
			]
		},
		{
			title: "What's your favorite cuisine?",
			name: "cuisinePreference",
			options: [
				{
					forId: "italian",
					value: "italian",
					label: "Italian"
				},
				{
					forId: "mexican",
					label: "Mexican"
				},
				{
					forId: "indian",
					value: "indian",
					label: "Indian",
					checked: true
				}
			]
		}
	];

</script>

<template>
	<inner-column>
	<form>
		<section class="radios">
			<h2 class="xl-voice">Radio buttons</h2>
			<div class="radio-parent" style="display: grid; gap: 6px">
				<InputRadio
					v-for="question in questions"
					:title="question.title"
					:name="question.name"
					:options="question.options"
				/>
			</div>
		</section>

		<section class="inputs">
			<h2 class="xl-voice">Text inputs</h2>
			<InputText
				inputType="number"
				forId="numberValue"
				:required="false"
				label="USD"
				stackDetails="row reverse"
			/>
			<InputText
				inputType="text"
				forId="textValue"
				:required="false"
				label="Short Text"
				stackDetails="row"
				defaultVal="hi there"

			/>

			<InputText
				inputType="email"
				forId="emailValue"
				:required="false"
				label="Email Address"
				autcomplete="off"
				stackDetails="column"
			/>

			<InputText
				inputType="password"
				forId="passValue"
				:required="false"
				label="Password"
				autcomplete="off"
				stackDetails="column"
				helper="Passwords must be just long and complicated enough that you can't remember them"
			/>
		</section>
		

		<section class="buttons">
			<h2 class="xl-voice">Buttons</h2>
			<Button
				copy="Submit"
				class="fill color"
			/>
			<Button
				copy="Create Account"
				class="fill paper"
			/>
			<Button
				copy="Visit page"
				:isLink="true"
				linkHref="https://adrajagopal.com"
				linkTarget="_blank"
				class="transparent color"
			/>
			<Button
				copy="Read more"
				:isLink="true"
				linkHref="https://adrajagopal.com"
				linkTarget="_blank"
				class="transparent ink"
			/>
		</section>

	</form>
	</inner-column>
</template>

<style scoped>
	section {
		display: grid;
		gap: 20px;
		padding: 12px;
		border: var(--border);
	}
	
	.inputs {
		gap: 30px;
	}

	.buttons {
		grid-template-columns: 1fr 1fr;

		& h2 {
			grid-column: span 2;
		}

		@media (max-width: 450px) {
			grid-template-columns: 1fr;

			& h2 {
				grid-column: unset;
			}
		}
	}


</style>

<script setup></script>

<template>
	<inner-column>
	<form>
		<!-- <InputRadio/> -->

		<section class="inputs">
			<h2 class="xl-voice">Text inputs</h2>
			<InputText
				inputType="number"
				name="numberValue"
				:required="false"
				label="USD"
				stackDetails="row reverse"
			/>
			<InputText
				inputType="text"
				name="textValue"
				:required="false"
				label="Short Text"
				stackDetails="row"
			/>

			<InputText
				inputType="email"
				name="emailValue"
				:required="false"
				label="Email Address"
				autcomplete="off"
				stackDetails="column"
			/>

			<InputText
				inputType="password"
				name="passValue"
				:required="false"
				label="Password"
				autcomplete="off"
				stackDetails="column"
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
</style>

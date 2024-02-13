<script setup></script>

<template>
	<inner-column>
		<!-- <InputCheckbox/> -->
		<!-- <InputRadio/> -->
		<!-- <InputText/> -->
		

		<section>
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

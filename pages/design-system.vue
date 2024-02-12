<script setup></script>

<template>
	<inner-column>
		<form>
			<!-- <InputCheckbox/> -->
			<!-- <InputRadio/> -->
			<!-- <InputText/> -->
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

		</form>




	</inner-column>
</template>

<style scoped></style>

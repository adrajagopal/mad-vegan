<script></script>
<template>
	<div class="searchBar">
		<form>
			<input type="text" placeholder="Find a spot" />
			<div class="dropdown">
				<select name="cuisines" id="cuisine-select">
					<option value="one">Select a Cuisine</option>
					<option value="one">one</option>
					<option value="two">two</option>
					<option value="three">three</option>
				</select>
			</div>

			<div class="options">
				<div class="option">
					<input id="openNow" type="checkbox" />
					<label for="openNow">Open Now</label>
				</div>
			</div>
		</form>
	</div>
</template>
<style scoped>
.searchBar form {
	display: flex;
	gap: 10px;
	align-items: center;

	& .option {
		display: flex;
		align-items: center;
		gap: 4px;
	}
}
</style>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import SearchBar from "@/components/SearchBar.vue";
</script>
<template>
	<div class="site-header">
		<picture class="logo">
			<img alt="VM logo" src="@/assets/logo.svg" />
		</picture>

		<!-- <div class="wrapper">
			<nav>
				<RouterLink to="/">Home</RouterLink>
				<RouterLink to="/add-restaurant">Add restaurant</RouterLink>
			</nav>
		</div> -->

		<div class="wrapper">
			<SearchBar />
		</div>
	</div>
</template>

<style scoped>
.site-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 25px;

	& nav {
		display: flex;
		gap: 10px;
	}
}

.logo {
	width: 32px;
}
</style>

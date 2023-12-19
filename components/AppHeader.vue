<script setup>
import { RouterLink, RouterView } from "vue-router";

</script>
<template>
	<inner-column>
		<div class="site-header">
			<RouterLink to="/">
				<picture class="logo">
					<img alt="VM logo" src="@/assets/logo.svg" />
				</picture>
			</RouterLink>
		
			<div class="wrapper" >
				<nav>
					<RouterLink to="/">Home</RouterLink>
					<RouterLink to="/add-restaurant">Add restaurant</RouterLink>
					<SignOut/>
				</nav>
			</div>
		
		</div>
	</inner-column>
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
		align-items: center;
	}
}

.logo {
	width: 32px;
}
</style>

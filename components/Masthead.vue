<script setup>
import { RouterLink, RouterView } from "vue-router";
const user = useUserStore();
const route = useRoute();

</script>
<template>
	<div v-if="user.loggedIn" class="site-header">
		<div class="navWrapper">
			<RouterLink to="/">
				<picture class="logo">
					<img alt="VM logo" src="@/assets/logo.svg" />
				</picture>
			</RouterLink>
			<nav>
				<RouterLink to="/about">About</RouterLink>
				<RouterLink to="/add-restaurant">Add restaurant</RouterLink>
			</nav>
		</div>
		
		<div class="actionsWrapper" >
			<ProfileBadge/>
			<SignOut/>
		</div>
	</div>

	<div v-else class="site-header">
		
		<div class="navWrapper">
			<RouterLink to="/">
				<picture class="logo">
					<img alt="VM logo" src="@/assets/logo.svg" />
				</picture>
			</RouterLink>
			<RouterLink to="/about">About</RouterLink>
		</div>


		<div class="actionsWrapper" >
			<nav>
				<Button
					v-if="route.name !== 'sign-in'"
					:isLink="true"
					linkHref="/sign-in"
					copy="Sign In"
					class="fill color"
				/>
				<Button
					v-if="route.name !== 'create-account'"
					:isLink="true"
					linkHref="/create-account"
					copy="Create Account"
					class="transparent color"
				/>
			</nav>
		</div>
	</div>
</template>

<style scoped>
.site-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 25px;
	min-height: 40px;

	a, button, button a {
		text-decoration: none;
		font-size: 0.8rem;
		font-weight: 600;
	}

	& nav {
		display: flex;
		gap: 10px;
		align-items: center;
	}

	button, .button {
		min-width: 100px;
	}
}

.logo {
	width: 32px;
}

.navWrapper, .actionsWrapper, .actionsWrapper nav {
	display: flex;
	gap: 12px;
	align-items: center;
}
</style>

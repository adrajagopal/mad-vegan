<script setup>
// adrajagopal@gmail.com
// Bonk123

	const supabase = useSupabaseClient();

	async function signOut() {
	const { error } = await supabase.auth.signOut();

	if (error) {
		console.log('signout error!');
		return;
	};

	await navigateTo('/sign-in');
	}

</script>

<template>
	<Button
		@click="signOut()"
		btnType="button"
		copy="Sign Out"
		class="transparent color"
	/>
</template>

<style scoped></style>

<script setup>
	const supabase = useSupabaseClient()

	const { data, error } = await supabase
		.from('profiles')
		.select(`user_id, handle, eats_meat, eats_dairy, diet_category, eats_eggs, avatar, likes_imitation_meat`);

	const user = useUserStore();

	const id = user.id;

</script>

<template>
	{{data}}

</template>

<style scoped></style>

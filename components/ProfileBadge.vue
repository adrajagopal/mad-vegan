<script setup>
	const user = useUserStore();
	const profile = useProfileStore();
</script>

<template>
	<NuxtLink to="/profile" class="small-voice">{{user.email}}</NuxtLink>
</template>

<style scoped></style>

<script setup>
	const user = useUserStore();
	const profile = useProfileStore();
</script>

<template>
	<p class="small-voice">Sup, {{user.email}}?</p>
</template>

<style scoped></style>

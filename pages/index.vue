<script setup>
	
	const loader = useLoaderStore();

	onMounted( () => {
		return (loader.fullPage) && loader.toggleFullPageLoader();
	})

</script>

<template>
	<MapView/>
</template>

<style scoped></style>

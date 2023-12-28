<script setup>
	const loader = useLoaderStore();
</script>

<template>
	<FullPageLoader v-if="loader.fullPage"/>
	<header>
		<inner-column>
			<Masthead/>
		</inner-column>
	</header>
	
	<main>
		<NuxtPage/>
	</main>
	
	<footer>
		<inner-column>
			<SiteMap/>
		</inner-column>
	</footer>
</template>
<style></style>
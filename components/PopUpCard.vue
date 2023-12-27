<script setup>
	const props = defineProps({
		place: {
			type: Object,
			required: true,
		},
	});

	const { place } = props;

//	(`id, name, lat, long, website, cuisine, has_vegan_menu, is_completely_vegan`)
</script>

<template>
<div class="popup-card">
	<div class="title">
		<h1 class="large-voice">{{place.name}}</h1>
		<NuxtLink class="medium-voice" :to="place.website" target="_blank">Visit Website</NuxtLink>
	</div>
	<ul class="cuisines">
		<li v-for="(item, index) in place.cuisine" :key="index">
			{{item}}
		</li>
	</ul>
	<div class="toggles">
		<p class="small-voice" v-if="place.has_vegan_menu">✅ Vegan menu</p>
		<p class="small-voice" v-if="place.is_completely_vegan">✅ Completely vegan</p>
	</div>

</div>
</template>

<style scoped>
	.popup-card {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}


	.cuisines {
		display: flex;
		gap: 10px;

		& li {
			padding-right: 10px;
			border-right: 2px solid var(--color);
		}

		& li:last-child {
			border: none;
		}
	}

	.toggles {
		display: grid;
		gap: 8px;

		& p {
			margin: 0;
		}
	}
</style>

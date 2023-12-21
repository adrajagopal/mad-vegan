<script setup>
	const supabase = useSupabaseClient()

	const { data, error } = await supabase
  .from('restaurants')
  .select('name');

  console.log(data);
</script>

<template>
	<inner-column>
		<h1 class="xxl-voice">Restaurants list view</h1>

		<ul>
			<li v-for="place in data">
				<div class="restaurant-card">
					<h2 class="large-voice">{{place.name}}</h2>
				</div>
			</li>
		</ul>
	</inner-column>
</template>

<style scoped>
	.restaurant-card {
		padding: 8px;
		border: 2px solid var(--ink);
	}
</style>

<script setup>
	const supabase = useSupabaseClient()

	const { data, error } = await supabase
		.from('restaurants')
		.select(`id, name, lat, long, website, cuisine, has_vegan_menu, is_completely_vegan`);


	let iconUrl = "https://ucxtdreexegztsldmyjv.supabase.co/storage/v1/object/public/media-library/pindrop-green-dark-gradient.svg?t=2023-12-27T04%3A36%3A59.120Z";
	let iconSize = [34, 41];
	let iconAnchor = [17, 41];

</script>

<template>
	<div id="map" style="height:100vh; width:100vw">
		<LMap
			ref="map"
			:zoom="13"
			:center="[43.09229276307855, -89.38413717048415]"
		>
			<LTileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
				layer-type="base"
				name="OpenStreetMap"
			/>
			<ul>
				<li v-for="place in data">
					<LMarker :lat-lng="[place.lat, place.long]">
						<LPopup>{{place.name}}</LPopup>
						<LIcon :icon-url="iconUrl" :icon-size="iconSize" :icon-anchor="iconAnchor"/>
					</LMarker>
				</li>
			</ul>
		</LMap>
	</div>
</template>

<style scoped></style>

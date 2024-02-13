<script setup>
	const supabase = useSupabaseClient()

	const { data, error } = await supabase
		.from('restaurants')
		.select(`id, name, lat, long, website, cuisine, has_vegan_menu, is_completely_vegan`);

	let iconUrl = "https://ucxtdreexegztsldmyjv.supabase.co/storage/v1/object/public/media-library/pindrop-rutabaga-gradient.svg?t=2024-02-06T20%3A27%3A04.802Z";
	
	const iconWidth = 34;
	const iconHeight = 41;
	let iconSize = [iconWidth, iconHeight];
	let iconAnchor = [0.5*iconWidth, iconHeight];

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
						<LIcon :icon-url="iconUrl" :icon-size="iconSize" :icon-anchor="iconAnchor"/>
						<LPopup><PopUpCard :place="place" :key="place.id"/></LPopup>
					</LMarker>
				</li>
			</ul>
		</LMap>
	</div>
</template>

<style>
	.leaflet-popup-pane, .leaflet-popup-pane * {
		max-width: unset;
	}

	.leaflet-popup-content-wrapper {
		border-radius: var(--corners);
		padding: 8px;
		background-color: var(--paper);
	}

	.leaflet-popup-tip {
		background-color: var(--paper);
	}

	div.leaflet-control-zoom.leaflet-bar {
/*		border: var(--border);*/
		border-color: var(--color);

		a.leaflet-control-zoom-in,
		a.leaflet-control-zoom-out {
			color: var(--white);
			border-color: var(--white);
			text-decoration: none;
			background-color: var(--color);
			border-radius: 0px;
		}
	}

</style>

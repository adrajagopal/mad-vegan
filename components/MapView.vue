<script setup></script>

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
				<LMarker
					:lat-lng="[43.092244520961515, -89.3555199355821]"
				></LMarker>
			</LMap>
	</div>
</template>

<style scoped></style>

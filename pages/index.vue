<script setup></script>

<template>
	<main>
		<div style="height:100vh; width:100vw">
		    <LMap
		      ref="map"
		      :zoom="13"
		      :center="[43.07485907699501, -89.38413717048415]"
		    >
			    <LTileLayer
			      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
		        attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
		        layer-type="base"
		        name="OpenStreetMap"
		      />
		      <LMarker
		      	:lat-lng="[43.0924168968808, -89.35550384616374]"
		      ></LMarker>
		    </LMap>
		</div>
	</main>
</template>

<style>

</style>

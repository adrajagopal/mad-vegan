<script setup>

	const avatars = [
		{
			forId: "default-avatar",
			src: "default-avatar.jpg",
			imgAlt: "pink-green gradient",
			checked: true
		},
		{
			forId: "tofu",
			src: "tofu.jpg",
			imgAlt: "a gaggle of fried tofu on a plate",
			checked: false
		},
		{
			forId: "cilantro",
			src: "cilantro.jpg",
			imgAlt: "a carefree bunch of cilantro, floating in the air",
			checked: false
		}
	];

	// const props = reactive({

	// });
	
	const model = defineModel();

</script>

<template>
	<h3 class="med-plus-voice">Choose an avatar</h3>
	<div class="photo-container">
		<div class="option photo" v-for="avatar in avatars">
			<label :for="avatar.forId">
				<picture>
					<NuxtImg
						:src="avatar.src"
						:alt="avatar.imgAlt"
					/>
				</picture>
				<input
					:id="avatar.forId"
					type="radio"
					:value="avatar.forId"
					v-model="model"
					name="avatar"
					:checked="avatar.checked"
				/>
			</label>
		</div>
	</div>
</template>

<style scoped></style>

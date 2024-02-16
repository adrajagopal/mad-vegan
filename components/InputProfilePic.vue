<script setup></script>

<template>
	<h3 class="med-plus-voice">Choose an avatar</h3>
	<div class="photo-container">
		<div class="option photo">
			<label for="default-avatar">
				<picture>
					<img src="@/assets/default-avatar.jpg" alt="orange green gradient">
				</picture>
				<input
					id="default-avatar"
					type="radio"
					value="default-avatar"
					v-model="form.avatar"
					name="avatar"
					checked
				/>
			</label>
		</div>
		
		<div class="option photo">
			<label for="tofu">
				<picture>
					<img src="@/assets/tofu.jpg" alt="a gaggle of tofu">
				</picture>
				<input
					id="tofu"
					type="radio"
					value="tofu"
					name="avatar"
					v-model="form.avatar"
				/>
			</label>
		</div>
		
		<div class="option photo">
			<label for="cilantro">
				<picture>
					<img src="@/assets/cilantro.jpg" alt="a bunch of cilantro">
				</picture>
				<input
					id="cilantro"
					type="radio"
					value="cilantro"
					name="avatar"
					v-model="form.avatar"
				/>
			</label>
		</div>
	</div>
</template>

<style scoped></style>

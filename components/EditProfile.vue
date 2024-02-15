<script setup>
	const user = useUserStore();

	const id = user.id;

	const supabase = useSupabaseClient()

	const { data, error } = await supabase
		.from('profiles')
		.select(`user_id, handle, eats_meat, eats_dairy, diet_category, eats_eggs, avatar, likes_imitation_meat`)
		.eq('user_id', id);


	const form = reactive({
		handle: data.handle ?? '',
		eats_meat: data.eats_meat ?? '',
		eats_dairy: data.eats_dairy ?? '',
		diet_category: data.diet_category ?? '',
		eats_eggs: data.eats_eggs ?? '',
		avatar: data.avatar ?? '',
		likes_imitation_meat: data.likes_imitation_meat ?? '',
		errorMessage: null,
	});

	async function submit() {

		if (!form.handle || !form.diet_category || !form.eats_meat || !form.eats_dairy || !form.eats_eggs || !form.likes_imitation_meat || !form.avatar) {
			form.errorMessage = 'Please fill out all profile fields.';
			return;
		}

		const { error } = await supabase
			.from('profiles')
			.update({
				handle: form.handle,
				eats_meat: form.eats_meat,
				eats_dairy: form.eats_dairy,
				eats_eggs: form.eats_eggs,
				diet_category: form.diet_category,
				likes_imitation_meat: form.likes_imitation_meat,
				avatar: form.avatar,
			})
			.eq('user_id', id)
	}

</script>

<template>

<form @submit.prevent="submit()">
	<section>
		<h2 class="xl-voice">Your identity</h2>
		<div class="question">
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
		</div>

		<div class="question">
			<label class="med-plus-voice" for="handle">Pick a username</label>
			<input
				id="handle"
				type="text"
				maxlength="16"
				pattern="[a-zA-Z0-9_]{0,15}"
				v-model="form.handle"
			/>
			<p class="small-voice">Usernames must be 16 characters or less, and must contain only letters, numbers and underscores.</p>
		</div>

		<div class="question">
			<p class="med-plus-voice">What best describes your diet? We'll get more specific next.</p>
			<div class="option">
				<label for="vegan">
					<input
						id="vegan"
						type="radio"
						value="vegan"
						name="diet_category"
						v-model="form.diet_category"
					/>Vegan
				</label>
			</div>


			<div class="option">
				<label for="vegetarian">
					<input
						id="vegetarian"
						type="radio"
						value="vegetarian"
						name="diet_category"
						v-model="form.diet_category"
					/>Vegetarian
				</label>
			</div>

			<div class="option">
				<label for="other">
					<input
						id="other"
						type="radio"
						value="other"
						name="diet_category"
						v-model="form.diet_category"
					/>Other
					<input type="text" id="other_text">
				</label>
			</div>
		</div>
	</section>

	<section>
		<h2 class="xl-voice">Diet Details</h2>
		<div class="question">
			<p class="med-plus-voice">Do you eat meat?</p>
			<div class="option">
				<input
					id="meat_1"
					type="radio"
					value="1"
					v-model="form.eats_meat"
					name="eats_meat"
				/>
				<label for="meat_1">Yes</label>
			</div>
			<div class="option">
				<input
					id="meat_0"
					type="radio"
					value="0"
					v-model="form.eats_meat"
					name="eats_meat"
				/>
				<label for="meat_0">No</label>
			</div>
		</div>

		<div class="question">
			<p class="med-plus-voice">Do you eat dairy?</p>
			<div class="option">
				<input
					id="dairy_1"
					type="radio"
					value="1"
					name="eats_dairy"
					v-model="form.eats_dairy"
				/>
				<label for="dairy_1">Yes</label>
			</div>
			<div class="option">
				<input
					id="dairy_0"
					type="radio"
					value="0"
					name="eats_dairy"
					v-model="form.eats_dairy"
				/>
				<label for="dairy_0">No</label>
			</div>
		</div>

		<div class="question">
			<p class="med-plus-voice">Do you eat eggs?</p>
			<div class="option">
				<input
					id="eggs_1"
					type="radio"
					value="1"
					name="eats_eggs"
					v-model="form.eats_eggs"
				/>
				<label for="eggs_1">Yes</label>
			</div>
			<div class="option">
				<input
					id="eggs_0"
					type="radio"
					value="0"
					name="eats_eggs"
					v-model="form.eats_eggs"
				/>
				<label for="eggs_0">No</label>
			</div>
		</div>

		<div class="question">
			<p class="med-plus-voice">Do you like imitation meats, or would you rather just have your vegan proteins as they are?</p>
			<div class="option">
				<input
					id="imitation_meat_1"
					type="radio"
					value="1"
					name="likes_imitation_meat"
					v-model="form.likes_imitation_meat"
				/>
				<label for="imitation_meat_1">Yep. Bring on the chik'n and Beyond burgers</label>
			</div>
			<div class="option">
				<input
					id="imitation_meat_0"
					type="radio"
					value="0"
					name="likes_imitation_meat"
					v-model="form.likes_imitation_meat"
				/>
				<label for="imitation_meat_0">Nope. Just be beans and tofu</label>
			</div>
		</div>
	</section>
	

	

	<Button
		btnType="submit"
		copy="Save Profile"
		styleClass="fill paper"
	/>
</form>

<p class="success" v-if="form.successMessage">
	{{ form.successMessage }}
</p>

<p class="error" v-if="form.errorMessage">
	{{ form.errorMessage }}
</p>

</template>

<style scoped></style>

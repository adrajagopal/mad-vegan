<script setup>
	const supabase = useSupabaseClient()

	const { data, error } = await supabase
		.from('profiles')
		.select(`user_id, handle, eats_meat, eats_dairy, diet_category, eats_eggs, avatar, likes_imitation_meat`);

	const user = useUserStore();

	const id = user.id;

	const form = reactive({
		handle: '',
		eats_meat: '',
		eats_dairy: '',
		diet_category: '',
		eats_eggs: '',
		avatar: '',
		likes_imitation_meat: '',
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
	<div class="question">
		<label for="handle">Pick a username</label>
		<input
			id="handle"
			type="text"
			maxlength="16"
			v-model="form.handle"
		/>
	</div>

	<div class="question">
		<p>What best describes your diet? We'll get more specific next.</p>
		<div class="option">
			<input
				id="diet_category"
				type="radio"
				value="vegan"
				v-model="form.diet_category"
			/>
			<label for="diet_category">Vegan</label>
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
		<div class="option">
			<input
				id="diet_category"
				type="radio"
				value="vegetarian"
				v-model="form.diet_category"
			/>
			<label for="diet_category">Vegetarian</label>
		</div>
		<div class="option">
			<input
				id="diet_category"
				type="radio"
				value="other"
				v-model="form.diet_category"
			/>
			<label for="diet_category">Other</label>
		</div>

	</div>	

	<div class="question">
		<p>Do you eat meat?</p>
		<div class="option">
			<input
				id="eats_meat"
				type="radio"
				value="1"
				v-model="form.eats_meat"
			/>
			<label for="eats_meat">Yes</label>
		</div>
		<div class="option">
			<input
				id="eats_meat"
				type="radio"
				value="0"
				v-model="form.eats_meat"
			/>
			<label for="eats_meat">No</label>
		</div>
	</div>

	<div class="question">
		<p>Do you eat dairy?</p>
		<div class="option">
			<input
				id="eats_dairy"
				type="radio"
				value="1"
				v-model="form.eats_dairy"
			/>
			<label for="eats_dairy">Yes</label>
		</div>
		<div class="option">
			<input
				id="eats_dairy"
				type="radio"
				value="0"
				v-model="form.eats_dairy"
			/>
			<label for="eats_dairy">No</label>
		</div>
	</div>

	<div class="question">
		<p>Do you eat eggs?</p>
		<div class="option">
			<input
				id="eats_eggs"
				type="radio"
				value="1"
				v-model="form.eats_eggs"
			/>
			<label for="eats_eggs">Yes</label>
		</div>
		<div class="option">
			<input
				id="eats_eggs"
				type="radio"
				value="0"
				v-model="form.eats_eggs"
			/>
			<label for="eats_eggs">No</label>
		</div>
	</div>

	<div class="question">
		<p>Do you like imitation meats, or would you rather just have your vegan proteins as they are?</p>
		<div class="option">
			<input
				id="likes_imitation_meat"
				type="radio"
				value="1"
				v-model="form.likes_imitation_meat"
			/>
			<label for="likes_imitation_meat">Yep. Bring on the chik'n and Beyond burgers</label>
		</div>
		<div class="option">
			<input
				id="likes_imitation_meat"
				type="radio"
				value="0"
				v-model="form.likes_imitation_meat"
			/>
			<label for="likes_imitation_meat">Nope. Just be beans and tofu</label>
		</div>
	</div>


	<button type="submit">Submit</button>
</form>

<p class="success" v-if="form.successMessage">
	{{ form.successMessage }}
</p>

<p class="error" v-if="form.errorMessage">
	{{ form.errorMessage }}
</p>

</template>

<style scoped></style>

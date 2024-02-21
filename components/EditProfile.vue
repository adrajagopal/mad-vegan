<script setup>
	const user = useUserStore();

	const id = user.id;

	const supabase = useSupabaseClient()

	const { data, error } = await supabase
		.from('profiles')
		.select(`user_id, handle, eats_meat, eats_dairy, diet_category, eats_eggs, avatar, likes_imitation_meat`)
		.eq('user_id', id);

	const form = reactive({
		...data[0],
		errorMessage: null,
	});

	async function submit() {

		// if (!form.handle || !form.diet_category || !form.eats_meat || !form.eats_dairy || !form.eats_eggs || !form.likes_imitation_meat || !form.avatar) {
		// 	form.errorMessage = 'Please fill out all profile fields.';
		// 	return;
		// }

		const { error } = await supabase
			.from('profiles')
			.update({ // make it so that you can just pass in the whole form obj
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


	const dietQuestion = {
		title: "What best describes your diet? We'll get more specific next.",
		name: "diet_category",
		options: [
			{
				forId: "vegan",
				label: "Vegan"
			},
			{
				forId: "vegetarian",
				label: "Vegetarian"
			},
			{
				forId: "other_diet",
				label: "Other"
			}
		]
	};

	const dietBinaryQuestions = [
		{
			title: "Do you eat meat?",
			name: "eats_meat",
			options: [
				{
					forId: "meat_1",
					value: "true",
					label: "Yes"
				},
				{
					forId: "meat_0",
					value: "false",
					label: "No"
				}
			]
		},
		{
			title: "Do you eat dairy?",
			name: "eats_dairy",
			options: [
				{
					forId: "dairy_1",
					value: "true",
					label: "Yes"
				},
				{
					forId: "dairy_0",
					value: "false",
					label: "No"
				}
			]
		},
		{
			title: "Do you eat eggs?",
			name: "eats_eggs",
			options: [
				{
					forId: "eggs_1",
					value: "true",
					label: "Yes"
				},
				{
					forId: "eggs_0",
					value: "false",
					label: "No"
				}
			]
		},
		{
			title: "Do you like imitation meats, or would you rather just have your vegan proteins as they are?",
			name: "likes_imitation_meat",
			options: [
				{
					forId: "imitation_meat_1",
					value: "true",
					label: "Yep. Bring on the chik'n and Beyond burgers"
				},
				{
					forId: "imitation_meat_0",
					value: "false",
					label: "Nope. Just be beans and tofu"
				}
			]
		}
	];

</script>

<template>

<form @submit.prevent="submit()">
	<pre>{{data}}</pre>
	<pre>{{form}}</pre>
	<section>
		<h2 class="xl-voice">Your identity</h2>
		<div class="question">
			<InputProfilePic
				v-model="form.avatar"
			/>
		</div>

		<InputText
			inputType="text"
			forId="handle"
			:required="true"
			label="Pick a username"
			stackDetails="column"
			v-model="form.handle"
			:minlength="3"
			:maxlength="16"
			pattern="[a-zA-Z0-9_]{0,15}"
			helper="Usernames must be 3-16 characters, containing only letters, numbers and underscores."
		/>

		<div class="question">
			<InputRadio
				:title="dietQuestion.title"
				:name="dietQuestion.name"
				:options="dietQuestion.options"
				v-model="form.diet_category"
			/>
		</div>
	</section>

	<section>
		<h2 class="xl-voice">Diet Details</h2>
		<InputRadio
			v-for="question in dietBinaryQuestions"
			:title="question.title"
			:name="question.name"
			:options="question.options"
			v-model="form[question.name]"
		/>
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

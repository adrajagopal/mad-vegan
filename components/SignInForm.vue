<script setup>
	const supabase = useSupabaseClient();

	const loader = useLoaderStore();

	const form = reactive({
	 email: '',
	 password: '',
	 successMessage: '',
	 errorMessage: '',
	});

	async function signIn() {
		form.successMessage = '';
		form.errorMessage = '';

		const { data, error } = await supabase.auth.signInWithPassword({
		  email: form.email,
		  password: form.password,
		});

		if (error) {
			switch(error.toString()) {
				case 'AuthApiError: Invalid login credentials':
					form.errorMessage = "The email or password you entered was invalid.";
					break;
				case 'AuthApiError: Email not confirmed':
					form.errorMessage = "Please confirm your email before you sign in.";
					break;
				default: "An error occurred. Please try again or contact us.";
			}
					
			console.log('signInWithPassword: ', error);

			return form.errorMessage;
		}

		form.successMessage = "Logging you in now!";
	}

	async function submit() {
		if (form.email && form.password) {
			await signIn();

			if (form.successMessage) {
				loader.toggleFullPageLoader();

				await delay(3000);
				await navigateTo('/');
			}
		}
	}

</script>

<template>
	<form @submit.prevent="submit()">
		<InputText
			inputType="email"
			forId="email"
			label="Email Address"
			autcomplete="off"
			stackDetails="column"
			v-model="form.email"
		/>

		<InputText
			inputType="password"
			forId="password"
			label="Password"
			autcomplete="off"
			stackDetails="column"
			v-model="form.password"
		/>

		<Button
			btnType="submit"
			copy="Sign In"
			styleClass="fill color"
		/>
	</form>

	<p class="success" v-if="form.successMessage">
		{{ form.successMessage }}
	</p>

	<p class="error" v-if="form.errorMessage">
		{{ form.errorMessage }}
	</p>
</template>

<style scoped>
	p.success {
		color: green;
	}

	p.error {
		color: red;
	}
</style>


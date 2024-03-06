<script setup>
	const supabase = useSupabaseClient();

	const loader = useLoaderStore();

	const form = reactive({
	 email: '',
	 password: '',
	 errorMessage: '',
	 isLoading: false,
	 success: false
	});

	const getBtnState = computed(() => {
		return form.isLoading ? "loading" : "default"
	});

	function resetFeedback() {
		form.errorMessage = '';
		form.success = false;
	}

	async function signIn() {
		form.successMessage = '';
		form.errorMessage = '';

		form.isLoading = true;
		await delay(1500);

		const { data, error } = await supabase.auth.signInWithPassword({
			email: form.email,
			password: form.password,
		});

		if (error) {
			form.isLoading = false;
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

		form.success = true;
		form.isLoading = false;
	}

	async function submit() {
		if (form.email && form.password) {
			await signIn();

			if (form.success) {
				loader.toggleFullPageLoader();

				await delay(2000);
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
			@input="resetFeedback()"
		/>

		<InputText
			inputType="password"
			forId="password"
			label="Password"
			autcomplete="off"
			stackDetails="column"
			v-model="form.password"
			@input="resetFeedback()"
		/>

		<FancyButton>
			Fancier version...
		</FancyButton>

		<Button
			btnType="submit"
			copy="Sign In"
			class="fill color"
			:state="getBtnState"
		/>
<!--      Sign In!  note--- you could use a slot here
	   </Button> -->
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


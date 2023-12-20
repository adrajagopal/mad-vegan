<script setup>
	const supabase = useSupabaseClient();
	const form = reactive({
	 email: 'adrajagopal@gmail.com',
	 password: 'Bonk123',
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
				//show loader

				await delay(3000);
				await navigateTo('/');
			}
		}
	}

</script>

<template>
	<form @submit.prevent="submit()">
		<div class="question">
			<label for="email">Email</label>
			<input
				id="email"
				type="email"
				v-model="form.email"
				autocomplete="off"
			/>
		</div>

		<div class="question">
			<label for="password">Password</label>
			<input
				id="password"
				type="password"
				v-model="form.password"
				autocomplete="off"
			/>
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

<style scoped>
	p.success {
		color: green;
	}

	p.error {
		color: red;
	}
</style>


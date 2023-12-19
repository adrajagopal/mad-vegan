<script setup>
	const supabase = useSupabaseClient();
	const form = reactive({
	 email: 'adrajagopal@gmail.com',
	 password: 'Bonk123',
	 successMessage: '',
	 errorMessage: '',
	});

	async function signIn() {
		const { data, error } = await supabase.auth.signInWithPassword({
		  email: form.email,
		  password: form.password,
		});

	   if (error) {
	     console.log('signInWithPassword', error);
	     form.errorMessage = error.message;
	   };
	   form.successMessage = `Logging you in now!`;
	}

	async function submit() {
	 if (form.email && form.password) {
	   await signIn();
	   form.successMessage = '';
	   form.errorMessage = '';
	   await navigateTo('/');
	 } else {
	   form.errorMessage = "Please enter a valid email address and password";
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
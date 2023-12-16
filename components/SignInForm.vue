<script setup>
	const supabase = useSupabaseClient();
	const form = reactive({
	 email: '',
	 password: '',
	 successMessage: '',
	 errorMessage: '',
	});

	function submit() {
	 if (form.email && form.password) {
	   signIn(form);
	   form.successMessage = '';
	   form.errorMessage = '';
	   return navigateTo('/');
	 } else {
	   form.errorMessage = "Please enter a valid email address and password";
	 }
	}

	async function signIn(form) {
	 try {
		const { data, error } = await supabase.auth.signInWithPassword({
		  email: form.email,
		  password: form.password,
		});

	   if (error) {
	     console.log('signInWithPassword', error);
	     form.errorMessage = error.message;
	   };
	   form.successMessage = `Logging you in now!`;
	 } catch (error) {
	   form.errorMessage = error.message;
	 }
	}
</script>

<template>
	<form @submit.prevent="submit()">
		<div class="field">
			<label for="email">Email</label>
			<input
				id="email"
				type="email"
				v-model="form.email"
				autocomplete="off"
			/>
		</div>

		<div class="field">
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
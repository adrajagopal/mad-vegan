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
      signUpWithEmail(form);
      form.successMessage = '';
      form.errorMessage = '';
    } else {
      form.errorMessage = "Please enter a valid email address and password";
    }
  }

  async function signUpWithEmail(form) {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: form.email,
        password: form.password,
      });
      if (error) {
        console.log('signUpWithEmail', error);
        form.errorMessage = error.message;
      } 
      form.successMessage = `Check your email and confirm you're real`;
    } catch (error) {
      form.errorMessage = error.message;
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

<style></style>

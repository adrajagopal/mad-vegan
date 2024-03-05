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
	{{form}}

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
			copy="Create Account"
			class="fill color"
		/>
	</form>

	<p class="success" v-if="form.successMessage">
		{{ form.successMessage }}
	</p>

	<p class="error" v-if="form.errorMessage">
		{{ form.errorMessage }}
	</p>
</template>

<style></style>

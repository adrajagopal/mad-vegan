<script setup>
  const supabase = useSupabaseClient();

  async function signOut() {
  	const { error } = await supabase.auth.signOut();

  	if (error) {
  		console.log('signout error!');
  	};
  }

</script>

<template>
  <button type='button' @click="signOut()">Sign Out</button>
</template>

<style scoped></style>

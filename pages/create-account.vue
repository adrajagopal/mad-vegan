<script setup></script>

<template>
  <inner-column>
    <h1 class="xxl-voice">Create account</h1>

    <CreateAccountForm/>

    <p>
      Already have an account?
      <NuxtLink to="/sign-in" class="medium-voice">
        Sign in.
      </NuxtLink>
    </p>
   </inner-column>
</template>

<style scoped></style>

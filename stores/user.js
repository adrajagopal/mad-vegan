export const useUserStore = defineStore('user', () => {

	const supaUser = useSupabaseUser();

	const email = computed( () => supaUser.value?.email); // (?.) is optional chaining operator. short circuits to undefined if next chain property isn't found
	const id = computed( () => supaUser.value?.id);
	const loggedIn = computed( () => supaUser.value?.id);

	return {
		email, id, loggedIn
	}

})
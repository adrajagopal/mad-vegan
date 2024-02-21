export const useProfileStore = defineStore('profile', () => {
	const user = useUserStore();
	const id = user.id;

	//this functionality needs to be wrapped in a fn
	// const supabase = useSupabaseClient()

	// const { data, error } = await supabase
	// 	.from('profiles')
	// 	.select(`user_id, handle, eats_meat, eats_dairy, diet_category, eats_eggs, avatar, likes_imitation_meat`)
	// 	.eq('user_id', id);

	// const avatar = ref(data.avatar);

	return {
		// avatar
	}

})
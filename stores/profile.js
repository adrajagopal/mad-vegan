export const useProfileStore = defineStore('profile', () => {
	const user = useUserStore();

	//this functionality needs to be wrapped in a fn
	const supabase = useSupabaseClient()

	async function getUserProfile() {
		const response = await supabase
			.from('profiles')
			.select(`user_id, handle, avatar, eats_meat, eats_dairy, diet_category, eats_eggs, likes_imitation_meat`)
			.eq('user_id', user.id)
			.single();


		console.log("response", response);
		return response;
		// console.log("error: " + error);
		// return error ? error : data;
	}



	return {
		getUserProfile
	}

})
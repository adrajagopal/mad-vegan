export const useLoaderStore = defineStore('loader', () => {

	let fullPage = ref(false);
	let bodyScrollDisabled = ref(false);

	function toggleFullPageLoader() {
		const body = document.querySelector('body');
		fullPage.value = !fullPage.value;
		bodyScrollDisabled.value = !bodyScrollDisabled.value;

		return bodyScrollDisabled.value === true ? body.classList.add('noScroll') :  body.classList.remove('noScroll');
	}

	return {
		fullPage, bodyScrollDisabled, toggleFullPageLoader
	}

})
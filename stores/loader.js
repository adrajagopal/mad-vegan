export const useLoaderStore = defineStore('loader', () => {

	let fullPage = ref(false);
	let bodyScroll = ref(false);
	// const body = document.querySelector('body');

	function toggleFullPageLoader() {
		fullPage = !fullPage;
		bodyScroll = !bodyScroll;

		return bodyScroll === true ? body.classList.add('noScroll') :  body.classList.remove('noScroll');
	}

	return {
		fullPage, bodyScroll, toggleFullPageLoader
	}

})
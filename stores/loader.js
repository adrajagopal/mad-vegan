export const useLoaderStore = defineStore('loader', () => {

	let fullPage = ref(false);
	let bodyScroll = ref(false);

	function toggleFullPageLoader() {
		const body = document.querySelector('body'); // PULL THIS OUT OF FN
		fullPage = !fullPage;
		bodyScroll = !bodyScroll;

		return bodyScroll === true ? body.classList.add('noScroll') :  body.classList.remove('noScroll');
	}

	return {
		fullPage, bodyScroll, toggleFullPageLoader
	}

})
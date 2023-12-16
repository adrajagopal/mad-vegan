// https://nuxt.com/docs/api/configuration/nuxt-config
import {fileURLToPath} from 'url';

export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: [
    ['@nuxtjs/google-fonts', {
        families: {
         'Inter': {
            wght: [100, 300, 400, 500, 600, 700],
            ital: '300..500',
          }
        }
    }],
    'nuxt3-leaflet',
    '@nuxtjs/supabase',
	],
	css: ['~/assets/css/site.css'],
	vue: {
	   compilerOptions: {
	      isCustomElement: function(tag) {
	         return [
	            'inner-column', 
	            'text-content'
	         ].includes(tag);
	      },
	   },
	},
	supabase: {
		redirectOptions: {
			login: '/sign-in',
			exclude: ['/create-account'],
		}
	}
})
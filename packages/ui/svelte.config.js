import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		package: {
			exports: (filepath) => {
				if (filepath.endsWith('.d.ts')) return false
				if (filepath.endsWith('.stories.svelte')) return false
				if (filepath.endsWith('.test.ts')) return false
				if (filepath.endsWith('.spec.ts')) return false
				return filepath
			},
			files: () => true
		},
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;

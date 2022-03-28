import { crx } from 'rollup-plugin-chrome-extension'
import { defineConfig } from 'vite'
import manifest from './manifest.json'

export default defineConfig({
	clearScreen: false,
	logLevel: 'error',
	plugins: [
		crx({
			manifest,
			contentScripts: {
				preambleCode: false
			}
		})
	],
	define: {
		'__HELLO_WORLD__': '"Hello, World!"'
	}
})

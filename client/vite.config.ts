import { purgeCss } from "vite-plugin-tailwind-purgecss"
import { sveltekit } from "@sveltejs/kit/vite"
import { defineConfig } from "vite"
import { visualizer } from "rollup-plugin-visualizer"

export default defineConfig({
	plugins: [visualizer(), sveltekit(), purgeCss()],
	build: {
		minify: true
	}
})

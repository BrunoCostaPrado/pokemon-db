import { sveltekit } from "@sveltejs/kit/vite"
import { visualizer } from "rollup-plugin-visualizer"
import { defineConfig } from "vite"
import { purgeCss } from "vite-plugin-tailwind-purgecss"

export default defineConfig({
  plugins: [visualizer(), sveltekit(), purgeCss()],
  build: {
    minify: true,
  },
})

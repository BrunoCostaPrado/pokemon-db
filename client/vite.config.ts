import { purgeCss } from "vite-plugin-tailwind-purgecss"
import { sveltekit } from "@sveltejs/kit/vite"
import { defineConfig } from "vite"

// import { join } from "path"
// import { partytownVite } from "@builder.io/partytown/utils"

export default defineConfig({
	plugins: [
		sveltekit(),
		purgeCss()
		// partytownVite({
		// 	dest: join(__dirname, "dist", "~partytown")
		// })
	]
})

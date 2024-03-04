import { defineConfig } from "vitest/config"

export default defineConfig({
	test: {
		coverage: {
			provider: "v8"
		},
		reporters: ["html", "verbose", "json"],
		outputFile: {
			html: "./out/html-report.html",
			json: "./out/json-report.json"
		}
	}
})

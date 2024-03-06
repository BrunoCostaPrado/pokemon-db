import { defineConfig, devices } from "@playwright/test"

// const config: PlaywrightTestConfig = {
// 	webServer: {
// 		command: "npm run build && npm run preview",
// 		port: 4173
// 	},
// 	testDir: "tests",
// 	testMatch: /(.+\.)?(test|spec)\.[jt]s/
// }

// export default config

export default defineConfig({
	projects: [
		/* Test against desktop browsers */
		{
			name: "chromium",
			use: { ...devices["Desktop Chrome"] }
		},
		{
			name: "firefox",
			use: { ...devices["Desktop Firefox"] }
		},
		{
			name: "webkit",
			use: { ...devices["Desktop Safari"] }
		}
	],
	testDir: "tests",
	reporter: [["html", { outputFolder: "tests/result" }]]
})

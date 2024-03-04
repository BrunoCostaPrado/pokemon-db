import * as esbuild from "esbuild"

import fs from "node:fs"

let result = await esbuild.build({
	entryPoints: ["src/app.ts"],
	bundle: true,
	outdir: "build/",
	minify: true,
	packages: "external",
	format: "esm",
	metafile: true,
	platform: "node",
	splitting: true,
	tsconfig: "tsconfig.json",
	sourcemap: true,
	minifyIdentifiers: true,
	minifySyntax: true
})

fs.writeFileSync("meta.json", JSON.stringify(result.metafile))
console.log(await esbuild.analyzeMetafile(result.metafile))

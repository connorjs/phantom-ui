import path from "node:path";
import { reactRouter } from "@react-router/dev/vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

const artifacts = path.join(import.meta.dirname, "artifacts");

export default defineConfig({
	base: "/phantom-ui/",

	build: {
		outDir: path.join(artifacts, "dist"),
	},

	cacheDir: path.join(artifacts, "vite"),

	css: {
		modules: {
			localsConvention: "dashesOnly",
		},

		preprocessorOptions: {
			scss: {
				api: "modern-compiler",
			},
		},
	},

	plugins: [
		vanillaExtractPlugin(),
		process.env.NODE_ENV !== "test" && reactRouter(),
		tsconfigPaths(),
	],

	test: {
		environmentMatchGlobs: [["**/*.tsx", "happy-dom"]],

		restoreMocks: true,

		reporters: [
			"dot",
			[
				"junit",
				{ outputFile: path.join(artifacts, "test-results", "junit.xml") },
			],
		],

		setupFiles: ["website/vitest-setup.ts"],

		coverage: {
			include: ["website/src"],
			exclude: [
				// React router files
				"**/src/entry.client.tsx",
				"**/src/root.tsx",
				"**/src/routes.tsx",
				"**/src/routes",
			],

			reporter: [
				["cobertura", { file: "cobertura.xml" }],
				["html", { subdir: "html" }],
				["text-summary"],
			],
			reportsDirectory: path.join(artifacts, "coverage"),

			thresholds: {
				branches: 80,
				functions: 80,
				lines: 80,
				perFile: true,
			},
		},
	},
});

declare global {
	// biome-ignore lint/style/noNamespace: External typing
	// biome-ignore lint/style/useNamingConvention: External name
	namespace NodeJS {
		interface ProcessEnv {
			// biome-ignore lint/style/useNamingConvention: External name
			NODE_ENV: "development" | "production" | "test";
		}
	}
}

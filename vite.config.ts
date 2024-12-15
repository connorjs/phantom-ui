import path from "node:path";
import { reactRouter } from "@react-router/dev/vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

const artifacts = "artifacts";
const coverage = path.join(artifacts, "coverage");
const testResults = path.join(artifacts, "test-results");

export default defineConfig({
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

	plugins: [vanillaExtractPlugin(), reactRouter(), tsconfigPaths()],

	test: {
		environmentMatchGlobs: [["**/*.tsx", "happy-dom"]],

		restoreMocks: true,

		reporters: [
			"dot",
			["junit", { outputFile: path.join(testResults, "junit.xml") }],
		],

		setupFiles: [path.join(import.meta.dirname, "vitest-setup.ts")],

		coverage: {
			include: ["**/src"],

			reporter: [
				["cobertura", { file: "cobertura.xml" }],
				["html", { subdir: "html" }],
			],
			reportsDirectory: coverage,

			thresholds: { branches: 80, functions: 80, lines: 80, perFile: true },
		},
	},
});

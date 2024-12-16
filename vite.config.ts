import path from "node:path";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react-swc";
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

	plugins: [vanillaExtractPlugin(), react(), tsconfigPaths()],

	root: "website",

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

		setupFiles: ["./vitest-setup.ts"],

		coverage: {
			include: ["**/src"],

			reporter: [
				["cobertura", { file: "cobertura.xml" }],
				["html", { subdir: "html" }],
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

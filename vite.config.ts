import path from "node:path";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

const artifacts = path.join(import.meta.dirname, "artifacts");

export default defineConfig({
	build: {
		outDir: path.join(artifacts, "dist"),
	},

	cacheDir: path.join(artifacts, "vite"),

	plugins: [react(), tsconfigPaths()],

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

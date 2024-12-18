import path from "node:path";
import { Project } from "ts-morph";
import { processSourceFile } from "./process-module.ts";
import { writeDocumentationModel } from "./write-documentation-model.ts";

// Environment constants
const workspaceRoot = path.resolve(
	import.meta.dirname, // kendo-docs
	"..", // tools
	"..", // workspace root
);
const nodeModulesPath = path.join(workspaceRoot, "node_modules");

// Create a project with no configuration
const project = new Project();

// Add our Kendo packages.
const moduleNames = ["indicators"];
const sourceFiles = moduleNames.map(
	(moduleName) =>
		[
			moduleName,
			project.addSourceFileAtPath(
				path.join(
					nodeModulesPath,
					"@progress",
					`kendo-react-${moduleName}`,
					"index.d.mts",
				),
			),
		] as const,
);

// Process each file
const documentationDictionaries = sourceFiles.map(
	([moduleName, sourceFile]) =>
		[moduleName, processSourceFile(sourceFile)] as const,
);

// Write each file
await Promise.all(
	documentationDictionaries.map(([moduleName, documentationDictionary]) =>
		writeDocumentationModel(
			project,
			path.join(workspaceRoot, "generated", "kendo-docs", `${moduleName}.js`),
			documentationDictionary,
		),
	),
);

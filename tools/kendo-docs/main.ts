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
const nodeModulesRoot = path.join(workspaceRoot, "node_modules");
const destinationRoot = path.join(
	workspaceRoot,
	"website",
	"generated-src",
	"kendo-docs",
);

// Create an empty project
const project = new Project({
	skipAddingFilesFromTsConfig: true,
});

// Add our Kendo packages.
const moduleNames = ["kendo-react-indicators"];
const sourceFiles = moduleNames.map(
	(moduleName) =>
		[
			moduleName,
			project.addSourceFileAtPath(
				path.join(nodeModulesRoot, "@progress", moduleName, "index.d.mts"),
			),
		] as const,
);

// Process each file
const documentationDictionaries = sourceFiles.map(
	([moduleName, sourceFile]) =>
		[moduleName, processSourceFile(sourceFile, moduleName)] as const,
);

// Write each file
await Promise.all(
	documentationDictionaries.map(([moduleName, documentationDictionary]) =>
		writeDocumentationModel(
			project,
			path.join(destinationRoot, `${moduleName}.ts`),
			documentationDictionary,
		),
	),
);

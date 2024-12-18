import type { Project } from "ts-morph";
import { ts } from "ts-morph";
import type { DocumentationDictionary } from "./types.ts";

export function writeDocumentationModel(
	project: Project,
	pathToWrite: string,
	documentationDictionary: DocumentationDictionary,
): Promise<void> {
	const file = project.createSourceFile(pathToWrite, "", {
		overwrite: true,
		scriptKind: ts.ScriptKind.JS,
	});

	file.addExportAssignment({
		expression: JSON.stringify(documentationDictionary, null, 2),
		isExportEquals: false, // export default because we lazy import
	});

	return project.save();
}

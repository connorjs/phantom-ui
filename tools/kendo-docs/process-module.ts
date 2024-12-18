import type { SourceFile } from "ts-morph";
import { extractDocumentation } from "./documentation-mapper.ts";
import type { DocumentationDictionary } from "./types.ts";
import { isPropsNode } from "./types.ts";

/**
 * Processes the source file and returns the {@link DocumentationDictionary}.
 */
export function processSourceFile(
	sourceFile: SourceFile,
): DocumentationDictionary {
	const exports: DocumentationDictionary = {};
	sourceFile.forEachDescendant((node) => {
		if (isPropsNode(node)) {
			exports[node.getName()] = extractDocumentation(node);
		}
	});
	return exports;
}

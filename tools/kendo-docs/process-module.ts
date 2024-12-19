import type { SourceFile } from "ts-morph";
import { translateType } from "./documentation-mapper.ts";
import type { DocumentationDictionary } from "./types.ts";
import { isTypeNode } from "./types.ts";

/**
 * Processes the source file and returns the {@link DocumentationDictionary}.
 */
export function processSourceFile(
	sourceFile: SourceFile,
): DocumentationDictionary {
	const exports: DocumentationDictionary = {};
	sourceFile.forEachDescendant((node) => {
		if (isTypeNode(node)) {
			exports[node.getName()] = translateType(node);
		}
	});
	return exports;
}

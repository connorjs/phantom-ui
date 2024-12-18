import type { DocumentedNode, PropsNode } from "./types.ts";

/**
 * Extracts the documentation.
 *
 * This maps the `ts-morph` AST to our documented node.
 */
export function extractDocumentation(node: PropsNode): DocumentedNode {
	// Note for next time: We need to get the inner properties for interface and types.
	const rawJsDoc = node.getJsDocs()[0]?.getDescription();
	const description = rawJsDoc ? normalizeJsDoc(rawJsDoc) : undefined;
	return {
		name: node.getName(),
		description,
		// rawDescription: rawJsDoc,
	} satisfies DocumentedNode;
}

//#region Description transforms

// Series of functions that transform the documentation from its raw form to its ready-to-display form.

/**
 * Normalizes the JSDoc content.
 */
function normalizeJsDoc(s: string) {
	// Kendo comes with crlf line endings. Replace them with lf.
	return s.replaceAll("\r\n", "\n").trim();
}

// Future idea: Remove or resolve Kendo slug links.

//#endregion

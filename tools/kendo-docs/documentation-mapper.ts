import type { JSDocableNode, PropertySignature } from "ts-morph";
import { Node } from "ts-morph";
import type { DocumentedProperty, DocumentedType, TypeNode } from "./types.ts";

/**
 * Maps the `ts-morph` AST to our documented node.
 */
export function translateType(node: TypeNode): DocumentedType {
	// Get the required fields
	const name = node.getName();
	const description = extractJsDoc(node);

	// Analyze children nodes to determine union type or get properties.
	const propertyNodesOrUnionType = getPropertyNodesOrUnionType(node);

	if (!propertyNodesOrUnionType) {
		// This should not happen because of higher up processing, but just pass for now.
		// Future: consider a proper logger.
		return { name, description, properties: [] };
	}

	if (typeof propertyNodesOrUnionType === "string") {
		// Type alias (union type)
		return { name, description, type: propertyNodesOrUnionType };
	}

	// Interface or type literal
	const properties = propertyNodesOrUnionType.map((property) =>
		translateProperty(property),
	);
	return { name, description, properties };
}

function translateProperty(property: PropertySignature): DocumentedProperty {
	return {
		name: property.getName(),
		description: extractJsDoc(property),
		type: getType(property),
	} satisfies DocumentedProperty;
}

function getPropertyNodesOrUnionType(node: TypeNode) {
	if (Node.isInterfaceDeclaration(node)) {
		// Interfaces have properties directly
		return node.getProperties();
	}
	if (Node.isTypeAliasDeclaration(node)) {
		// Not all type aliases have properties (think `type X = "a" | "b"`).
		for (const child of node.getChildren()) {
			if (Node.isTypeLiteral(child)) {
				// Type literals do have properties (think `X = {a: string}`), so get those.
				return child.getProperties();
			}

			if (Node.isUnionTypeNode(child)) {
				// But we still want the union type.
				return child
					.getTypeNodes()
					.map((node) => getType(node))
					.join(" | ")
					.replaceAll("'", '"');
			}
		}
		return undefined;
	}
	return undefined;
}

//#region JSDoc extraction and transforms

// Series of functions that transform the documentation from its raw form to its ready-to-display form.

function extractJsDoc(node: JSDocableNode) {
	const rawJsDoc = node.getJsDocs()[0]?.getDescription();
	// Return `-` for empty JSDoc.
	return rawJsDoc ? normalizeJsDoc(rawJsDoc) : "-";
}

/**
 * Normalizes the JSDoc content.
 */
function normalizeJsDoc(s: string) {
	// Kendo comes with crlf line endings. Replace them with lf.
	return s.replaceAll("\r\n", "\n").trim();
}

// Future idea: Remove or resolve Kendo slug links.

//#endregion

//#region Type extraction and transforms

function getType(node: Node) {
	const rawType = node.getType().getText();
	return normalizeImportType(rawType);
}

// RegExp for the import syntax. If the import ends in `index` also remove that.
const importRegex = /import\(".*?node_modules\/(.*?)(\/index)?"\)/g;

function normalizeImportType(s: string) {
	// Imports use file system running this command, so remove the node modules path.
	return s.replaceAll(importRegex, 'import("$1")');
}

//#endregion

import type {
	InterfaceDeclaration,
	TypeAliasDeclaration,
	VariableStatement,
} from "ts-morph";
import { Node } from "ts-morph";

/**
 * Interface or Type definition node.
 *
 * Named “Props node” to signify their main use: documenting properties.
 * These also represent the supporting types.
 */
export type TypeNode = InterfaceDeclaration | TypeAliasDeclaration;

/**
 * Gets if node is one of our {@link TypeNode}.
 */
export function isTypeNode(node: Node) {
	return Node.isInterfaceDeclaration(node) || Node.isTypeAliasDeclaration(node);
}

/**
 * Variable statement node.
 *
 * Names “Component node” to signify their main use: the React components themselves.
 * These could also represent other non-type exports.
 */
export type ComponentNode = VariableStatement;

/**
 * Gets if node is one of our {@link TypeNode}.
 */
export function isComponentNode(node: Node) {
	return Node.isVariableStatement(node);
}

/**
 * Record of names to nodes.
 */
export type DocumentationDictionary = Record<string, DocumentedType>;

// Shared fields
type Documented = {
	/**
	 * The name of the node.
	 *
	 * Think type name.
	 */
	name: string;

	/**
	 * The description as markdown.
	 *
	 * This has run through transforms that prepare it for display.
	 * Think normalizing content, removing or resolving Kendo-specific syntax, or other modifications.
	 */
	description: string | undefined;
};

/**
 * Our representation of a documented type (includes interface).
 */
export type DocumentedType = Documented &
	(
		| {
				/**
				 * The properties of the type.
				 *
				 * Undefined implies type aliases (think `type X = "a" | "b"`).
				 */
				properties: DocumentedProperty[] | undefined;
		  }
		| {
				/**
				 * The types for this type alias.
				 */
				type: string;
		  }
	);

/**
 * Our representation of a documented property.
 */
export type DocumentedProperty = Documented & {
	/**
	 * The type of the property.
	 */
	type: string;
};

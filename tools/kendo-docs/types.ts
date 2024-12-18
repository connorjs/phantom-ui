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
export type PropsNode = InterfaceDeclaration | TypeAliasDeclaration;

/**
 * Gets if node is one of our {@link PropsNode}.
 */
export function isPropsNode(node: Node) {
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
 * Gets if node is one of our {@link PropsNode}.
 */
export function isComponentNode(node: Node) {
	return Node.isVariableStatement(node);
}

/**
 * Record of names to nodes.
 */
export type DocumentationDictionary = Record<string, DocumentedNode>;

/**
 * Our representation of a documented node.
 */
export type DocumentedNode = {
	/**
	 * The name of the node.
	 *
	 * Think property or type name.
	 */
	name: string;

	/**
	 * The ready-to-display description as markdown.
	 *
	 * This has run through transforms that prepare it for display.
	 * Think normalizing content, removing or resolving Kendo-specific syntax, or other modifications.
	 */
	description: string | undefined;

	/**
	 * The raw description as markdown.
	 *
	 * This comes from the JSDoc.
	 * It includes Kendo’s formatting
	 */
	//rawDescription: string | undefined;
};

/* c8 ignore start -- I will add unit tests once the code settles. */

import {
	Card,
	CardBody,
	CardHeader,
	CardTitle,
	StackLayout,
} from "@progress/kendo-react-layout";
import type { JSX } from "react";
import Markdown from "react-markdown";
import { name, property } from "~/components/component-page.css.ts";
import type { DocumentationDictionary } from "../../../tools/kendo-docs/types.ts";

export function ComponentPage<
	DocumentationT extends DocumentationDictionary,
	PropsNameT extends keyof DocumentationT & `${string}Props`,
>(
	props: Readonly<{
		componentName: string;
		documentation: DocumentationT;
		example: JSX.Element;
		propsName: PropsNameT;
	}>,
) {
	return (
		<section>
			<div>
				<h1>{props.componentName}</h1>
			</div>
			<StackLayout orientation="vertical" gap="var(--kendo-spacing-5)">
				<MyCard title="Example">{props.example}</MyCard>
				<MyCard title="Documentation">
					<PropsDocumentation
						documentation={props.documentation}
						propsName={props.propsName}
					/>
				</MyCard>
			</StackLayout>
		</section>
	);
}

function MyCard(props: Readonly<{ title: string; children: JSX.Element }>) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{props.title}</CardTitle>
			</CardHeader>
			<CardBody>{props.children}</CardBody>
		</Card>
	);
}

function PropsDocumentation(
	props: Readonly<{
		documentation: DocumentationDictionary;
		propsName: string;
	}>,
) {
	// If the type is a type alias that is also in the documentation,
	// then display the transitive type.
	const displayType = (type: string) => {
		const found = props.documentation[type];
		return found && "type" in found ? found.type : type;
	};

	const propsDocumentation = props.documentation[props.propsName];
	const properties =
		propsDocumentation &&
		"properties" in propsDocumentation &&
		propsDocumentation.properties;

	if (!properties) {
		return undefined;
	}

	return properties.map((documentProperty) => (
		<div key={documentProperty.name} className={property}>
			<div>
				<span className={name}>{documentProperty.name}</span>
				<code>{displayType(documentProperty.type)}</code>
			</div>
			<div>
				{documentProperty.description ? (
					<Markdown>{documentProperty.description}</Markdown>
				) : (
					"-"
				)}
			</div>
		</div>
	));
}

/* c8 ignore stop -- END */

/* c8 ignore start -- I will add unit tests once the code settles. */
import { Loader } from "@progress/kendo-react-indicators";
import {
	Card,
	CardBody,
	CardHeader,
	CardTitle,
	StackLayout,
} from "@progress/kendo-react-layout";

export type ComponentsPageProps = {
	componentName: string;
	documentation: unknown;
};

export function ComponentPage(props: Readonly<ComponentsPageProps>) {
	return (
		<section>
			<div>
				<h2>{props.componentName}</h2>
				<p>Description</p>
			</div>
			<StackLayout orientation="vertical" gap="var(--kendo-spacing-5)">
				<Card>
					<CardHeader>
						<CardTitle>Example</CardTitle>
					</CardHeader>
					<CardBody>
						<Loader />
					</CardBody>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>Documentation</CardTitle>
					</CardHeader>
					<CardBody>
						<pre>
							<code>{JSON.stringify(props.documentation, null, 2)}</code>
						</pre>
						)
					</CardBody>
				</Card>
			</StackLayout>
		</section>
	);
}
/* c8 ignore stop -- END */

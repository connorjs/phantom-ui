import { Loader } from "@progress/kendo-react-indicators";
import {
	Card,
	CardBody,
	CardHeader,
	CardTitle,
	StackLayout,
} from "@progress/kendo-react-layout";
import { useEffect, useState } from "react";

/* c8 ignore start -- I will add unit tests once the code settles. */
export function LoaderPage() {
	const [data, setData] = useState(undefined);

	useEffect(() => {
		// @ts-ignore -- Dynamic import from generated dir
		import("~/kendo-docs/indicators.js")
			.then((module) => {
				setData(module.default);
			})
			.catch((error: unknown) => {
				// biome-ignore lint/suspicious/noConsole: Console until we have a logger.
				console.error(error);
			});
	}, []); // Run once (fetch data)

	return (
		<section>
			<div>
				<h2>Loader</h2>
				<p>Description about loaders</p>
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
				{data ? (
					<Card>
						<CardHeader>
							<CardTitle>Documentation</CardTitle>
						</CardHeader>
						<CardBody>
							<pre>
								<code>{JSON.stringify(data, null, 2)}</code>
							</pre>
							)
						</CardBody>
					</Card>
				) : undefined}
			</StackLayout>
		</section>
	);
}
/* c8 ignore stop -- END */

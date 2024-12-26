import { ComponentPage } from "~/components/component-page.tsx";
// @ts-expect-error -- No typing for JS dynamic import.
import indicators from "~/kendo-docs/indicators.js";

export default function Loader() {
	return <ComponentPage componentName="Loader" documentation={indicators} />;
}

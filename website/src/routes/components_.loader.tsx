import { Loader } from "@progress/kendo-react-indicators";
import { ComponentPage } from "~/components/component-page.tsx";
import documentation from "~/kendo-docs/kendo-react-indicators.ts";

export default function LoaderPage() {
	return (
		<ComponentPage
			componentName="Loader"
			documentation={documentation}
			example={<Loader />}
			propsName="LoaderProps"
		/>
	);
}

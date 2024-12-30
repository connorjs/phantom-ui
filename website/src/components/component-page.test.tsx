import { Loader } from "@progress/kendo-react-indicators";
import { describe, expect, it } from "vitest";
import { ComponentPage } from "~/components/component-page.tsx";
import documentation from "~/kendo-docs/kendo-react-indicators.ts";
import { render, screen } from "~/testing-library.tsx";

describe("component-page", () => {
	it("should not throw (smoke test)", () => {
		// Basic test until the code settles and is ready for unit testing.
		// Use the loader page as a starting point.
		render(
			<ComponentPage
				componentName="Loader"
				documentation={documentation}
				example={<Loader />}
				propsName="LoaderProps"
			/>,
		);
		expect(screen.getByText("Loader")).toBeInTheDocument();
	});
});

import { render } from "@testing-library/react";
import type { ReactNode } from "react";
import { BrowserRouter } from "react-router";

/**
 * Custom render that includes our common providers.
 *
 * @see <a href="https://testing-library.com/docs/react-testing-library/setup#custom-render">testing-library.com</a>
 */
function customRender(
	ui: Parameters<typeof render>[0],
	options?: Parameters<typeof render>[1],
): ReturnType<typeof render> {
	function wrapper(props: { children: ReactNode }) {
		return <BrowserRouter>{props.children}</BrowserRouter>;
	}

	return render(ui, { ...options, wrapper });
}

// re-export everything
// biome-ignore lint/performance/noBarrelFile: Drop-in replacement for @testing-library module
// biome-ignore lint/performance/noReExportAll: Drop-in replacement for @testing-library module
export * from "@testing-library/react";

// override render method
export { customRender as render };

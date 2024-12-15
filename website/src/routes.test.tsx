import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router";
import { describe, expect, it, vi } from "vitest";
import { routes } from "~/routes.tsx";

vi.mock(import("~/home/home-page.tsx"), () => ({
	// biome-ignore lint/style/useNamingConvention: Mocking component
	HomePage: () => <>Home</>,
}));

describe("routes", () => {
	it("should render (smoke test)", () => {
		const router = createMemoryRouter(routes);
		render(<RouterProvider router={router} />);
		expect(screen.getByText("Home")).toBeInTheDocument();
	});
});

import { describe, expect, it } from "vitest";
import { render, screen } from "~/testing-library.tsx";
import { Shell } from "./shell.tsx";

describe("shell", () => {
	it("should render children", () => {
		render(<Shell>Test</Shell>);
		expect(screen.getByText("Test")).toBeInTheDocument();
	});

	it("should render navigation", () => {
		render(<Shell>Test</Shell>);
		expect(screen.getByRole("navigation")).toBeInTheDocument();
	});
});

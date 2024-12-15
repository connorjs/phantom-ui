import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { NotFound404Page } from "./not-found-404-page.tsx";

describe("not-found-404-page", () => {
	it("should say not found", () => {
		render(<NotFound404Page />);
		expect(screen.getByText("Page not found.")).toBeInTheDocument();
	});
});

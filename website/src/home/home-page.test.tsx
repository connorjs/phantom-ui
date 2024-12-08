import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { HomePage } from "./home-page.tsx";

describe("home-page", () => {
	it("should say hello", () => {
		render(<HomePage />);
		expect(screen.getByText("Hello, world!")).toBeInTheDocument();
	});
});

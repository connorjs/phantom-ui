import { userEvent } from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { render, screen } from "~/testing-library.tsx";
import { TopNavigation } from "./top-navigation.tsx";

describe("top-navigation", () => {
	describe("should renders nav links", () => {
		it.each([
			["Foundation", "/foundation"],
			["Patterns", "/patterns"],
			["Components", "/components"],
			["Demos", "/demos"],
		])("%s", async (text, expectedPath) => {
			const user = userEvent.setup();
			render(<TopNavigation />);

			await user.click(screen.getByText(text));
			expect(location.pathname).toBe(expectedPath);
		});
	});
});

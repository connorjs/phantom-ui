import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

const spacing = {
	none: 0,
	1: "var(--kendo-spacing-1)",
	2: "var(--kendo-spacing-2)",
	3: "var(--kendo-spacing-3)",
	4: "var(--kendo-spacing-4)",
	5: "var(--kendo-spacing-5)",
	6: "var(--kendo-spacing-6)",
	7: "var(--kendo-spacing-7)",
	8: "var(--kendo-spacing-8)",
};

const unconditionalProperties = defineProperties({
	properties: {
		display: ["none", "flex", "block", "inline"],
		flexDirection: ["row", "column"],
		gap: spacing,
		alignItems: ["stretch", "flex-start", "center", "flex-end"],
		justifyContent: ["stretch", "flex-start", "center", "flex-end"],
		padding: spacing,
	},
});

export const sprinkles = createSprinkles(unconditionalProperties);

// It's a good idea to export the Sprinkles type too
export type Sprinkles = Parameters<typeof sprinkles>[0];

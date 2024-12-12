import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

const spacing = {
	none: 0,
	xxxs: "var(--kendo-spacing-0\\.5)",
	xxs: "var(--kendo-spacing-1)",
	xs: "var(--kendo-spacing-2)",
	s: "var(--kendo-spacing-3)",
	m: "var(--kendo-spacing-4)",
	l: "var(--kendo-spacing-5)",
	xl: "var(--kendo-spacing-6)",
	xxl: "var(--kendo-spacing-8)",
	xxxl: "var(--kendo-spacing-10)",
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

import { style } from "@vanilla-extract/css";

export const property = style({
	marginBlock: "var(--kendo-spacing-4)",
	selectors: {
		"&:first-of-type": {
			marginBlockStart: 0,
		},
		"&:not(:last-of-type)": {
			borderBottom: "1px solid var(--kendo-color-border)",
		},
	},
});

export const name = style({
	fontWeight: "bold",
	marginInlineEnd: "var(--kendo-spacing-2)",
});

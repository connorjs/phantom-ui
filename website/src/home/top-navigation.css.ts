import { globalStyle, style } from "@vanilla-extract/css";

export const topNav = style({
	fontWeight: "bold",
});

export const actions = style({
	listStyleType: "none",
	padding: 0,
	margin: 0,
	display: "flex",
	gap: "var(--kendo-spacing-4)",
});

globalStyle(`${actions} a`, {
	color: "var(--kendo-color-on-primary)",
	textDecoration: "none",
});

globalStyle(".k-appbar .k-input", {
	width: "unset",
});

import type { RouteConfigEntry } from "@react-router/dev/routes";

export default [
	{
		index: true,
		file: "./routes/_index.tsx",
	},
	{
		path: "components/loader",
		file: "./routes/components.loader.tsx",
	},
	{
		path: "*",
		file: "./routes/_404.tsx",
	},
] satisfies RouteConfigEntry[];

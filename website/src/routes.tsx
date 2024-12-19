import type { RouteObject } from "react-router";
import { LoaderPage } from "~/components/loader/loader-page.tsx";
import { HomePage } from "~/home/home-page.tsx";
import { NotFound404Page } from "~/not-found-404/not-found-404-page.tsx";
import { Shell } from "~/shell/shell.tsx";

// Note: Intentionally importing everything. Lazy imports and route modules later.

export const routes = [
	{
		element: <Shell />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "components",
				children: [{ path: "loader", element: <LoaderPage /> }],
			},
			{
				path: "*",
				element: <NotFound404Page />,
			},
		],
	},
] satisfies RouteObject[];

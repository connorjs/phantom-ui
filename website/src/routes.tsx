import type { RouteObject } from "react-router";
import { HomePage } from "~/home/home-page.tsx";
import { NotFound404Page } from "~/not-found-404/not-found-404-page.tsx";
import { Shell } from "~/shell/shell.tsx";

export const routes = [
	{
		element: <Shell />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "*",
				element: <NotFound404Page />,
			},
		],
	},
] satisfies RouteObject[];

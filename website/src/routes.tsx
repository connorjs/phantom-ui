import type { RouteObject } from "react-router";
import { HomePage } from "~/home/home-page.tsx";
import { NotFound404Page } from "~/not-found-404/not-found-404-page.tsx";

export const routes = [
	{
		index: true,
		element: <HomePage />,
	},
	{
		path: "*",
		element: <NotFound404Page />,
	},
] satisfies RouteObject[];

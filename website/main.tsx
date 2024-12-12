import "~/ui/global.scss";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";

import { routes } from "~/routes.tsx";
import { initializePhantomUi } from "~/ui/initialize/initialize.ts";

initializePhantomUi();

// biome-ignore lint/style/noNonNullAssertion: See index.html
const root = document.getElementById("root")!;

const router = createBrowserRouter(routes);

createRoot(root).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);

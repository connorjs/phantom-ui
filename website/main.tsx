import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HomePage } from "~/home/home-page.tsx";

// biome-ignore lint/style/noNonNullAssertion: See index.html
const root = document.getElementById("root")!;

createRoot(root).render(
	<StrictMode>
		<HomePage />
	</StrictMode>,
);

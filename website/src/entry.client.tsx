import { StrictMode } from "react";
import reactDom from "react-dom/client";
import { HydratedRouter } from "react-router/dom";

// initializePhantomUi();

reactDom.hydrateRoot(
	document,
	<StrictMode>
		<HydratedRouter />
	</StrictMode>,
);

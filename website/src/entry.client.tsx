import "~/ui/global.scss";

import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { HydratedRouter } from "react-router/dom";
import { initializePhantomUi } from "~/ui/initialize/initialize.ts";

initializePhantomUi();

hydrateRoot(
	document,
	<StrictMode>
		<HydratedRouter />
	</StrictMode>,
);

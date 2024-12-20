import "~/ui/global.scss";

import type { ReactNode } from "react";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import { Shell } from "~/shell/shell.tsx";
import { initializePhantomUi } from "~/ui/initialize/initialize.ts";

if (typeof document !== "undefined") {
	initializePhantomUi();
}

export default function Root() {
	return (
		<Shell>
			<Outlet />
		</Shell>
	);
}

export function HydrateFallback() {
	return <div />; // Display nothing, but including this prevents console warning.
}

export function Layout(props: Readonly<{ children: ReactNode }>) {
	return (
		<html lang="en">
			<head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Phantom UI</title>
				<meta
					name="description"
					content="My personal sandbox for design system work."
				/>
				<meta name="theme-color" content="#000" />

				{/* Open Graph meta tags for better social media previews */}
				<meta property="og:title" content="Phantom UI" />
				<meta
					property="og:description"
					content="My personal sandbox for design system work."
				/>
				<meta
					property="og:url"
					content="https://github.com/connorjs/phantom-ui"
				/>
				<Links />
				<Meta />
			</head>
			<body>
				{props.children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

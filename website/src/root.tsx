import type { ReactNode } from "react";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";

export default function Root() {
	return <Outlet />;
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
				<Meta />
				<Links />
			</head>
			<body>
				{props.children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

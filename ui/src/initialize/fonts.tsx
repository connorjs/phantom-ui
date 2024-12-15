/**
 * Renders `link` tags used to load the Design System fonts.
 *
 * This approach (a React component included in the `head` by consumers) keeps control of the font centrally with the Design System without compromising performance.
 * Internally, this function uses `link` tags, instead of using CSS `@import`.
 */
export function FontLinks() {
	return (
		<>
			{/* Preconnect to the domain used to fetch the CSS */}
			<link
				rel="preconnect"
				href="https://fonts.googleapis.com"
				crossOrigin=""
			/>

			{/* Preconnect to the domain used to fetch the actual font files */}
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

			{/* Load the font itself - See <https://fonts.google.com/specimen/Nunito+Sans> */}
			<link
				rel="stylesheet"
				href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap"
			/>
		</>
	);
}

/* c8 ignore stop -- END */

/**
 * Utility function that loads the Design System fonts.
 *
 * This approach (a utility function invoked by consumers) keeps control of the font centrally with the Design System without compromising performance.
 * Internally, this function uses `link` tags, instead of using CSS `@import`.
 */
export function loadFonts() {
	// Preconnect to the domain used to fetch the CSS
	// <link rel="preconnect" href="https://fonts.googleapis.com">
	const cssFetchPreconnect = document.createElement("link");
	cssFetchPreconnect.rel = "preconnect";
	cssFetchPreconnect.href = "https://fonts.googleapis.com";
	document.head.appendChild(cssFetchPreconnect);

	// Preconnect to the domain used to fetch the actual font files
	// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	const fontFetchPreconnect = document.createElement("link");
	fontFetchPreconnect.rel = "preconnect";
	fontFetchPreconnect.href = "https://fonts.gstatic.com";
	fontFetchPreconnect.crossOrigin = "";
	document.head.appendChild(fontFetchPreconnect);

	// Load the fonts themselves
	// <link href="..." rel="stylesheet">
	// https://fonts.google.com/specimen/Nunito+Sans
	// https://fonts.google.com/specimen/JetBrains+Mono
	const fontLink = document.createElement("link");
	fontLink.rel = "stylesheet";
	fontLink.href =
		"https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap";
	document.head.appendChild(fontLink);
}

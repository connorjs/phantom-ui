import { enableKendoTypography } from "./enable-kendo-typography.ts";
import { loadFonts } from "./load-fonts.ts";

/**
 * Utility function that provides a hook for the Design System to initialize itself.
 *
 * For example, it dynamically loads fonts or can set user settings that the Design System should centrally configure.
 * This removes duplicated code across applications and simplifies updates.
 */
export function initializePhantomUi() {
	loadFonts();
	enableKendoTypography();
}

import { Outlet } from "react-router";
import { TopNavigation } from "~/shell/top-navigation.tsx";
import { sprinkles } from "~/sprinkles.css.ts";

export function Shell() {
	return (
		<>
			<TopNavigation />
			<main className={sprinkles({ padding: "xxxl" })}>
				<Outlet />
			</main>
		</>
	);
}

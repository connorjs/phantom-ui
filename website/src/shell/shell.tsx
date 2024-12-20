import type { ReactNode } from "react";
import { TopNavigation } from "~/shell/top-navigation.tsx";
import { sprinkles } from "~/sprinkles.css.ts";

export function Shell(props: Readonly<{ children: ReactNode }>) {
	return (
		<>
			<TopNavigation />
			<main className={sprinkles({ padding: "xxxl" })}>{props.children}</main>
		</>
	);
}

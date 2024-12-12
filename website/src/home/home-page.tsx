import { TopNavigation } from "~/home/top-navigation.tsx";
import { sprinkles } from "~/sprinkles.css.ts";

export function HomePage() {
	return (
		<>
			<TopNavigation />
			<main className={sprinkles({ padding: 4 })}>
				<section>
					<h2>Welcome to Phantom UI</h2>
					<p>This is a placeholder for the main content of the page.</p>
				</section>
			</main>
		</>
	);
}

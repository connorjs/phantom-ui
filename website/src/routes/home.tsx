import { HomePage } from "~/home/home-page.tsx";

export default function Home() {
	return <HomePage />;
}

export function meta() {
	const title = "Home | Phantom UI";
	return [{ title }, { property: "og:title", content: title }];
}

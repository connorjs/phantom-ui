import path from "node:path";
import type { Config } from "@react-router/dev/config";

export default {
	appDirectory: path.join("website", "src"),
	basename: "/phantom-ui/",
	buildDirectory: path.join("artifacts", "build"),
	ssr: false,
} satisfies Config;

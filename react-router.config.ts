import path from "node:path";
import type { Config } from "@react-router/dev/config";

export default {
	appDirectory: path.join("website", "src"),
	buildDirectory: "artifacts",
	ssr: false,
} satisfies Config;

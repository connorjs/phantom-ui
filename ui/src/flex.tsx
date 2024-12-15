import type { ReactNode } from "react";
import type { Sprinkles } from "~/sprinkles.css.ts";
import { sprinkles } from "~/sprinkles.css.ts";

export type FlexboxProps = {
	children: ReactNode;
	flexDirection: Sprinkles["flexDirection"];
	alignItems?: Sprinkles["alignItems"];
	gap?: Sprinkles["gap"];
};

export function Flexbox(props: FlexboxProps) {
	const flexClass = sprinkles({
		flexDirection: props.flexDirection,
		alignItems: props.alignItems ?? "center",
		gap: props.gap ?? "m",
		display: "flex",
	});
	return <div className={flexClass}>{props.children}</div>;
}

export function FlexRow(props: Omit<FlexboxProps, "flexDirection">) {
	return <Flexbox {...props} flexDirection="row" />;
}

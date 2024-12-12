import type { ReactNode } from "react";
import { type Sprinkles, sprinkles } from "~/sprinkles.css.ts";

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
		gap: props.gap ?? 4,
		display: "flex",
	});
	return <div className={flexClass}>{props.children}</div>;
}

export function FlexRow(props: Omit<FlexboxProps, "flexDirection">) {
	return <Flexbox {...props} flexDirection="row" />;
}

export function FlexColumn(props: Omit<FlexboxProps, "flexDirection">) {
	return <Flexbox {...props} flexDirection="column" />;
}

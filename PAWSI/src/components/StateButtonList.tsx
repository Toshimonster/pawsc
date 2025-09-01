import { State } from "../pages/States";
import { StateCard } from "./StateCard";
import React from "react";

export interface StateButtonListParams {
	onStateClick: (state: State) => void;
	states: State[];
	disabled: boolean;
}

export function StateButtonList(props: StateButtonListParams) {
	return (
		<div
			style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
		>
			{props.states.map((state, index) => (
				<StateCard
					disabled={props.disabled}
					state={state}
					toggleState={props.onStateClick}
					key={index}
				/>
			))}
		</div>
	);
}

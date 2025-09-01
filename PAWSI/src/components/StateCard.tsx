import { IonButton, IonCard, IonCardContent } from "@ionic/react";
import { ImageLoad } from "./ImageLoad";
import { State } from "../pages/States";
import React, { useContext } from "react";
import {
	PawsDeviceContext,
	PawsDeviceContextProps,
} from "./contexts/PawsContext";
import "./StateCard.css";

export interface StateCardParams {
	toggleState: (state: State) => void;
	state: State;
	disabled: boolean;
}

export function StateCard({
	state,
	toggleState,
	disabled,
}: StateCardParams) {
	const Paws = useContext(PawsDeviceContext) as PawsDeviceContextProps;

	return (
		<IonCard
			className="StateCard Transition"
			style={{
				background: "black",
				transform: "scale(1)",
			}}
			disabled={disabled}
			onClick={() => toggleState(state)}
		>
			<ImageLoad src={state.image} />

			<IonCardContent>
				<IonButton
					onClick={() => toggleState(state)}
					expand="full"
					color="tertiary"
					disabled={disabled}
				>
					{state.name}
				</IonButton>
			</IonCardContent>
		</IonCard>
	);
}

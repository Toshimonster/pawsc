import { PawsState } from "../contexts/PawsDevice";
import {
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonItem,
	IonLabel,
	IonList,
	IonProgressBar,
} from "@ionic/react";
import React, { useContext } from "react";

import "../paws/PawsStatusCard.css";
import {
	PawsDeviceContext,
	PawsDeviceContextProps,
} from "../contexts/PawsContext";

export function PawsStatusCard() {
	const Paws = useContext(PawsDeviceContext) as PawsDeviceContextProps;
	function PawsProgressBar({
		state,
		bufferProgress,
	}: {
		state: PawsState;
		bufferProgress: boolean;
	}) {
		if (Paws.state < state) {
			return <IonProgressBar color="light" value={100} />;
		} else if (Paws.state === state) {
			if (bufferProgress) {
				//Extract value data from detail string
				if (Paws.detailString[0] == "[") {
					try {
						const [on, total] = Paws.detailString
							.slice(1)
							.split("]")[0]
							.split("/");
						const [parseOn, parseTotal] = [parseInt(on), parseInt(total)];
						return (
							<IonProgressBar
								buffer={parseOn / parseTotal}
								value={(parseOn - 1) / parseTotal}
							/>
						);
					} catch {
						/* empty */
					}
				}
			}
			return <IonProgressBar type="indeterminate" />;
		} else {
			return <IonProgressBar color="success" value={100} />;
		}
	}

	function PawsProgressDisplay({
		state,
		title,
		bufferProgress = false,
	}: {
		state: PawsState;
		title: string;
		bufferProgress?: boolean;
	}) {
		return (
			<IonItem>
				<div className="pawsContainer">
					<IonLabel>{title}</IonLabel>
					<PawsProgressBar state={state} bufferProgress={bufferProgress} />
				</div>
			</IonItem>
		);
	}

	return (
		<IonCard style={{ width: "80%" }}>
			<IonCardHeader>
				<IonCardTitle>P.A.W.S Device</IonCardTitle>
				<IonCardSubtitle>{Paws.detailString}</IonCardSubtitle>
			</IonCardHeader>
			<IonCardContent>
				<IonList>
					<PawsProgressDisplay
						title="Device Is Capable"
						state={PawsState.CHECKING_REQUIREMENTS}
					/>
					<PawsProgressDisplay
						title="Proot Located"
						state={PawsState.FINDING_DEVICE}
					/>
					<PawsProgressDisplay
						title="Slotting in the USB"
						state={PawsState.CONNECTING}
					/>
					<PawsProgressDisplay
						title="Havin' a Nice Chat"
						state={PawsState.INITIALISING}
						bufferProgress
					/>
				</IonList>
				<IonProgressBar
					style={{
						marginTop: "1em",
						height: "1em",
					}}
					value={
						(Paws.state - PawsState.CHECKING_REQUIREMENTS) /
						(PawsState.READY - PawsState.CHECKING_REQUIREMENTS)
					}
					color={
						(Paws.state - PawsState.CHECKING_REQUIREMENTS) /
							(PawsState.READY - PawsState.CHECKING_REQUIREMENTS) <
						0
							? "light"
							: Paws.state === PawsState.READY
							? "success"
							: ""
					}
				/>
			</IonCardContent>
		</IonCard>
	);
}

import React, { useContext } from "react";
import { PageWrapper } from "./PageWrapper";
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle } from "@ionic/react";
import { GameController } from "../components/GameController";
import { ModeButton } from "../components/ModeButton";
import {
	PawsDeviceContext,
	PawsDeviceContextProps,
} from "../components/contexts/PawsContext";

export function Game() {
	const Paws = useContext(PawsDeviceContext) as PawsDeviceContextProps;

	// Check for both PAWSC and legacy game controller capabilities
	const hasGameController = false;

	return (
		<PageWrapper name="Game">
			<IonContent>
				<ModeButton mode="Game" />
				<div style={{ padding: "20px" }}>
					<h1 style={{ textAlign: "center", marginBottom: "20px" }}>
						Game Mode
					</h1>
					<p style={{ textAlign: "center", marginBottom: "30px", color: "var(--ion-color-medium)" }}>
						Use the game controller to play games on your PAWSC device!
					</p>
					
					<GameController 
						disabled={!hasGameController}
					/>
					
					{!hasGameController && (
						<div style={{ 
							textAlign: "center", 
							marginTop: "20px",
							color: "var(--ion-color-warning)",
							fontStyle: "italic"
						}}>
							Game controller not available. Make sure you're connected to a PAWSC device with game support.
						</div>
					)}
				</div>
			</IonContent>
		</PageWrapper>
	);
} 
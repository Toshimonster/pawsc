import React, { useContext, useCallback, useState } from "react";
import {
	IonButton,
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardTitle,
	IonGrid,
	IonRow,
	IonCol,
	IonIcon,
} from "@ionic/react";
import {
	chevronUp,
	chevronDown,
	chevronBack,
	chevronForward,
	radioButtonOn,
	ellipse,
} from "ionicons/icons";
import {
	PawsDeviceContext,
	PawsDeviceContextProps,
} from "./contexts/PawsContext";
import { BleClient } from "@capacitor-community/bluetooth-le";
import Config from "../config";
import "./GameController.css";

interface GameControllerProps {
	disabled?: boolean;
}

export function GameController({ disabled = false }: GameControllerProps) {
	const Paws = useContext(PawsDeviceContext) as PawsDeviceContextProps;
	const [lastPressed, setLastPressed] = useState<string | null>(null);

	const sendGameCommand = useCallback(
		async (command: number) => {
			if (disabled || !Paws.device.device) return;

			try {
				// Create a DataView with the command byte
				const dataView = new DataView(new ArrayBuffer(1));
				dataView.setUint8(0, command);

				// Determine which game controller to use (PAWSC or legacy)
				let serviceUUID: string;
				let characteristicUUID: string;

				if (Paws.device.additionalCapabilities.pawscGame?.reachable) {
					// Use PAWSC game service
					serviceUUID = Config.BLE_PAWSC_GAME_SERVICE;
					characteristicUUID = Config.BLE_PAWSC_GAME_CONTROLLER;
				} else if (Paws.device.additionalCapabilities.gameController?.reachable) {
					// Use legacy PAWS game service
					serviceUUID = Config.BLE_PAWS_GAME_SERVICE;
					characteristicUUID = Config.BLE_PAWS_GAME_CONTROLLER_CHAR;
				} else {
					console.error("No game controller available");
					return;
				}

				// Write to the game controller characteristic
				await BleClient.write(
					Paws.device.device.deviceId,
					serviceUUID,
					characteristicUUID,
					dataView
				);

				// Update last pressed for visual feedback
				const commandNames = ["A", "B", "LEFT", "RIGHT", "UP", "DOWN"];
				setLastPressed(commandNames[command]);
				
				// Clear the last pressed after a short delay
				setTimeout(() => setLastPressed(null), 200);
			} catch (error) {
				console.error("Failed to send game command:", error);
			}
		},
		[Paws.device.device, disabled, Paws.device.additionalCapabilities]
	);

	const buttonStyle = (command: string) => ({
		transform: lastPressed === command ? "scale(0.95)" : "scale(1)",
	} as React.CSSProperties);

	return (
		<IonCard className="game-controller-card">
			<IonCardHeader>
				<IonCardTitle>Game Controller</IonCardTitle>
			</IonCardHeader>
			<IonCardContent>
				<IonGrid className="game-controller-grid">
					{/* D-Pad */}
					<div className="dpad-section">
						<IonRow className="ion-justify-content-center button-row">
							<IonCol size="4" className="ion-text-center">
								<IonButton
									disabled={disabled}
									onClick={() => sendGameCommand(2)} // LEFT
									style={buttonStyle("LEFT")}
									color="medium"
									fill="outline"
									className="dpad-button"
								>
									<IonIcon icon={chevronBack} size="large" />
								</IonButton>
							</IonCol>
							<IonCol size="4" className="ion-text-center">
								<IonButton
									disabled={disabled}
									onClick={() => sendGameCommand(4)} // UP
									style={buttonStyle("UP")}
									color="medium"
									fill="outline"
									className="dpad-button"
								>
									<IonIcon icon={chevronUp} size="large" />
								</IonButton>
							</IonCol>
							<IonCol size="4" className="ion-text-center">
								<IonButton
									disabled={disabled}
									onClick={() => sendGameCommand(3)} // RIGHT
									style={buttonStyle("RIGHT")}
									color="medium"
									fill="outline"
									className="dpad-button"
								>
									<IonIcon icon={chevronForward} size="large" />
								</IonButton>
							</IonCol>
						</IonRow>
						<IonRow className="ion-justify-content-center button-row">
							<IonCol size="4" className="ion-text-center">
								{/* Empty space for left */}
							</IonCol>
							<IonCol size="4" className="ion-text-center">
								<IonButton
									disabled={disabled}
									onClick={() => sendGameCommand(5)} // DOWN
									style={buttonStyle("DOWN")}
									color="medium"
									fill="outline"
									className="dpad-button"
								>
									<IonIcon icon={chevronDown} size="large" />
								</IonButton>
							</IonCol>
							<IonCol size="4" className="ion-text-center">
								{/* Empty space for right */}
							</IonCol>
						</IonRow>
					</div>

					{/* Action Buttons */}
					<IonRow className="ion-justify-content-center action-buttons-row">
						<IonCol size="6" className="ion-text-center">
							<IonButton
								disabled={disabled}
								onClick={() => sendGameCommand(0)} // A
								style={buttonStyle("A")}
								color="success"
								fill="solid"
								className="action-button"
							>
								<IonIcon icon={radioButtonOn} size="large" />
							</IonButton>
						</IonCol>
						<IonCol size="6" className="ion-text-center">
							<IonButton
								disabled={disabled}
								onClick={() => sendGameCommand(1)} // B
								style={buttonStyle("B")}
								color="danger"
								fill="solid"
								className="action-button"
							>
								<IonIcon icon={ellipse} size="large" />
							</IonButton>
						</IonCol>
					</IonRow>

					{/* Status Display */}
					<IonRow className="ion-justify-content-center">
						<IonCol size="12" className="ion-text-center">
							<div className="status-display">
								{lastPressed ? `Last pressed: ${lastPressed}` : "Ready"}
							</div>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonCardContent>
		</IonCard>
	);
} 
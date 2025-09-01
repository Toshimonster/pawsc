
import React, { useContext, useCallback, useState } from "react";
import {
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardTitle,
	IonButton,
	IonGrid,
	IonRow,
	IonCol,
	IonIcon,
	IonBadge,
} from "@ionic/react";
import {
	apps,
	brush,
	videocam,
	gameController,
	cog,
} from "ionicons/icons";
import {
	PawsDeviceContext,
	PawsDeviceContextProps,
} from "./contexts/PawsContext";
import "./ModeManager.css";

interface Mode {
	id: string;
	name: string;
	icon: string;
	description: string;
	color: string;
	route: string;
}

const AVAILABLE_MODES: Mode[] = [
	{
		id: "States",
		name: "States",
		icon: apps,
		description: "Control device states and animations",
		color: "primary",
		route: "/states",
	},
	{
		id: "PixelDrawer",
		name: "Pixel Drawer",
		icon: brush,
		description: "Draw and display pixel art",
		color: "success",
		route: "/pixeldraw",
	},
	{
		id: "VideoShare",
		name: "Video Share",
		icon: videocam,
		description: "Share and stream video content",
		color: "warning",
		route: "/video",
	},
	{
		id: "Game",
		name: "Game",
		icon: gameController,
		description: "Play games with the device",
		color: "danger",
		route: "/game",
	},
];

export function ModeManager() {
	const Paws = useContext(PawsDeviceContext) as PawsDeviceContextProps;
	const [changingMode, setChangingMode] = useState<string | null>(null);

	const changeMode = useCallback(
		async (mode: Mode) => {
			if (!Paws.device.properties.mode.write) return;

			setChangingMode(mode.id);
			try {
				await Paws.device.properties.mode.write(mode.id);
				await Paws.device.properties.mode.sync();
			} catch (e) {
				console.error(`Failed to change to ${mode.name} mode:`, e);
			} finally {
				setChangingMode(null);
			}
		},
		[Paws.device.properties.mode]
	);

	const getCurrentMode = () => {
		return Paws.properties.mode || "Unknown";
	};

	const isCurrentMode = (modeId: string) => {
		return Paws.properties.mode === modeId;
	};

	return (
		<IonCard>
			<IonCardHeader>
				<IonCardTitle>Mode Management</IonCardTitle>
			</IonCardHeader>
			<IonCardContent>
				<div style={{ marginBottom: "20px" }}>
					<strong>Current Mode: </strong>
					<IonBadge color="success" style={{ marginLeft: "8px" }}>
						{getCurrentMode()}
					</IonBadge>
				</div>

				<IonGrid>
					<IonRow>
						{AVAILABLE_MODES.map((mode) => (
							<IonCol size="12" sizeMd="6" key={mode.id}>
								<IonCard
									className={`mode-card ${isCurrentMode(mode.id) ? 'active' : 'inactive'}`}
									style={{
										border: isCurrentMode(mode.id) 
											? `2px solid var(--ion-color-${mode.color})` 
											: "1px solid var(--ion-color-medium)",
									}}
								>
									<IonCardContent>
										<div style={{ textAlign: "center" }}>
											<IonIcon
												icon={mode.icon}
												size="large"
												color={mode.color}
												className="mode-icon"
											/>
											<h3 className="mode-title">{mode.name}</h3>
											<p className="mode-description">
												{mode.description}
											</p>
											
											{isCurrentMode(mode.id) ? (
												<IonButton
													disabled
													color="success"
													fill="outline"
													expand="block"
												>
													<IonIcon icon="checkmark" slot="start" />
													Active Mode
												</IonButton>
											) : (
												<IonButton
													color={mode.color as any}
													expand="block"
													onClick={() => changeMode(mode)}
													disabled={changingMode === mode.id}
													className="mode-button"
												>
													{changingMode === mode.id ? (
														<>
															<IonIcon icon="refresh" slot="start" />
															Changing...
														</>
													) : (
														<>
															<IonIcon icon="swap-horizontal" slot="start" />
															Switch to {mode.name}
														</>
													)}
												</IonButton>
											)}
										</div>
									</IonCardContent>
								</IonCard>
							</IonCol>
						))}
					</IonRow>
				</IonGrid>

				{changingMode && (
					<div className="changing-indicator">
						<IonIcon icon="sync" />
						<span>
							Changing to {AVAILABLE_MODES.find(m => m.id === changingMode)?.name} mode...
						</span>
					</div>
				)}
			</IonCardContent>
		</IonCard>
	);
} 
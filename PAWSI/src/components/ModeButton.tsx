import { IonChip, IonButton } from "@ionic/react";
import React, { useContext } from "react";
import {
	PawsDeviceContext,
	PawsDeviceContextProps,
} from "./contexts/PawsContext";
import { PawsState } from "./contexts/PawsDevice";

interface SceneStatusParams {
	sceneId?: string;
}

export function SceneStatus({ sceneId = 'ID[TEST]' }: SceneStatusParams) {
	const Paws = useContext(PawsDeviceContext) as PawsDeviceContextProps;

	// Find the current scene capabilities
	const currentScene = Paws.capabilities.find(scene => scene.sceneId === sceneId);
	const sceneCapabilities = currentScene?.capabilities || [];

	// Debug logging
	console.log(`🔍 SceneStatus - Scene: ${sceneId}, Capabilities:`, Paws.capabilities);
	console.log(`🔍 SceneStatus - Current scene:`, currentScene);
	console.log(`🔍 SceneStatus - Scene capabilities:`, sceneCapabilities);
	console.log(`🔍 SceneStatus - hasSceneInteraction:`, Paws.hasSceneInteraction);

	// Count different types of capabilities
	const getCapabilities = sceneCapabilities.filter(cap => cap.type === 'get').length;
	const setCapabilities = sceneCapabilities.filter(cap => cap.type === 'set').length;
	const totalCapabilities = sceneCapabilities.length;

	// Check if scene interaction is available
	const hasSceneInteraction = Paws.hasSceneInteraction;

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				paddingTop: "1em",
				flexWrap: "wrap",
				gap: "8px",
			}}
		>
			{/* Scene ID */}
			<IonChip color="primary">
				Scene: {sceneId}
			</IonChip>

			{/* Scene Interaction Status */}
			<IonChip color={hasSceneInteraction ? 'success' : 'warning'}>
				{hasSceneInteraction ? 'Scene Service: Active' : 'Scene Service: Inactive'}
			</IonChip>

			{/* Capability Counts */}
			{totalCapabilities > 0 && (
				<>
					<IonChip color="success">
						{getCapabilities} Get Commands
					</IonChip>
					<IonChip color="warning">
						{setCapabilities} Set Commands
					</IonChip>
					<IonChip color="medium">
						{totalCapabilities} Total Capabilities
					</IonChip>
				</>
			)}

			{/* Connection Status */}
			<IonChip color={Paws.state === PawsState.READY ? 'success' : 'danger'}>
				{Paws.state === PawsState.READY ? 'Connected' : 'Disconnected'}
			</IonChip>
		</div>
	);
}

// Keep the old ModeButton name for backward compatibility, but it's now a SceneStatus
export function ModeButton(props: any) {
	return <SceneStatus {...props} />;
}

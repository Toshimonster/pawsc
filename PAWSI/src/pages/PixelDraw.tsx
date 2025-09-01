import React, { useContext, useEffect, useState } from "react";
import { PageWrapper } from "./PageWrapper";
import PixelGrid from "../components/PixelGrid";
import { IonContent, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonChip, IonGrid, IonRow, IonCol, IonButton, IonText } from "@ionic/react";
import {
	PawsDeviceContext,
	PawsDeviceContextProps,
} from "../components/contexts/PawsContext";
import { ModeButton } from "../components/ModeButton";

export function PixelDraw() {
	const Paws = useContext(PawsDeviceContext) as PawsDeviceContextProps;
	const [scrollState, setScrollState] = useState(true);
	const [drawColor, setDrawColor] = useState("#FFFFFF");
	const [pixelData, setPixelData] = useState(
		[...Array(64)].map(() => Array(32).fill("#000000"))
	);
	const [isActive, setIsActive] = useState(true);
	const [isSending, setIsSending] = useState(false);

	// Check if we have pixel drawing capabilities
	const hasPixelDrawCapabilities = Paws.capabilities.some(scene => 
		scene.capabilities.some(cap => 
			cap.name === 'setPixelData' || cap.name === 'drawPixels' || cap.name === 'updateDisplay'
		)
	);

	useEffect(() => {
		const sendPixelDraw = async () => {
			if (!Paws.hasSceneInteraction || !hasPixelDrawCapabilities) return;

			setIsSending(true);
			try {
				// Convert pixel data to a format suitable for scene commands
				const pixelDataString = JSON.stringify(pixelData);
				
				// Try different pixel drawing commands based on available capabilities
				const pixelCommands = [
					['ID[TEST]', 'setPixelData', pixelDataString],
					['ID[TEST]', 'drawPixels', pixelDataString],
					['ID[TEST]', 'updateDisplay', pixelDataString]
				];

				let success = false;
				for (const [sceneId, controlId, value] of pixelCommands) {
					try {
						await Paws.sendSceneCommand(sceneId, controlId, value);
						console.log(`Successfully sent pixel data using ${controlId}`);
						success = true;
						break;
					} catch (error) {
						console.log(`Command ${controlId} failed:`, error);
						continue;
					}
				}

				if (!success) {
					console.warn('No pixel drawing commands succeeded');
				}
			} catch (error) {
				console.error('Failed to send pixel data:', error);
			} finally {
				setIsSending(false);
			}
		};

		let intervalId: NodeJS.Timeout;

		if (isActive && Paws.hasSceneInteraction && hasPixelDrawCapabilities) {
			intervalId = setInterval(sendPixelDraw, 5000); // Send every 5 seconds
		}

		return () => {
			clearInterval(intervalId);
		};
	}, [Paws.hasSceneInteraction, hasPixelDrawCapabilities, isActive, pixelData, Paws.sendSceneCommand]);

	const handlePixelChange = (x: number, y: number, color: string) => {
		const newPixelData = [...pixelData];
		newPixelData[x][y] = color;
		setPixelData(newPixelData);
	};

	const clearCanvas = () => {
		setPixelData([...Array(64)].map(() => Array(32).fill("#000000")));
	};

	const sendNow = async () => {
		if (!Paws.hasSceneInteraction || !hasPixelDrawCapabilities) return;
		
		setIsSending(true);
		try {
			const pixelDataString = JSON.stringify(pixelData);
			await Paws.sendSceneCommand('ID[TEST]', 'setPixelData', pixelDataString);
			console.log('Pixel data sent immediately');
		} catch (error) {
			console.error('Failed to send pixel data:', error);
		} finally {
			setIsSending(false);
		}
	};

	return (
		<PageWrapper name="PixelDraw">
			<IonContent scrollY={scrollState}>
				<ModeButton mode="PixelDrawer" />
				
				{/* Connection Status */}
				<IonCard>
					<IonCardHeader>
						<IonCardTitle>Pixel Drawing Status</IonCardTitle>
					</IonCardHeader>
					<IonCardContent>
						<IonGrid>
							<IonRow>
								<IonCol size="6">
									<IonChip color={Paws.hasSceneInteraction ? 'success' : 'warning'}>
										{Paws.hasSceneInteraction ? 'Scene Service: Available' : 'Scene Service: Not Available'}
									</IonChip>
								</IonCol>
								<IonCol size="6">
									<IonChip color={hasPixelDrawCapabilities ? 'success' : 'warning'}>
										{hasPixelDrawCapabilities ? 'Pixel Drawing: Supported' : 'Pixel Drawing: Not Supported'}
									</IonChip>
								</IonCol>
							</IonRow>
						</IonGrid>
					</IonCardContent>
				</IonCard>

				{/* Drawing Controls */}
				<IonCard>
					<IonCardHeader>
						<IonCardTitle>Drawing Controls</IonCardTitle>
					</IonCardHeader>
					<IonCardContent>
						<IonGrid>
							<IonRow>
								<IonCol size="4">
									<label>Draw Color:</label>
									<input
										type="color"
										value={drawColor}
										onChange={(event) => setDrawColor(event.target.value)}
										style={{
											width: '100%',
											height: '40px',
											border: 'none',
											borderRadius: '4px'
										}}
									/>
								</IonCol>
								<IonCol size="4">
									<IonButton 
										onClick={clearCanvas}
										expand="block"
										color="warning"
									>
										Clear Canvas
									</IonButton>
								</IonCol>
								<IonCol size="4">
									<IonButton 
										onClick={sendNow}
										expand="block"
										color="primary"
										disabled={!Paws.hasSceneInteraction || !hasPixelDrawCapabilities || isSending}
									>
										{isSending ? 'Sending...' : 'Send Now'}
									</IonButton>
								</IonCol>
							</IonRow>
						</IonGrid>
					</IonCardContent>
				</IonCard>

				{/* Pixel Grid */}
				<IonCard>
					<IonCardHeader>
						<IonCardTitle>Pixel Canvas</IonCardTitle>
					</IonCardHeader>
					<IonCardContent>
						{!Paws.hasSceneInteraction ? (
							<IonText color="warning">
								Scene Interaction Service not available. Cannot draw pixels.
							</IonText>
						) : !hasPixelDrawCapabilities ? (
							<IonText color="warning">
								Device does not support pixel drawing capabilities.
							</IonText>
						) : (
							<PixelGrid
								pixelData={pixelData}
								onPixelChange={handlePixelChange}
								drawColor={drawColor}
							/>
						)}
					</IonCardContent>
				</IonCard>

				{/* Auto-send Status */}
				<IonCard>
					<IonCardHeader>
						<IonCardTitle>Auto-send Status</IonCardTitle>
					</IonCardHeader>
					<IonCardContent>
						<IonGrid>
							<IonRow>
								<IonCol size="6">
									<IonChip color={isActive ? 'success' : 'medium'}>
										{isActive ? 'Auto-send: Enabled' : 'Auto-send: Disabled'}
									</IonChip>
								</IonCol>
								<IonCol size="6">
									<IonChip color={isSending ? 'warning' : 'success'}>
										{isSending ? 'Status: Sending' : 'Status: Ready'}
									</IonChip>
								</IonCol>
							</IonRow>
							<IonRow>
								<IonCol>
									<small>
										{isActive ? 
											'Pixel data will be automatically sent every 5 seconds' : 
											'Pixel data will only be sent when you click "Send Now"'
										}
									</small>
								</IonCol>
							</IonRow>
						</IonGrid>
					</IonCardContent>
				</IonCard>
			</IonContent>
		</PageWrapper>
	);
}

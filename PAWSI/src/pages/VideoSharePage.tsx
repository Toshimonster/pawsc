import { IonButton, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonChip, IonGrid, IonRow, IonCol, IonText } from "@ionic/react";
import { PageWrapper } from "./PageWrapper";
import React, { useContext, useEffect, useRef, useState } from "react";
import {
	PawsDeviceContext,
	PawsDeviceContextProps,
} from "../components/contexts/PawsContext";
import { ModeButton } from "../components/ModeButton";

const canvasWidth = 64;
const canvasHeight = 32;

export function VideoSharePage() {
	const Paws = useContext(PawsDeviceContext) as PawsDeviceContextProps;
	const videoRef = useRef<HTMLVideoElement | null>(null);
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const [screenSharing, setScreenSharing] = useState(false);
	const [isActive, setIsActive] = useState(true);
	const [isSending, setIsSending] = useState(false);

	// Check if we have video sharing capabilities
	const hasVideoCapabilities = Paws.capabilities.some(scene => 
		scene.capabilities.some(cap => 
			cap.name === 'setVideoData' || cap.name === 'streamVideo' || cap.name === 'updateVideo'
		)
	);

	useEffect(() => {
		const sendVideoData = async () => {
			if (!canvasRef.current || !Paws.hasSceneInteraction || !hasVideoCapabilities) return;

			setIsSending(true);
			try {
				const ctx = canvasRef.current.getContext("2d");
				if (!ctx) return;

				const imageData = ctx.getImageData(0, 0, 64, 32, {
					colorSpace: "srgb",
				}).data;

				// Convert image data to a format suitable for scene commands
				const videoData = {
					width: canvasWidth,
					height: canvasHeight,
					pixels: []
				};

				for (let i = 0; i < imageData.length; i += 4) {
					const r = imageData[i];
					const g = imageData[i + 1];
					const b = imageData[i + 2];
					const a = imageData[i + 3] / 255;

					// Apply alpha blending
					const finalR = Math.round((1 - a) * 0 + a * r);
					const finalG = Math.round((1 - a) * 0 + a * g);
					const finalB = Math.round((1 - a) * 0 + a * b);

					videoData.pixels.push({
						r: finalR,
						g: finalG,
						b: finalB
					});
				}

				const videoDataString = JSON.stringify(videoData);
				
				// Try different video commands based on available capabilities
				const videoCommands = [
					['ID[TEST]', 'setVideoData', videoDataString],
					['ID[TEST]', 'streamVideo', videoDataString],
					['ID[TEST]', 'updateVideo', videoDataString]
				];

				let success = false;
				for (const [sceneId, controlId, value] of videoCommands) {
					try {
						await Paws.sendSceneCommand(sceneId, controlId, value);
						console.log(`Successfully sent video data using ${controlId}`);
						success = true;
						break;
					} catch (error) {
						console.log(`Command ${controlId} failed:`, error);
						continue;
					}
				}

				if (!success) {
					console.warn('No video commands succeeded');
				}
			} catch (error) {
				console.error('Failed to send video data:', error);
			} finally {
				setIsSending(false);
			}
		};

		let intervalId: NodeJS.Timeout;

		if (isActive && Paws.hasSceneInteraction && hasVideoCapabilities) {
			intervalId = setInterval(sendVideoData, 5000); // Send every 5 seconds
		}

		return () => {
			clearInterval(intervalId);
		};
	}, [Paws.hasSceneInteraction, hasVideoCapabilities, isActive, Paws.sendSceneCommand]);

	useEffect(() => {
		let timeoutId: NodeJS.Timeout;

		const refreshVideo = async () => {
			if (screenSharing && videoRef.current && canvasRef.current) {
				const video = videoRef.current;
				const canvas = canvasRef.current;

				const ctx = canvas.getContext("2d");
				if (!ctx) throw Error("Canvas Context not initialised");

				ctx.imageSmoothingEnabled = false;
				ctx.drawImage(video, 0, 0, canvasWidth, canvasHeight);

				timeoutId = setTimeout(refreshVideo, 1000 / 30); // 30 FPS
			}
		};

		if (screenSharing) {
			refreshVideo();
		}

		return () => {
			if (timeoutId) clearTimeout(timeoutId);
		};
	}, [screenSharing]);

	const startScreenShare = async () => {
		try {
			const stream = await navigator.mediaDevices.getDisplayMedia({
				video: {
					width: { ideal: canvasWidth * 4 },
					height: { ideal: canvasHeight * 4 }
				}
			});

			if (videoRef.current) {
				videoRef.current.srcObject = stream;
				setScreenSharing(true);
			}
		} catch (error) {
			console.error('Failed to start screen sharing:', error);
		}
	};

	const stopScreenShare = () => {
		if (videoRef.current && videoRef.current.srcObject) {
			const stream = videoRef.current.srcObject as MediaStream;
			stream.getTracks().forEach(track => track.stop());
			videoRef.current.srcObject = null;
			setScreenSharing(false);
		}
	};

	const sendNow = async () => {
		if (!canvasRef.current || !Paws.hasSceneInteraction || !hasVideoCapabilities) return;
		
		setIsSending(true);
		try {
			const ctx = canvasRef.current.getContext("2d");
			if (!ctx) return;

			const imageData = ctx.getImageData(0, 0, 64, 32, {
				colorSpace: "srgb",
			}).data;

			const videoData = {
				width: canvasWidth,
				height: canvasHeight,
				pixels: []
			};

			for (let i = 0; i < imageData.length; i += 4) {
				const r = imageData[i];
				const g = imageData[i + 1];
				const b = imageData[i + 2];
				const a = imageData[i + 3] / 255;

				const finalR = Math.round((1 - a) * 0 + a * r);
				const finalG = Math.round((1 - a) * 0 + a * g);
				const finalB = Math.round((1 - a) * 0 + a * b);

				videoData.pixels.push({
					r: finalR,
					g: finalG,
					b: finalB
				});
			}

			const videoDataString = JSON.stringify(videoData);
			await Paws.sendSceneCommand('ID[TEST]', 'setVideoData', videoDataString);
			console.log('Video data sent immediately');
		} catch (error) {
			console.error('Failed to send video data:', error);
		} finally {
			setIsSending(false);
		}
	};

	return (
		<PageWrapper name="VideoShare">
			<IonContent>
				<ModeButton mode="VideoShare" />
				
				{/* Connection Status */}
				<IonCard>
					<IonCardHeader>
						<IonCardTitle>Video Sharing Status</IonCardTitle>
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
									<IonChip color={hasVideoCapabilities ? 'success' : 'warning'}>
										{hasVideoCapabilities ? 'Video Sharing: Supported' : 'Video Sharing: Not Supported'}
									</IonChip>
								</IonCol>
							</IonRow>
						</IonGrid>
					</IonCardContent>
				</IonCard>

				{/* Video Controls */}
				<IonCard>
					<IonCardHeader>
						<IonCardTitle>Video Controls</IonCardTitle>
					</IonCardHeader>
					<IonCardContent>
						<IonGrid>
							<IonRow>
								<IonCol size="4">
									<IonButton 
										onClick={startScreenShare}
										expand="block"
										color="primary"
										disabled={screenSharing}
									>
										Start Sharing
									</IonButton>
								</IonCol>
								<IonCol size="4">
									<IonButton 
										onClick={stopScreenShare}
										expand="block"
										color="danger"
										disabled={!screenSharing}
									>
										Stop Sharing
									</IonButton>
								</IonCol>
								<IonCol size="4">
									<IonButton 
										onClick={sendNow}
										expand="block"
										color="success"
										disabled={!Paws.hasSceneInteraction || !hasVideoCapabilities || isSending}
									>
										{isSending ? 'Sending...' : 'Send Now'}
									</IonButton>
								</IonCol>
							</IonRow>
						</IonGrid>
					</IonCardContent>
				</IonCard>

				{/* Video Display */}
				<IonCard>
					<IonCardHeader>
						<IonCardTitle>Video Display</IonCardTitle>
					</IonCardHeader>
					<IonCardContent>
						{!Paws.hasSceneInteraction ? (
							<IonText color="warning">
								Scene Interaction Service not available. Cannot share video.
							</IonText>
						) : !hasVideoCapabilities ? (
							<IonText color="warning">
								Device does not support video sharing capabilities.
							</IonText>
						) : (
							<div style={{ textAlign: 'center' }}>
								<video
									ref={videoRef}
									autoPlay
									muted
									style={{
										width: '100%',
										maxWidth: '400px',
										border: '1px solid #ccc',
										borderRadius: '4px'
									}}
								/>
								<canvas
									ref={canvasRef}
									width={canvasWidth}
									height={canvasHeight}
									style={{
										display: 'none'
									}}
								/>
							</div>
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
											'Video data will be automatically sent every 5 seconds' : 
											'Video data will only be sent when you click "Send Now"'
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

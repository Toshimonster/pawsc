import React, { useCallback, useContext, useState, useEffect } from "react";
import {
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardTitle,
	IonContent,
	IonHeader,
	IonLabel,
	IonPage,
	IonRefresher,
	IonRefresherContent,
	IonTitle,
	IonToolbar,
	IonGrid,
	IonRow,
	IonCol,
	IonChip,
	IonButton,
	IonSpinner,
	IonText,
	IonIcon,
} from "@ionic/react";
import { PawsState } from "../components/contexts/PawsDevice";
import {
	PawsDeviceContext,
	PawsDeviceContextProps,
} from "../components/contexts/PawsContext";
import { refresh } from "ionicons/icons";

export const Status = () => {
	const Paws = useContext(PawsDeviceContext) as PawsDeviceContextProps;
	const [deviceInfo, setDeviceInfo] = useState<{[key: string]: any}>({});
	const [isLoadingInfo, setIsLoadingInfo] = useState(false);

	// Load device info when component mounts or device becomes ready
	useEffect(() => {
		if (Paws.state === PawsState.READY) {
			loadDeviceInfo();
		}
	}, [Paws.state]);

	const loadDeviceInfo = async () => {
		if (!Paws.hasSceneInteraction) return;
		
		setIsLoadingInfo(true);
		try {
			// Try to get device info using scene commands
			const infoCommands = [
				['ID[TEST]', 'getTimestamp', ''],
				['ID[TEST]', 'getUptime', ''],
				['ID[TEST]', 'getCpuTemp', ''],
				['ID[TEST]', 'getCpuLoad', ''],
				['ID[TEST]', 'getNetwork', '']
			];

			// Send all info commands
			for (const [sceneId, controlId, value] of infoCommands) {
				try {
					await Paws.sendSceneCommand(sceneId, controlId, value);
				} catch (error) {
					console.log(`Command ${controlId} not supported or failed:`, error);
				}
			}
		} catch (error) {
			console.error('Failed to load device info:', error);
		} finally {
			setIsLoadingInfo(false);
		}
	};

	const IonRefresh = useCallback(
		async (e: { target: { complete: () => void } }) => {
			if (Paws.state >= PawsState.READY) {
				await loadDeviceInfo();
				e.target.complete();
			} else {
				e.target.complete();
			}
		},
		[Paws.state]
	);

	const convSec = (sec: number): string => {
		const h = Math.floor(sec / 3600);
		const m = Math.floor((sec % 3600) / 60);
		const s = Math.floor(sec % 60);
		return (
			`${h}` + `:` + `${m}`.padStart(2, "0") + `:` + `${s}`.padStart(2, "0")
		);
	};

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Machine Status</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonRefresher slot="fixed" onIonRefresh={IonRefresh}>
					<IonRefresherContent />
				</IonRefresher>

				{/* Connection Status */}
				<IonCard>
					<IonCardHeader>
						<IonCardTitle>Connection Status</IonCardTitle>
					</IonCardHeader>
					<IonCardContent>
						<IonGrid>
							<IonRow>
								<IonCol size="6">
									<IonChip color={Paws.state === PawsState.READY ? 'success' : 'warning'}>
										{Paws.state === PawsState.READY ? 'Connected' : 'Disconnected'}
									</IonChip>
								</IonCol>
								<IonCol size="6">
									<IonChip color={Paws.hasSceneInteraction ? 'success' : 'warning'}>
										{Paws.hasSceneInteraction ? 'Scene Service: Available' : 'Scene Service: Not Available'}
									</IonChip>
								</IonCol>
							</IonRow>
							<IonRow>
								<IonCol>
									<small>{Paws.detailString}</small>
								</IonCol>
							</IonRow>
						</IonGrid>
					</IonCardContent>
				</IonCard>

				{/* Device Information */}
				<IonCard>
					<IonCardHeader>
						<IonCardTitle>
							Device Information
							<IonButton 
								fill="clear" 
								size="small" 
								onClick={loadDeviceInfo}
								disabled={!Paws.hasSceneInteraction || isLoadingInfo}
								style={{ float: 'right' }}
							>
								<IonIcon icon={refresh} />
								Refresh
							</IonButton>
						</IonCardTitle>
					</IonCardHeader>
					<IonCardContent>
						{!Paws.hasSceneInteraction ? (
							<IonText color="warning">
								Scene Interaction Service not available. Cannot retrieve device information.
							</IonText>
						) : isLoadingInfo ? (
							<div style={{ textAlign: 'center', padding: '20px' }}>
								<IonSpinner />
								<p>Loading device information...</p>
							</div>
						) : (
							<IonGrid>
								<IonRow>
									<IonCol size="6">
										<IonLabel>
											<h3>Timestamp: {deviceInfo.timestamp || 'N/A'}</h3>
										</IonLabel>
									</IonCol>
									<IonCol size="6">
										<IonLabel>
											<h3>Uptime: {deviceInfo.uptime ? convSec(deviceInfo.uptime) : 'N/A'}</h3>
										</IonLabel>
									</IonCol>
								</IonRow>
								<IonRow>
									<IonCol size="6">
										<IonLabel>
											<h3>CPU Temperature: {deviceInfo.cpuTemp ? `${deviceInfo.cpuTemp.toFixed(2)}°C` : 'N/A'}</h3>
										</IonLabel>
									</IonCol>
									<IonCol size="6">
										<IonLabel>
											<h3>CPU Load: {deviceInfo.cpuLoad ? `${deviceInfo.cpuLoad.toFixed(2)}%` : 'N/A'}</h3>
										</IonLabel>
									</IonCol>
								</IonRow>
								<IonRow>
									<IonCol>
										<IonLabel>
											<h3>Network: {deviceInfo.network || 'N/A'}</h3>
										</IonLabel>
									</IonCol>
								</IonRow>
							</IonGrid>
						)}
					</IonCardContent>
				</IonCard>

				{/* Device Capabilities */}
				<IonCard>
					<IonCardHeader>
						<IonCardTitle>Device Capabilities</IonCardTitle>
					</IonCardHeader>
					<IonCardContent>
						{Paws.capabilities.length === 0 ? (
							<IonText color="medium">No capabilities discovered yet.</IonText>
						) : (
							<div>
								{Paws.capabilities.map((scene, sceneIndex) => (
									<div key={sceneIndex} style={{ marginBottom: '16px' }}>
										<h4 style={{ margin: '0 0 8px 0', color: 'var(--ion-color-primary)' }}>
											Scene: {scene.sceneId}
										</h4>
										<IonGrid>
											{scene.capabilities.map((cap, capIndex) => (
												<IonRow key={capIndex}>
													<IonCol size="4">
														<IonLabel>{cap.name}</IonLabel>
													</IonCol>
													<IonCol size="3">
														<IonChip color={cap.type === 'get' ? 'success' : cap.type === 'set' ? 'warning' : 'medium'}>
															{cap.type}
														</IonChip>
													</IonCol>
													<IonCol size="5">
														<IonLabel>{cap.description || ''}</IonLabel>
													</IonCol>
												</IonRow>
											))}
										</IonGrid>
									</div>
								))}
							</div>
						)}
					</IonCardContent>
				</IonCard>
			</IonContent>
		</IonPage>
	);
}

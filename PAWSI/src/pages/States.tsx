import React, { useCallback, useContext, useState, useEffect } from "react";
import {
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonContent,
	IonHeader,
	IonPage,
	IonProgressBar,
	IonText,
	IonTitle,
	IonToolbar,
	IonButton,
	IonChip,
	IonGrid,
	IonRow,
	IonCol,
	IonLabel,
	IonSpinner,
	IonIcon,
} from "@ionic/react";
import { StateButtonList } from "../components/StateButtonList";
import {
	PawsDeviceContext,
	PawsDeviceContextProps,
} from "../components/contexts/PawsContext";
import { PawsState } from "../components/contexts/PawsDevice";
import { ModeButton } from "../components/ModeButton";
import { refresh } from "ionicons/icons";

export interface State {
	name: string;
	image: string;
}

export function States() {
	const Paws = useContext(PawsDeviceContext) as PawsDeviceContextProps;
	const [currentState, setCurrentState] = useState<string>('');
	const [stateWaiting, setStateWaiting] = useState(false);
	const [isLoadingStates, setIsLoadingStates] = useState(false);

	// Load states when component mounts or device becomes ready
	useEffect(() => {
		console.log(`🔍 States page - Device state: ${Paws.state}, hasSceneInteraction: ${Paws.hasSceneInteraction}, states: ${Paws.states}`);
		if (Paws.state === PawsState.READY && Paws.hasSceneInteraction) {
			console.log('✅ States page - Device ready and scene interaction available, loading states...');
			loadStates();
		} else if (Paws.state === PawsState.READY && !Paws.hasSceneInteraction) {
			console.log('⚠️ States page - Device ready but NO scene interaction available');
		}
	}, [Paws.state, Paws.hasSceneInteraction, Paws.states]);

	const loadStates = async () => {
		if (!Paws.hasSceneInteraction) return;

		setIsLoadingStates(true);
		try {
			// Send getStateList command to get available states
			await Paws.sendSceneCommand('ID[TEST]', 'getStateList', '');

			// Also get current state
			await Paws.sendSceneCommand('ID[TEST]', 'getState', '');

		} catch (error) {
			console.error('Failed to load states:', error);
		} finally {
			setIsLoadingStates(false);
		}
	};

	// Create state map with default images
	const createStateMap = (stateNames: string[] | undefined) => {
		const stateMap = new Map<string, string>();

		// Default state images
		const defaultImages = {
			'Idle': 'https://i.imgur.com/I0ntbMh.gif',
			'Happy': 'https://media.discordapp.net/attachments/698284725663563918/910905415020208138/Happyface_mirror.gif',
			'Angry': 'https://media.discordapp.net/attachments/698284725663563918/905941664256901151/Angryface_single.gif',
			'Cry': 'https://i.imgur.com/Lv0Tdce.gif',
			'Bluescreen': 'https://i.imgur.com/GtJq0hN.gif',
			'Boop': 'https://i.imgur.com/5lOE7oS.gif',
			'Confused': 'https://i.imgur.com/4tMMong.gif',
			'Hello': 'https://i.imgur.com/bNNthtT.gif',
			'NoToast': 'https://i.imgur.com/IXvvkU6.gif',
			'Overheat': 'https://i.imgur.com/b4yDtBo.gif',
		};

		stateNames?.forEach(stateName => {
			stateMap.set(stateName, defaultImages[stateName as keyof typeof defaultImages] ||
				'https://cdnb.artstation.com/p/assets/images/images/038/071/029/original/glen-rankin-enemyidle.gif');
		});

		return stateMap;
	};

	const stateMap = createStateMap(Paws.states);
	const allStates: State[] = (Paws.states ?? []).map((state: string) => ({
		name: state,
		image: stateMap.get(state) || 'https://cdnb.artstation.com/p/assets/images/images/038/071/029/original/glen-rankin-enemyidle.gif'
	}));

	const toggleState = useCallback(
		async (state: State) => {
			if (stateWaiting || !Paws.hasSceneInteraction) return;

			setStateWaiting(true);
			try {
				await Paws.sendSceneCommand('ID[TEST]', 'setState', state.name);
				setCurrentState(state.name);
			} catch (error) {
				console.error('Failed to set state:', error);
			} finally {
				setStateWaiting(false);
			}
		},
		[Paws.sendSceneCommand, Paws.hasSceneInteraction, stateWaiting]
	);

	// Check if we have scene interaction capabilities
	const hasStateCapabilities = Paws.capabilities.some(scene =>
		scene.capabilities.some(cap =>
			cap.name === 'getStateList' || cap.name === 'setState' || cap.name === 'getState'
		)
	) && Paws.states.length > 0;

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>State List</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<ModeButton mode="States" />

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

				{/* State Management */}
				<IonCard>
					<IonCardHeader>
						<IonCardTitle>
							State Management
							<IonButton
								fill="clear"
								size="small"
								onClick={loadStates}
								disabled={!Paws.hasSceneInteraction || isLoadingStates}
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
								Scene Interaction Service not available. Cannot manage states.
							</IonText>
						) : !hasStateCapabilities ? (
							<IonText color="warning">
								Device does not support state management capabilities.
							</IonText>
						) : isLoadingStates ? (
							<div style={{ textAlign: 'center', padding: '20px' }}>
								<IonSpinner />
								<p>Loading states...</p>
							</div>
						) : Paws.states.length === 0 ? (
							<IonText color="medium">
								No states available. Click Refresh to discover device states.
							</IonText>
						) : (
							<div>
								{currentState && (
									<IonChip color="primary" style={{ marginBottom: '16px' }}>
										Current State: {currentState}
									</IonChip>
								)}
								<StateButtonList
									states={allStates}
									onStateClick={toggleState}
									disabled={stateWaiting}
								/>
							</div>
						)}
					</IonCardContent>
				</IonCard>

				{/* Device Capabilities Info */}
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
													<IonCol size="6">
														<IonChip color={cap.type === 'get' ? 'success' : cap.type === 'set' ? 'warning' : 'medium'}>
															{cap.type}
														</IonChip>
													</IonCol>
													<IonCol size="2">
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

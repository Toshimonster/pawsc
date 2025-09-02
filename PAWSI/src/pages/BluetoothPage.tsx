import React, { useState, useEffect } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonSpinner,
  IonAlert,
  IonToast,
} from '@ionic/react';
import { bluetooth, bluetoothOutline, checkmarkCircle, closeCircle, refresh } from 'ionicons/icons';
import { useDevice } from '../components/contexts/DeviceProvider';

const BluetoothPage: React.FC = () => {
  const {
    deviceManager,
    state,
    stateDetail,
    isConnecting,
    connect,
    disconnect,
    reconnect,
    reset
  } = useDevice();
  
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [showDisconnectToast] = useState(false);

  	// DeviceProvider handles all state management automatically
	// We just need to listen for specific events for UI feedback
	useEffect(() => {
		const handleStateChange = (newState: any, detail?: string) => {
			// Show alert for failed connections
			if (newState === 0) { // FAILED state
				setAlertMessage(detail || 'Connection failed');
				setShowAlert(true);
			}
		};

		const handleDeviceDisconnected = (message: string) => {
			setShowDisconnectToast(true);
		};

		deviceManager.subscribe('stateChange', handleStateChange);
		deviceManager.subscribe('deviceDisconnected', handleDeviceDisconnected);

		return () => {
			deviceManager.unsubscribe('stateChange', handleStateChange);
			deviceManager.unsubscribe('deviceDisconnected', handleDeviceDisconnected);
		};
	}, [deviceManager]);

  // DeviceProvider handles all connection logic automatically

  const getStateIcon = () => {
    switch (state) {
      case 8: // READY
        return checkmarkCircle;
      case 0: // FAILED
      case 1: // NO_BLUETOOTH
        return closeCircle;
      default:
        return bluetoothOutline;
    }
  };

  const getStateColor = () => {
    switch (state) {
      case 8: // READY
        return 'success';
      case 0: // FAILED
      case 1: // NO_BLUETOOTH
        return 'danger';
      default:
        return 'medium';
    }
  };

  	const getStateText = () => {
		switch (state) {
			case 3: // UNDEFINED
				return 'Not Connected';
			case 4: // CHECKING_REQUIREMENTS
				return 'Checking Bluetooth...';
			case 5: // FINDING_DEVICE
				return 'Searching for PAWSC device...';
			case 6: // CONNECTING
				return 'Connecting...';
			case 7: // INITIALISING
				return 'Initializing...';
			case 8: // READY
				return 'Connected';
			case 9: // DISCONNECTED
				return 'Disconnected';
			case 0: // FAILED
				return 'Connection Failed';
			case 2: // NO_DEVICE_FOUND
				return 'No Device Found';
			case 1: // NO_BLUETOOTH
				return 'Bluetooth Not Available';
			default:
				return 'Unknown State';
		}
	};

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>PAWSC Bluetooth</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              <IonIcon icon={bluetooth} style={{ marginRight: '8px' }} />
              Device Status
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <IonIcon 
                icon={getStateIcon()} 
                color={getStateColor()}
                style={{ fontSize: '48px', marginBottom: '16px' }}
              />
              <h2>{getStateText()}</h2>
              {stateDetail && <p>{stateDetail}</p>}
            </div>

            			<div style={{ textAlign: 'center' }}>
				{state === 3 || state === 9 ? ( // UNDEFINED or DISCONNECTED
					<IonButton 
						expand="block" 
						onClick={connect}
						disabled={isConnecting}
					>
						{isConnecting ? (
							<>
								<IonSpinner name="crescent" />
								Connecting...
							</>
						) : (
							'Connect to PAWSC'
						)}
					</IonButton>
				) : state === 2 || state === 0 ? ( // NO_DEVICE_FOUND or FAILED
					<>
						<IonButton 
							expand="block" 
							onClick={connect}
							color="primary"
							style={{ marginBottom: '8px' }}
						>
							<IonIcon icon={refresh} slot="start" />
							Retry Connection
						</IonButton>
						<IonButton 
							expand="block" 
							fill="outline"
							onClick={reset}
						>
							Reset Connection
						</IonButton>
					</>
				) : state === 9 ? ( // DISCONNECTED
					<>
						<IonButton 
							expand="block" 
							onClick={reconnect}
							color="warning"
							style={{ marginBottom: '8px' }}
						>
							<IonIcon icon={refresh} slot="start" />
							Reconnect
						</IonButton>
						<IonButton 
							expand="block" 
							fill="outline"
							onClick={reset}
						>
							Start Over
						</IonButton>
					</>
				) : state === 8 ? ( // READY
					<>
						<IonButton 
							expand="block" 
							color="success"
							routerLink="/dashboard"
							style={{ marginBottom: '8px' }}
						>
							Go to Dashboard
						</IonButton>
						<IonButton 
							expand="block" 
							fill="outline"
							color="warning"
							onClick={disconnect}
						>
							Disconnect
						</IonButton>
					</>
				) : null}
			</div>
          </IonCardContent>
        </IonCard>

        					<IonCard>
				<IonCardHeader>
					<IonCardTitle>Connection Information</IonCardTitle>
				</IonCardHeader>
				<IonCardContent>
					<IonList>
						<IonItem>
							<IonLabel>
								<h3>Current State</h3>
								<p>{getStateText()}</p>
							</IonLabel>
						</IonItem>
						{stateDetail && (
							<IonItem>
								<IonLabel>
									<h3>Details</h3>
									<p>{stateDetail}</p>
								</IonLabel>
							</IonItem>
						)}
						<IonItem>
							<IonLabel>
								<h3>Connection Status</h3>
								<p>
									{state === 8 ? '🟢 Connected' : 
									 state === 9 ? '🔴 Disconnected' :
									 state === 6 || state === 7 ? '🟡 Connecting...' : // CONNECTING or INITIALISING
									 '⚪ Not Connected'}
								</p>
							</IonLabel>
						</IonItem>
					</IonList>
				</IonCardContent>
			</IonCard>

		{/* Troubleshooting Help */}
		{(state === 2 || state === 0 || state === 9) && ( // NO_DEVICE_FOUND, FAILED, or DISCONNECTED
			<IonCard>
				<IonCardHeader>
					<IonCardTitle>Troubleshooting</IonCardTitle>
				</IonCardHeader>
				<IonCardContent>
					<ul style={{ margin: 0, paddingLeft: '20px' }}>
						{state === 9 ? ( // DISCONNECTED
							<>
								<li>Your device was disconnected unexpectedly</li>
								<li>Try reconnecting to resume the session</li>
								<li>Check if the device is still powered on</li>
								<li>Ensure the device is still in range</li>
								<li>If problems persist, start over with a fresh connection</li>
							</>
						) : (
							<>
								<li>Ensure your PAWSC device is powered on</li>
								<li>Check that the device is within Bluetooth range</li>
								<li>Verify Bluetooth is enabled on your phone</li>
								<li>Try moving closer to the device</li>
								<li>Restart the PAWSC device if needed</li>
							</>
						)}
					</ul>
					<div style={{ marginTop: '16px', textAlign: 'center' }}>
						{state === 9 ? ( // DISCONNECTED
							<IonButton 
								size="small" 
								fill="outline"
								onClick={reconnect}
							>
								<IonIcon icon={refresh} slot="start" />
								Reconnect
							</IonButton>
						) : (
							<IonButton 
								size="small" 
								fill="outline"
								onClick={connect}
							>
								<IonIcon icon={refresh} slot="start" />
								Try Again
							</IonButton>
						)}
					</div>
				</IonCardContent>
			</IonCard>
		)}

        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header="Connection Error"
          message={alertMessage}
          buttons={['OK']}
        />

        <IonToast
          isOpen={state === 8} // READY state
          onDidDismiss={() => {}}
          message="Successfully connected to PAWSC device!"
          duration={3000}
          color="success"
        />

        <IonToast
          isOpen={showDisconnectToast}
          onDidDismiss={() => setShowDisconnectToast(false)}
          message="Device disconnected"
          duration={3000}
          color="warning"
        />
      </IonContent>
    </IonPage>
  );
};

export default BluetoothPage;

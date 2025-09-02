import React, { useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon,
  IonChip,
  IonGrid,
  IonRow,
  IonCol,

  IonToast,
  IonRefresher,
  IonRefresherContent,
} from '@ionic/react';
import { 
  informationCircle, 
  play, 
  settings, 
  gameController,
  refresh,
  bluetooth
} from 'ionicons/icons';
import { useDevice } from '../components/contexts/DeviceProvider';

interface DeviceInfo {
  timestamp: string;
  uptime: string;
  cpuTemp: string;
  cpuLoad: string;
  network: string;
}

const DashboardPage: React.FC = () => {
  const {
    isConnected,
    activeScene,
    sceneList,
    capabilities,
    sceneState,
    deviceInfo,
    changeScene,
    refreshData
  } = useDevice();
  
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  	// No useEffect needed - DeviceProvider handles all state management

  	// DeviceProvider handles all data loading automatically

  	const handleSceneChange = async (sceneId: string) => {
		try {
			await changeScene(sceneId);
			setToastMessage(`Scene changed to: ${sceneId}`);
			setShowToast(true);
		} catch (error) {
			console.error('Error changing scene:', error);
			setToastMessage('Failed to change scene');
			setShowToast(true);
		}
	};

  const handleRefresh = (event: CustomEvent) => {
    refreshData().finally(() => {
      event.detail.complete();
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>PAWSC Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {isConnected && (
          <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
            <IonRefresherContent />
          </IonRefresher>
        )}

        <div className="ion-padding">
          {/* Connection Status */}
          {!isConnected && (
            <IonCard color="warning">
              <IonCardContent>
                <div style={{ textAlign: 'center', padding: '20px 0' }}>
                  <IonIcon 
                    icon={bluetooth} 
                    style={{ fontSize: '48px', marginBottom: '16px' }}
                    color="warning"
                  />
                  <h2>Not Connected</h2>
                  <p>Please connect to a PAWSC device to view dashboard information.</p>
                  <IonButton 
                    expand="block" 
                    routerLink="/bluetooth"
                    color="warning"
                  >
                    Go to Connection
                  </IonButton>
                </div>
              </IonCardContent>
            </IonCard>
          )}

                    {/* Active Scene Card */}
          {isConnected && (
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>
                  <IonIcon icon={play} style={{ marginRight: '8px' }} />
                  Active Scene
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonItem>
                  <IonLabel>
                    <h2>{activeScene || 'No scene active'}</h2>
                    <p>Current active scene</p>
                  </IonLabel>
                </IonItem>
                
                {activeScene && (
                  <IonItem>
                    <IonLabel>
                      <h3>Scene State</h3>
                      <p>{sceneState}</p>
                    </IonLabel>
                  </IonItem>
                )}
                
                {capabilities.length > 0 && (
                  <div style={{ marginTop: '16px' }}>
                    <h3>Capabilities:</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {capabilities.map((capability, index) => (
                        <IonChip key={index} color="primary">
                          {capability}
                        </IonChip>
                      ))}
                    </div>
                  </div>
                )}
              </IonCardContent>
            </IonCard>
          )}

          {/* Scene Selection Card */}
          {isConnected && (
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>
                  <IonIcon icon={gameController} style={{ marginRight: '8px' }} />
                  Available Scenes
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonList>
                  {sceneList.map((scene, index) => (
                    <IonItem key={index} button onClick={() => handleSceneChange(scene)}>
                      <IonLabel>
                        <h3>{scene}</h3>
                        <p>Click to activate</p>
                      </IonLabel>
                      {scene === activeScene && (
                        <IonIcon icon={play} color="success" slot="end" />
                      )}
                    </IonItem>
                  ))}
                </IonList>
              </IonCardContent>
            </IonCard>
          )}

          {/* Device Information Card */}
          {isConnected && (
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>
                  <IonIcon icon={informationCircle} style={{ marginRight: '8px' }} />
                  Device Information
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonGrid>
                  <IonRow>
                    <IonCol size="6">
                      <IonItem>
                        <IonLabel>
                          <h3>Timestamp</h3>
                          <p>{deviceInfo.timestamp || 'N/A'}</p>
                        </IonLabel>
                      </IonItem>
                    </IonCol>
                    <IonCol size="6">
                      <IonItem>
                        <IonLabel>
                          <h3>Uptime</h3>
                          <p>{deviceInfo.uptime || 'N/A'}</p>
                        </IonLabel>
                      </IonItem>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol size="6">
                      <IonItem>
                        <IonLabel>
                          <h3>CPU Temp</h3>
                          <p>{deviceInfo.cpuTemp || 'N/A'}</p>
                        </IonLabel>
                      </IonItem>
                    </IonCol>
                    <IonCol size="6">
                      <IonItem>
                        <IonLabel>
                          <h3>CPU Load</h3>
                          <p>{deviceInfo.cpuLoad || 'N/A'}</p>
                        </IonLabel>
                      </IonItem>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol size="12">
                      <IonItem>
                        <IonLabel>
                          <h3>Network</h3>
                          <p>{deviceInfo.network || 'N/A'}</p>
                        </IonLabel>
                      </IonItem>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonCardContent>
            </IonCard>
          )}

          {/* Quick Actions */}
          {isConnected && (
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Quick Actions</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonGrid>
                  <IonRow>
                    <IonCol size="6">
                      <IonButton 
                        expand="block" 
                        routerLink="/scene-control"
                        color="primary"
                      >
                        <IonIcon icon={gameController} slot="start" />
                        Scene Control
                      </IonButton>
                    </IonCol>
                    <IonCol size="6">
                      <IonButton 
                        expand="block" 
                        routerLink="/test-mode"
                        color="secondary"
                      >
                        <IonIcon icon={settings} slot="start" />
                        Test Mode
                      </IonButton>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonCardContent>
            </IonCard>
          )}
        </div>

        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message={toastMessage}
          duration={3000}
          color="primary"
        />
      </IonContent>
    </IonPage>
  );
};

export default DashboardPage;

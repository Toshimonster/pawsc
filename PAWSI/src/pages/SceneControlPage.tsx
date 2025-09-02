import React, { useState, useEffect } from 'react';
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
  IonButton,
  IonIcon,
  IonChip,
  IonGrid,
  IonRow,
  IonCol,
  IonToast,
  IonAlert,
  IonSpinner,
  IonItem,
  IonLabel,
  IonList,
  IonItemDivider,
  IonBadge,
  IonFab,
  IonFabButton,
  IonActionSheet,
} from '@ionic/react';
import { 
  play, 
  pause, 
  stop, 
  refresh, 
  settings, 
  gameController,
  add,
  informationCircle,
  warning
} from 'ionicons/icons';
import { PawscDeviceManager } from '../components/contexts/PawscDeviceManager';

interface SceneCapability {
  id: string;
  type: string;
  description?: string;
  currentValue?: any;
}

interface Scene {
  id: string;
  name: string;
  capabilities: SceneCapability[];
  isActive: boolean;
}

const SceneControlPage: React.FC = () => {
  const [deviceManager] = useState(() => PawscDeviceManager.getInstance());
  const [scenes, setScenes] = useState<Scene[]>([]);
  const [activeScene, setActiveScene] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [showActionSheet, setShowActionSheet] = useState(false);
  const [selectedScene, setSelectedScene] = useState<Scene | null>(null);

  useEffect(() => {
    loadScenes();
  }, []);

  const loadScenes = async () => {
    try {
      setLoading(true);
      
      const [sceneList, activeSceneData] = await Promise.all([
        deviceManager.getSceneList(),
        deviceManager.getActiveScene(),
      ]);

      // Create scene objects with placeholder capabilities
      const sceneObjects: Scene[] = sceneList.map(sceneId => ({
        id: sceneId,
        name: sceneId,
        capabilities: [], // Will be loaded when scene is selected
        isActive: sceneId === activeSceneData,
      }));

      setScenes(sceneObjects);
      setActiveScene(activeSceneData);

      // Load capabilities for active scene
      if (activeSceneData) {
        await loadSceneCapabilities(activeSceneData);
      }
    } catch (error) {
      console.error('Error loading scenes:', error);
      setAlertMessage('Failed to load scenes');
      setShowAlert(true);
    } finally {
      setLoading(false);
    }
  };

  const loadSceneCapabilities = async (sceneId: string) => {
    try {
      const capabilities = await deviceManager.getActiveSceneCapabilities();
      
      // Create capability objects (this is a simplified version)
      const capabilityObjects: SceneCapability[] = capabilities.map(capId => ({
        id: capId,
        type: 'generic', // In a real implementation, you'd get this from the device
        description: `Capability: ${capId}`,
      }));

      setScenes(prev => prev.map(scene => 
        scene.id === sceneId 
          ? { ...scene, capabilities: capabilityObjects }
          : scene
      ));
    } catch (error) {
      console.error('Error loading capabilities:', error);
    }
  };

  const handleSceneActivation = async (sceneId: string) => {
    try {
      await deviceManager.setActiveScene(sceneId);
      setActiveScene(sceneId);
      
      // Update scene states
      setScenes(prev => prev.map(scene => ({
        ...scene,
        isActive: scene.id === sceneId
      })));

      // Load capabilities for the new active scene
      await loadSceneCapabilities(sceneId);
      
      setToastMessage(`Activated scene: ${sceneId}`);
      setShowToast(true);
    } catch (error) {
      console.error('Error activating scene:', error);
      setAlertMessage('Failed to activate scene');
      setShowAlert(true);
    }
  };

  const handleSceneAction = (scene: Scene, action: string) => {
    setSelectedScene(scene);
    setShowActionSheet(true);
  };

  const executeSceneAction = async (action: string) => {
    if (!selectedScene) return;

    try {
      switch (action) {
        case 'activate':
          await handleSceneActivation(selectedScene.id);
          break;
        case 'refresh':
          await loadSceneCapabilities(selectedScene.id);
          setToastMessage(`Refreshed scene: ${selectedScene.id}`);
          setShowToast(true);
          break;
        case 'info':
          // Show scene information (could open a modal)
          setToastMessage(`Scene: ${selectedScene.id} - ${selectedScene.capabilities.length} capabilities`);
          setShowToast(true);
          break;
      }
    } catch (error) {
      console.error('Error executing action:', error);
      setAlertMessage('Failed to execute action');
      setShowAlert(true);
    }
  };

  const sendCapabilityCommand = async (sceneId: string, capabilityId: string, value: any) => {
    try {
      const valueBytes = new TextEncoder().encode(JSON.stringify(value));
      await deviceManager.sendSceneCommand(sceneId, capabilityId, valueBytes);
      
      setToastMessage(`Command sent to ${capabilityId}`);
      setShowToast(true);
    } catch (error) {
      console.error('Error sending command:', error);
      setAlertMessage('Failed to send command');
      setShowAlert(true);
    }
  };

  if (loading) {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Scene Control</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <div style={{ textAlign: 'center', padding: '50px 0' }}>
            <IonSpinner name="crescent" />
            <p>Loading scenes...</p>
          </div>
        </IonContent>
      </IonPage>
    );
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Scene Control</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="ion-padding">
          {/* Active Scene Status */}
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>
                <IonIcon icon={play} style={{ marginRight: '8px' }} />
                Active Scene
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              {activeScene ? (
                <div>
                  <h2>{activeScene}</h2>
                  <p>Currently active scene</p>
                  <IonButton
                    size="small"
                    color="secondary"
                    onClick={() => loadSceneCapabilities(activeScene)}
                  >
                    <IonIcon icon={refresh} slot="start" />
                    Refresh Capabilities
                  </IonButton>
                </div>
              ) : (
                <p>No scene currently active</p>
              )}
            </IonCardContent>
          </IonCard>

          {/* Scene List */}
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>
                <IonIcon icon={gameController} style={{ marginRight: '8px' }} />
                Available Scenes
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              {scenes.length > 0 ? (
                <IonList>
                  {scenes.map((scene, index) => (
                    <React.Fragment key={scene.id}>
                      <IonItem>
                        <IonLabel>
                          <h2>{scene.name}</h2>
                          <p>
                            {scene.capabilities.length} capabilities
                            {scene.isActive && (
                              <IonBadge color="success" style={{ marginLeft: '8px' }}>
                                Active
                              </IonBadge>
                            )}
                          </p>
                        </IonLabel>
                        <IonButton
                          slot="end"
                          fill="clear"
                          onClick={() => handleSceneAction(scene, 'menu')}
                        >
                          <IonIcon icon={settings} />
                        </IonButton>
                      </IonItem>
                      
                      {/* Show capabilities if this is the active scene */}
                      {scene.isActive && scene.capabilities.length > 0 && (
                        <IonItem>
                          <IonLabel>
                            <h3>Capabilities:</h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' }}>
                              {scene.capabilities.map((capability, capIndex) => (
                                <IonChip 
                                  key={capIndex} 
                                  color="primary"
                                  onClick={() => sendCapabilityCommand(scene.id, capability.id, 'test')}
                                >
                                  {capability.id}
                                </IonChip>
                              ))}
                            </div>
                          </IonLabel>
                        </IonItem>
                      )}
                      
                      {index < scenes.length - 1 && <IonItemDivider />}
                    </React.Fragment>
                  ))}
                </IonList>
              ) : (
                <p>No scenes available</p>
              )}
            </IonCardContent>
          </IonCard>

          {/* Quick Actions */}
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
                      color="primary"
                      onClick={() => loadScenes()}
                    >
                      <IonIcon icon={refresh} slot="start" />
                      Refresh All
                    </IonButton>
                  </IonCol>
                  <IonCol size="6">
                    <IonButton
                      expand="block"
                      color="secondary"
                      routerLink="/test-mode"
                    >
                      <IonIcon icon={settings} slot="start" />
                      Test Mode
                    </IonButton>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCardContent>
          </IonCard>

          {/* Help Information */}
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>
                <IonIcon icon={informationCircle} style={{ marginRight: '8px' }} />
                Scene Control Information
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p>
                <strong>Scene Control</strong> allows you to manage and control different scenes on your PAWSC device.
              </p>
              <ul>
                <li><strong>Activate:</strong> Switch to a different scene</li>
                <li><strong>Capabilities:</strong> View and interact with scene-specific capabilities</li>
                <li><strong>Refresh:</strong> Update scene information and capabilities</li>
              </ul>
              <p>
                <em>Click on capability chips to send test commands. Use Test Mode for advanced command sending.</em>
              </p>
            </IonCardContent>
          </IonCard>
        </div>

        {/* Action Sheet for Scene Actions */}
        <IonActionSheet
          isOpen={showActionSheet}
          onDidDismiss={() => setShowActionSheet(false)}
          header="Scene Actions"
          buttons={[
            {
              text: 'Activate Scene',
              icon: play,
              handler: () => executeSceneAction('activate'),
            },
            {
              text: 'Refresh Capabilities',
              icon: refresh,
              handler: () => executeSceneAction('refresh'),
            },
            {
              text: 'Scene Information',
              icon: informationCircle,
              handler: () => executeSceneAction('info'),
            },
            {
              text: 'Cancel',
              role: 'cancel',
            },
          ]}
        />

        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header="Error"
          message={alertMessage}
          buttons={['OK']}
        />

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

export default SceneControlPage;

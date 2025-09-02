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
  IonInput,
  IonLabel,
  IonButton,
  IonIcon,
  IonTextarea,
  IonSelect,
  IonSelectOption,
  IonItem,
  IonGrid,
  IonRow,
  IonCol,
  IonToast,
  IonAlert,
  IonChip,
  IonList,
  IonItemDivider,
} from '@ionic/react';
import { 
  send, 
  code, 
  play, 
  settings,
  informationCircle,
  warning
} from 'ionicons/icons';
import { PawscDeviceManager } from '../components/contexts/PawscDeviceManager';

interface TestCommand {
  sceneId: string;
  controlId: string;
  value: string;
  timestamp: Date;
}

const TestModePage: React.FC = () => {
  const [deviceManager] = useState(() => PawscDeviceManager.getInstance());
  const [activeScene, setActiveScene] = useState<string>('');
  const [capabilities, setCapabilities] = useState<string[]>([]);
  const [sceneList, setSceneList] = useState<string[]>([]);
  
  // Test command form
  const [selectedScene, setSelectedScene] = useState<string>('');
  const [controlId, setControlId] = useState<string>('');
  const [commandValue, setCommandValue] = useState<string>('');
  const [valueType, setValueType] = useState<'string' | 'hex' | 'number'>('string');
  
  // Command history
  const [commandHistory, setCommandHistory] = useState<TestCommand[]>([]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    loadDeviceData();
  }, []);

  const loadDeviceData = async () => {
    try {
      const [sceneListData, activeSceneData, capabilitiesData] = await Promise.all([
        deviceManager.getSceneList(),
        deviceManager.getActiveScene(),
        deviceManager.getActiveSceneCapabilities(),
      ]);

      setSceneList(sceneListData);
      setActiveScene(activeSceneData);
      setCapabilities(capabilitiesData);
      
      if (activeSceneData && !selectedScene) {
        setSelectedScene(activeSceneData);
      }
    } catch (error) {
      console.error('Error loading device data:', error);
      setAlertMessage('Failed to load device data');
      setShowAlert(true);
    }
  };

  const convertValueToBytes = (value: string, type: 'string' | 'hex' | 'number'): Uint8Array => {
    switch (type) {
      case 'string':
        return new TextEncoder().encode(value);
      case 'hex':
        // Remove spaces and convert hex string to bytes
        const cleanHex = value.replace(/\s/g, '');
        if (cleanHex.length % 2 !== 0) {
          throw new Error('Hex string must have even length');
        }
        const bytes = new Uint8Array(cleanHex.length / 2);
        for (let i = 0; i < cleanHex.length; i += 2) {
          bytes[i / 2] = parseInt(cleanHex.substr(i, 2), 16);
        }
        return bytes;
      case 'number':
        const num = parseInt(value, 10);
        if (isNaN(num)) {
          throw new Error('Invalid number');
        }
        return new Uint8Array([num]);
      default:
        return new Uint8Array([]);
    }
  };

  const sendTestCommand = async () => {
    if (!selectedScene || !controlId) {
      setAlertMessage('Please fill in all required fields');
      setShowAlert(true);
      return;
    }

    try {
      const valueBytes = convertValueToBytes(commandValue, valueType);
      
      await deviceManager.sendSceneCommand(selectedScene, controlId, valueBytes);
      
      // Add to command history
      const newCommand: TestCommand = {
        sceneId: selectedScene,
        controlId,
        value: commandValue,
        timestamp: new Date(),
      };
      
      setCommandHistory(prev => [newCommand, ...prev.slice(0, 9)]); // Keep last 10 commands
      
      setToastMessage(`Command sent: ${selectedScene}:${controlId}`);
      setShowToast(true);
      
      // Clear form
      setControlId('');
      setCommandValue('');
    } catch (error) {
      console.error('Error sending command:', error);
      setAlertMessage(`Failed to send command: ${error}`);
      setShowAlert(true);
    }
  };

  const getValueTypePlaceholder = () => {
    switch (valueType) {
      case 'string':
        return 'Enter text value';
      case 'hex':
        return 'Enter hex value (e.g., FF 00 01)';
      case 'number':
        return 'Enter number value';
      default:
        return 'Enter value';
    }
  };

  const formatBytes = (bytes: Uint8Array): string => {
    return Array.from(bytes).map(b => b.toString(16).padStart(2, '0').toUpperCase()).join(' ');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Test Mode</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="ion-padding">
          {/* Current Scene Info */}
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>
                <IonIcon icon={play} style={{ marginRight: '8px' }} />
                Current Scene: {activeScene || 'None'}
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              {capabilities.length > 0 ? (
                <div>
                  <h3>Available Capabilities:</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {capabilities.map((capability, index) => (
                      <IonChip key={index} color="primary">
                        {capability}
                      </IonChip>
                    ))}
                  </div>
                </div>
              ) : (
                <p>No capabilities available for current scene</p>
              )}
            </IonCardContent>
          </IonCard>

          {/* Test Command Form */}
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>
                <IonIcon icon={code} style={{ marginRight: '8px' }} />
                Send Test Command
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonGrid>
                <IonRow>
                  <IonCol size="12">
                    <IonItem>
                      <IonLabel position="stacked">Scene ID *</IonLabel>
                      <IonSelect
                        value={selectedScene}
                        onIonChange={e => setSelectedScene(e.detail.value)}
                        placeholder="Select scene"
                      >
                        {sceneList.map((scene, index) => (
                          <IonSelectOption key={index} value={scene}>
                            {scene}
                          </IonSelectOption>
                        ))}
                      </IonSelect>
                    </IonItem>
                  </IonCol>
                </IonRow>

                <IonRow>
                  <IonCol size="12">
                    <IonItem>
                      <IonLabel position="stacked">Control/Event ID *</IonLabel>
                      <IonInput
                        value={controlId}
                        onIonInput={e => setControlId(e.detail.value!)}
                        placeholder="Enter control ID"
                        clearInput
                      />
                    </IonItem>
                  </IonCol>
                </IonRow>

                <IonRow>
                  <IonCol size="6">
                    <IonItem>
                      <IonLabel position="stacked">Value Type</IonLabel>
                      <IonSelect
                        value={valueType}
                        onIonChange={e => setValueType(e.detail.value)}
                      >
                        <IonSelectOption value="string">String</IonSelectOption>
                        <IonSelectOption value="hex">Hex</IonSelectOption>
                        <IonSelectOption value="number">Number</IonSelectOption>
                      </IonSelect>
                    </IonItem>
                  </IonCol>
                  <IonCol size="6">
                    <IonItem>
                      <IonLabel position="stacked">Value</IonLabel>
                      <IonInput
                        value={commandValue}
                        onIonInput={e => setCommandValue(e.detail.value!)}
                        placeholder={getValueTypePlaceholder()}
                        clearInput
                      />
                    </IonItem>
                  </IonCol>
                </IonRow>

                <IonRow>
                  <IonCol size="12">
                    <IonButton
                      expand="block"
                      onClick={sendTestCommand}
                      disabled={!selectedScene || !controlId}
                    >
                      <IonIcon icon={send} slot="start" />
                      Send Command
                    </IonButton>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCardContent>
          </IonCard>

          {/* Command History */}
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>
                <IonIcon icon={informationCircle} style={{ marginRight: '8px' }} />
                Command History
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              {commandHistory.length > 0 ? (
                <IonList>
                  {commandHistory.map((command, index) => (
                    <React.Fragment key={index}>
                      <IonItem>
                        <IonLabel>
                          <h3>{command.sceneId}:{command.controlId}</h3>
                          <p>Value: {command.value}</p>
                          <p>Time: {command.timestamp.toLocaleTimeString()}</p>
                        </IonLabel>
                      </IonItem>
                      {index < commandHistory.length - 1 && <IonItemDivider />}
                    </React.Fragment>
                  ))}
                </IonList>
              ) : (
                <p>No commands sent yet</p>
              )}
            </IonCardContent>
          </IonCard>

          {/* Help Information */}
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>
                <IonIcon icon={warning} style={{ marginRight: '8px' }} />
                Test Mode Information
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p>
                <strong>Test Mode</strong> allows you to send generic commands to test scene capabilities.
              </p>
              <ul>
                <li><strong>Scene ID:</strong> The target scene to send the command to</li>
                <li><strong>Control ID:</strong> The specific capability or control to activate</li>
                <li><strong>Value:</strong> The data to send (string, hex, or number)</li>
              </ul>
              <p>
                <em>Note: This mode is for testing purposes. Make sure you understand the scene capabilities before sending commands.</em>
              </p>
            </IonCardContent>
          </IonCard>
        </div>

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
          color="success"
        />
      </IonContent>
    </IonPage>
  );
};

export default TestModePage;

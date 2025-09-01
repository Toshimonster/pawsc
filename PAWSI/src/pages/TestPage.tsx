import React, { useState, useEffect } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonInput,
  IonLabel,
  IonItem,
  IonList,
  IonTextarea,
  IonGrid,
  IonRow,
  IonCol,
  IonChip,
  IonIcon,
} from '@ionic/react';
import { BleClient } from '@capacitor-community/bluetooth-le';
import { play, pause, refresh, send, bluetooth } from 'ionicons/icons';
import './TestPage.css';

interface SceneEvent {
  sceneId: string;
  eventId: string;
  value: Uint8Array;
}

interface TestCommand {
  sceneId: string;
  controlId: string;
  value: string;
}

interface Capability {
  name: string;
  type: string;
  description?: string;
}

interface SceneCapabilities {
  sceneId: string;
  capabilities: Capability[];
}

const TestPage: React.FC = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [deviceId, setDeviceId] = useState<string>('');
  const [hasSceneService, setHasSceneService] = useState(false);
  const [receivedEvents, setReceivedEvents] = useState<SceneEvent[]>([]);
  const [capabilities, setCapabilities] = useState<SceneCapabilities[]>([]);
  const [testCommands, setTestCommands] = useState<TestCommand[]>([]);
  const [isLoadingCapabilities, setIsLoadingCapabilities] = useState(false);
  const [customCommand, setCustomCommand] = useState<TestCommand>({
    sceneId: 'ID[TEST]',
    controlId: '',
    value: ''
  });
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    // Check if Bluetooth is available
    checkBluetoothAvailability();
    return () => {
      // Cleanup on unmount
      if (isConnected && deviceId) {
        BleClient.disconnect(deviceId).catch(console.error);
      }
    };
  }, []);

  const checkBluetoothAvailability = async () => {
    try {
      await BleClient.initialize();
      console.log('Bluetooth LE initialized');
    } catch (error) {
      console.error('Failed to initialize Bluetooth LE:', error);
    }
  };

  const connectToDevice = async () => {
    try {
      setIsSending(true);
      
      const options = {
        services: ['50415753-0001-0001-0000-000000000000'], // Base Service (advertised)
        optionalServices: ['50415753-0001-0002-0000-000000000000', '50415753-0001-0003-0000-000000000000']
      };

      const device = await BleClient.requestDevice(options);
      await BleClient.connect(device.deviceId);
      
      setDeviceId(device.deviceId);
      setIsConnected(true);
      
      console.log('Connected to device:', device.name);
      
      // Wait a moment for the device to be ready
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Discover services and characteristics with retry
      let sceneServiceAvailable = false;
      let attempts = 0;
      const maxAttempts = 3;
      
      while (attempts < maxAttempts && !sceneServiceAvailable) {
        attempts++;
        console.log(`Service discovery attempt ${attempts}/${maxAttempts}`);
        
        sceneServiceAvailable = await discoverServices(device.deviceId);
        
        if (!sceneServiceAvailable && attempts < maxAttempts) {
          console.log(`Service not found, waiting 2 seconds before retry...`);
          await new Promise(resolve => setTimeout(resolve, 2000));
        }
      }
      
      setHasSceneService(sceneServiceAvailable);
      
      // Always try to discover capabilities from Base Service
      console.log('🔍 Discovering device capabilities...');
      await discoverCapabilities(device.deviceId);
      
      if (sceneServiceAvailable) {
        // Start listening for notifications
        await startNotifications(device.deviceId);
      } else {
        console.log('⚠️ Scene Interaction Service not available after all attempts. Some features may not work.');
        console.log('This could mean:');
        console.log('  1. The service is not implemented on this device');
        console.log('  2. The service needs to be enabled first');
        console.log('  3. The device is in a different mode');
        console.log('  4. The device needs to be restarted or reconfigured');
        
        // Test basic connectivity with Base Service
        try {
          console.log('🧪 Testing basic connectivity with Base Service...');
          const baseServices = await BleClient.getServices(device.deviceId);
          const baseService = baseServices.find(s => s.uuid === '50415753-0001-0001-0000-000000000000');
          
          if (baseService) {
            console.log('✅ Base Service is accessible - device is working');
            console.log('💡 Try enabling the Scene Interaction Service on your PAWS device');
          }
        } catch (testError) {
          console.error('❌ Basic connectivity test failed:', testError);
        }
      }
    } catch (error) {
      console.error('Failed to connect:', error);
    } finally {
      setIsSending(false);
    }
  };

  const discoverCapabilities = async (deviceId: string) => {
    try {
      setIsLoadingCapabilities(true);
      console.log('🔍 Discovering capabilities from Base Service...');
      
      // Read from the ActiveSceneCapabilities characteristic
      const capabilitiesData = await BleClient.read(
        deviceId,
        '50415753-0001-0001-0000-000000000000', // Base Service
        '50415753-0001-0001-0005-000000000000'  // ActiveSceneCapabilities
      );
      
             console.log('📊 Raw capabilities data:', capabilitiesData);
       
       // Log the raw bytes for debugging
       const rawBytes = Array.from(new Uint8Array(capabilitiesData.buffer as ArrayBuffer));
       console.log('🔢 Raw bytes:', rawBytes.map(b => `0x${b.toString(16).padStart(2, '0')}`).join(' '));
      
      // Try to decode the capabilities (this might be JSON or custom format)
      try {
        const capabilitiesText = new TextDecoder().decode(capabilitiesData.buffer as ArrayBuffer);
        console.log('📝 Decoded capabilities text:', capabilitiesText);
        
        // Parse as JSON if possible
        const parsedCapabilities = JSON.parse(capabilitiesText);
        console.log('✅ Parsed capabilities:', parsedCapabilities);
        
        // Convert to our format
        const sceneCapabilities: SceneCapabilities[] = [];
        
        if (Array.isArray(parsedCapabilities)) {
          // If it's an array of scenes
          parsedCapabilities.forEach((scene: any) => {
            if (scene.sceneId && scene.capabilities) {
              sceneCapabilities.push({
                sceneId: scene.sceneId,
                capabilities: scene.capabilities.map((cap: any) => ({
                  name: cap.name || cap.id || 'Unknown',
                  type: cap.type || 'Unknown',
                  description: cap.description || cap.desc || ''
                }))
              });
            }
          });
        } else if (parsedCapabilities.sceneId && parsedCapabilities.capabilities) {
          // If it's a single scene
          sceneCapabilities.push({
            sceneId: parsedCapabilities.sceneId,
            capabilities: parsedCapabilities.capabilities.map((cap: any) => ({
              name: cap.name || cap.id || 'Unknown',
              type: cap.type || 'Unknown',
              description: cap.description || cap.desc || ''
            }))
          });
        }
        
        setCapabilities(sceneCapabilities);
        
        // Generate test commands from capabilities
        const commands: TestCommand[] = [];
        sceneCapabilities.forEach(scene => {
          scene.capabilities.forEach(cap => {
            if (cap.type === 'get' || cap.name.startsWith('get')) {
              commands.push({
                sceneId: scene.sceneId,
                controlId: cap.name,
                value: ''
              });
            } else if (cap.type === 'set' || cap.name.startsWith('set')) {
              commands.push({
                sceneId: scene.sceneId,
                controlId: cap.name,
                value: 'test'
              });
            }
          });
        });
        
        setTestCommands(commands);
        console.log('🎯 Generated test commands:', commands);
        
        return sceneCapabilities.length > 0;
        
             } catch (parseError) {
         console.log('⚠️ Could not parse capabilities as JSON, treating as comma-separated string');
         
                   // Parse comma-separated capabilities string
          const capabilitiesText = new TextDecoder().decode(capabilitiesData.buffer as ArrayBuffer);
          console.log('📝 Raw decoded capabilities text:', capabilitiesText);
          
          // Remove null bytes and clean up the text
          const cleanedText = capabilitiesText.replace(/\x00/g, '');
          console.log('🧹 Cleaned capabilities text:', cleanedText);
          
                    const capabilityNames = cleanedText.split(',').map(cap => cap.trim()).filter(cap => cap.length > 0);
          console.log('🔍 Parsed capability names:', capabilityNames);
          
          // Alternative parsing: try to extract text from every other byte if it's a fixed-width format
          if (capabilityNames.length === 0 || capabilityNames.some(name => name.includes('\x00'))) {
            console.log('🔄 Trying alternative byte parsing...');
            const bytes = new Uint8Array(capabilitiesData.buffer as ArrayBuffer);
            let altText = '';
            
            // Try skipping every other byte (common in some BLE implementations)
            for (let i = 0; i < bytes.length; i += 2) {
              if (bytes[i] >= 32 && bytes[i] <= 126) { // Printable ASCII
                altText += String.fromCharCode(bytes[i]);
              }
            }
            
            if (altText.includes(',')) {
              console.log('✅ Alternative parsing successful:', altText);
              const altCapabilities = altText.split(',').map(cap => cap.trim()).filter(cap => cap.length > 0);
              if (altCapabilities.length > 0) {
                capabilityNames.length = 0; // Clear the original array
                capabilityNames.push(...altCapabilities);
                console.log('🔄 Updated capability names:', capabilityNames);
              }
            }
          }
         
         // Convert to our format
         const sceneCapabilities: SceneCapabilities[] = [{
           sceneId: 'ID[TEST]',
           capabilities: capabilityNames.map(capName => {
             // Determine type based on name
             let type = 'unknown';
             if (capName.startsWith('get')) {
               type = 'get';
             } else if (capName.startsWith('set')) {
               type = 'set';
             }
             
             return {
               name: capName,
               type: type,
               description: `${type === 'get' ? 'Retrieve' : type === 'set' ? 'Set' : 'Control'} ${capName}`
             };
           })
         }];
         
         setCapabilities(sceneCapabilities);
         
         // Generate test commands from capabilities
         const commands: TestCommand[] = [];
         sceneCapabilities.forEach(scene => {
           scene.capabilities.forEach(cap => {
             if (cap.type === 'get') {
               commands.push({
                 sceneId: scene.sceneId,
                 controlId: cap.name,
                 value: ''
               });
             } else if (cap.type === 'set') {
               commands.push({
                 sceneId: scene.sceneId,
                 controlId: cap.name,
                 value: 'test'
               });
             }
           });
         });
         
         setTestCommands(commands);
         console.log('🎯 Generated test commands from comma-separated capabilities:', commands);
         
         return true;
       }
      
    } catch (error) {
      console.error('❌ Failed to discover capabilities:', error);
      
             // Fallback: create default test commands based on common PAWS capabilities
       const defaultCommands: TestCommand[] = [
         { sceneId: 'ID[TEST]', controlId: 'getCapabilities', value: '' },
         { sceneId: 'ID[TEST]', controlId: 'getState', value: '' },
         { sceneId: 'ID[TEST]', controlId: 'getStateList', value: '' },
         { sceneId: 'ID[TEST]', controlId: 'setState', value: 'test' }
       ];
      
      setTestCommands(defaultCommands);
      return false;
    } finally {
      setIsLoadingCapabilities(false);
    }
  };

  const discoverServices = async (deviceId: string) => {
    try {
      console.log('Discovering services for device:', deviceId);
      
      // Add a small delay to ensure device is ready
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const services = await BleClient.getServices(deviceId);
      console.log('Available services:', services);
      
      if (!services || services.length === 0) {
        console.log('❌ No services found on device');
        return false;
      }
      
      // Log all available services for debugging
      console.log('📋 All discovered services:');
      services.forEach((service, index) => {
        console.log(`  ${index + 1}. ${service.uuid}`);
      });
      
      // Check if our target service exists
      const targetService = services.find(s => s.uuid === '50415753-0001-0002-0000-000000000000');
      if (targetService) {
        console.log('✅ Scene Interaction Service found:', targetService.uuid);
        return true;
      } else {
        console.log('❌ Scene Interaction Service NOT found. Available services:');
        services.forEach(s => console.log('  -', s.uuid));
        
        // Check if we have the Base Service
        const baseService = services.find(s => s.uuid === '50415753-0001-0001-0000-000000000000');
        if (baseService) {
          console.log('✅ Base Service found - this is expected');
        }
        
        // Check for any PAWS-related services
        const pawsServices = services.filter(s => s.uuid.startsWith('50415753'));
        if (pawsServices.length > 0) {
          console.log('🔍 Found PAWS services:');
          pawsServices.forEach(s => console.log(`  - ${s.uuid}`));
        }
        
        return false;
      }
    } catch (error) {
      console.error('Failed to discover services:', error);
      
      // Check if it's a characteristics error
      if (error instanceof Error && error.message.includes('No Characteristics found')) {
        console.log('⚠️ Service discovery failed - device may not be ready or service not implemented');
        console.log('This could mean:');
        console.log('  1. The device needs more time to initialize');
        console.log('  2. The service is not properly implemented');
        console.log('  3. The device is in a different state');
        
        // Try a simple service check without characteristics
        try {
          console.log('Attempting basic service discovery...');
          const basicServices = await BleClient.getServices(deviceId);
          if (basicServices && basicServices.length > 0) {
            console.log('Basic services found:', basicServices.map(s => s.uuid));
            return basicServices.some(s => s.uuid === '50415753-0001-0002-0000-000000000000');
          }
        } catch (basicError) {
          console.error('Basic service discovery also failed:', basicError);
        }
      }
      
      return false;
    }
  };

  const startNotifications = async (deviceId: string) => {
    const maxRetries = 3;
    let attempt = 0;
    
    const attemptStartNotifications = async (): Promise<void> => {
      try {
        attempt++;
        console.log(`Starting notifications attempt ${attempt}/${maxRetries} for device:`, deviceId);
        console.log('Service UUID:', '50415753-0001-0002-0000-000000000000');
        console.log('Characteristic UUID:', '50415753-0001-0002-0002-000000000000');
        
        await BleClient.startNotifications(
          deviceId,
          '50415753-0001-0002-0000-000000000000', // Scene Interaction Service
          '50415753-0001-0002-0002-000000000000', // Output Events Characteristic
          (event) => {
            const sceneEvent = decodePayload(event.buffer as ArrayBuffer);
            setReceivedEvents(prev => [sceneEvent, ...prev.slice(0, 9)]); // Keep last 10 events
            console.log('Received event:', sceneEvent);
          }
        );
        console.log('Notifications started successfully');
      } catch (error) {
        console.error(`Failed to start notifications (attempt ${attempt}):`, error);
        console.error('Error details:', {
          name: error instanceof Error ? error.name : 'Unknown',
          message: error instanceof Error ? error.message : 'Unknown',
          stack: error instanceof Error ? error.stack : 'Unknown'
        });
        
        if (attempt < maxRetries) {
          console.log(`Retrying in 1 second... (${maxRetries - attempt} attempts remaining)`);
          await new Promise(resolve => setTimeout(resolve, 1000));
          return attemptStartNotifications();
        } else {
          console.error('Max retries reached. Failed to start notifications.');
        }
      }
    };
    
    return attemptStartNotifications();
  };

  const disconnect = async () => {
    if (deviceId) {
      try {
              await BleClient.disconnect(deviceId);
      setIsConnected(false);
      setDeviceId('');
      setHasSceneService(false);
      setCapabilities([]);
      setTestCommands([]);
      setReceivedEvents([]);
      console.log('Disconnected');
      } catch (error) {
        console.error('Failed to disconnect:', error);
      }
    }
  };

  const sendCommand = async (command: TestCommand) => {
    if (!isConnected || !deviceId) {
      console.error('Not connected to device');
      return;
    }

    try {
      setIsSending(true);
      const payload = encodePayload(command.sceneId, command.controlId, command.value);
      
      console.log('Sending command:', command);
      console.log('Payload bytes:', Array.from(new Uint8Array(payload)).map(b => b.toString(16).padStart(2, '0')));
      console.log('Service UUID:', '50415753-0001-0002-0000-000000000000');
      console.log('Characteristic UUID:', '50415753-0001-0002-0001-000000000000');
      
      // Check if the service exists before trying to use it
      const services = await BleClient.getServices(deviceId);
      const hasSceneService = services.some(s => s.uuid === '50415753-0001-0002-0000-000000000000');
      
      if (!hasSceneService) {
        throw new Error('Scene Interaction Service not available. Cannot send command.');
      }
      
      await BleClient.write(
        deviceId,
        '50415753-0001-0002-0000-000000000000', // Scene Interaction Service
        '50415753-0001-0002-0001-000000000000', // Input Control Characteristic
        new DataView(payload)
      );
      
      console.log('Command sent successfully:', command);
    } catch (error) {
      console.error('Failed to send command:', error);
      console.error('Error details:', {
        name: error instanceof Error ? error.name : 'Unknown',
        message: error instanceof Error ? error.message : 'Unknown',
        stack: error instanceof Error ? error.stack : 'Unknown'
      });
    } finally {
      setIsSending(false);
    }
  };

  const sendCustomCommand = async () => {
    if (customCommand.controlId.trim()) {
      await sendCommand(customCommand);
    }
  };

  const encodePayload = (sceneId: string, controlId: string, value: string): ArrayBuffer => {
    const sceneBytes = new TextEncoder().encode(sceneId);
    const controlBytes = new TextEncoder().encode(controlId);
    const valueBytes = new TextEncoder().encode(value);
    
    const payload = new Uint8Array(2 + sceneBytes.length + controlBytes.length + valueBytes.length);
    
    let offset = 0;
    payload[offset++] = sceneBytes.length;
    payload.set(sceneBytes, offset);
    offset += sceneBytes.length;
    
    payload[offset++] = controlBytes.length;
    payload.set(controlBytes, offset);
    offset += controlBytes.length;
    
    payload.set(valueBytes, offset);
    return payload.buffer;
  };

  const decodePayload = (buffer: ArrayBuffer): SceneEvent => {
    try {
      const view = new Uint8Array(buffer);
      let offset = 0;
      
      const sceneLen = view[offset++];
      const sceneId = new TextDecoder().decode(view.slice(offset, offset + sceneLen));
      offset += sceneLen;
      
      const eventLen = view[offset++];
      const eventId = new TextDecoder().decode(view.slice(offset, offset + eventLen));
      offset += eventLen;
      
      const value = view.slice(offset);
      return { sceneId, eventId, value };
    } catch (error) {
      console.error('Failed to decode payload:', error);
      return { sceneId: 'ERROR', eventId: 'DECODE_FAILED', value: new Uint8Array() };
    }
  };

  const clearEvents = () => {
    setReceivedEvents([]);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>PAWS Scene Interaction Test</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent className="ion-padding">
        {/* Connection Status */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              <IonIcon icon={bluetooth} />
              Connection Status
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonGrid>
              <IonRow>
                <IonCol size="6">
                  <IonChip color={isConnected ? 'success' : 'danger'}>
                    {isConnected ? 'Connected' : 'Disconnected'}
                  </IonChip>
                </IonCol>
                <IonCol size="6">
                  {isConnected ? (
                    <IonButton fill="outline" color="danger" onClick={disconnect}>
                      Disconnect
                    </IonButton>
                  ) : (
                    <IonButton 
                      fill="outline" 
                      color="primary" 
                      onClick={connectToDevice}
                      disabled={isSending}
                    >
                      {isSending ? 'Connecting...' : 'Connect'}
                    </IonButton>
                  )}
                </IonCol>
              </IonRow>
                             {deviceId && (
                 <IonRow>
                   <IonCol>
                     <small>Device ID: {deviceId}</small>
                   </IonCol>
                 </IonRow>
               )}
               {isConnected && (
                 <IonRow>
                   <IonCol>
                     <IonChip color={hasSceneService ? 'success' : 'warning'}>
                       {hasSceneService ? 'Scene Service: Available' : 'Scene Service: Not Available'}
                     </IonChip>
                   </IonCol>
                 </IonRow>
               )}
            </IonGrid>
          </IonCardContent>
        </IonCard>

                {/* Device Capabilities */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              Device Capabilities
              <IonButton 
                fill="clear" 
                size="small" 
                onClick={() => discoverCapabilities(deviceId)}
                disabled={!isConnected || isLoadingCapabilities}
                style={{ float: 'right' }}
              >
                <IonIcon icon={refresh} />
                Refresh
              </IonButton>
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            {isLoadingCapabilities ? (
              <p>Loading capabilities...</p>
            ) : capabilities.length === 0 ? (
              <p>No capabilities discovered yet. Click Refresh to discover device capabilities.</p>
            ) : (
              <div>
                {capabilities.map((scene, sceneIndex) => (
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

        {/* Test Commands */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Test Commands</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            {testCommands.length === 0 ? (
              <p>No test commands available. Discover capabilities first.</p>
            ) : (
              <IonGrid>
                {testCommands.map((command, index) => (
                  <IonRow key={index}>
                    <IonCol size="4">
                      <IonLabel>{command.sceneId}</IonLabel>
                    </IonCol>
                    <IonCol size="4">
                      <IonLabel>{command.controlId}</IonLabel>
                    </IonCol>
                    <IonCol size="2">
                      <IonLabel>{command.value || '-'}</IonLabel>
                    </IonCol>
                    <IonCol size="2">
                      <IonButton 
                        size="small" 
                        fill="outline" 
                        onClick={() => sendCommand(command)}
                        disabled={!isConnected || !hasSceneService || isSending}
                      >
                        <IonIcon icon={send} />
                      </IonButton>
                    </IonCol>
                  </IonRow>
                ))}
              </IonGrid>
            )}
          </IonCardContent>
        </IonCard>

        {/* Custom Command */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Custom Command</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonGrid>
              <IonRow>
                <IonCol size="4">
                  <IonInput
                    label="Scene ID"
                    value={customCommand.sceneId}
                    onIonInput={(e) => setCustomCommand(prev => ({ ...prev, sceneId: e.detail.value || '' }))}
                    placeholder="ID[TEST]"
                  />
                </IonCol>
                <IonCol size="4">
                  <IonInput
                    label="Control ID"
                    value={customCommand.controlId}
                    onIonInput={(e) => setCustomCommand(prev => ({ ...prev, controlId: e.detail.value || '' }))}
                    placeholder="getStateList"
                  />
                </IonCol>
                <IonCol size="2">
                  <IonInput
                    label="Value"
                    value={customCommand.value}
                    onIonInput={(e) => setCustomCommand(prev => ({ ...prev, value: e.detail.value || '' }))}
                    placeholder=""
                  />
                </IonCol>
                <IonCol size="2">
                                     <IonButton 
                     fill="outline" 
                     onClick={sendCustomCommand}
                     disabled={!isConnected || !hasSceneService || isSending || !customCommand.controlId.trim()}
                   >
                    <IonIcon icon={send} />
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>

        {/* Received Events */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              Received Events
              <IonButton 
                fill="clear" 
                size="small" 
                onClick={clearEvents}
                style={{ float: 'right' }}
              >
                <IonIcon icon={refresh} />
                Clear
              </IonButton>
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            {receivedEvents.length === 0 ? (
              <p>No events received yet. Connect to a device and send commands to see events here.</p>
            ) : (
              <IonList>
                {receivedEvents.map((event, index) => (
                  <IonItem key={index}>
                    <IonLabel>
                      <h3>{event.sceneId} → {event.eventId}</h3>
                      <p>Value: {event.value.length > 0 ? new TextDecoder().decode(event.value) : '(empty)'}</p>
                      <p>Bytes: [{Array.from(event.value).map(b => b.toString(16).padStart(2, '0')).join(', ')}]</p>
                    </IonLabel>
                  </IonItem>
                ))}
              </IonList>
            )}
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default TestPage;

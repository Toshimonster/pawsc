import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { PawscDeviceManager, PawscDeviceState } from './PawscDeviceManager';

interface DeviceContextType {
  deviceManager: PawscDeviceManager;
  isConnected: boolean;
  isConnecting: boolean;
  state: PawscDeviceState;
  stateDetail: string;
  activeScene: string;
  sceneList: string[];
  capabilities: string[];
  sceneState: string;
  deviceInfo: {
    timestamp: string;
    uptime: string;
    cpuTemp: string;
    cpuLoad: string;
    network: string;
  };
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
  reconnect: () => Promise<void>;
  reset: () => void;
  changeScene: (sceneId: string) => Promise<void>;
  refreshData: () => Promise<void>;
}

const DeviceContext = createContext<DeviceContextType | undefined>(undefined);

export const useDevice = () => {
  const context = useContext(DeviceContext);
  if (!context) {
    throw new Error('useDevice must be used within a DeviceProvider');
  }
  return context;
};

interface DeviceProviderProps {
  children: ReactNode;
}

export const DeviceProvider: React.FC<DeviceProviderProps> = ({ children }) => {
  const [deviceManager] = useState(() => PawscDeviceManager.getInstance());
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [state, setState] = useState<PawscDeviceState>(PawscDeviceState.UNDEFINED);
  const [stateDetail, setStateDetail] = useState('');
  
  // Device data state
  const [activeScene, setActiveScene] = useState<string>('');
  const [sceneList, setSceneList] = useState<string[]>([]);
  const [capabilities, setCapabilities] = useState<string[]>([]);
  const [sceneState, setSceneState] = useState<string>('unknown');
  const [deviceInfo, setDeviceInfo] = useState({
    timestamp: '',
    uptime: '',
    cpuTemp: '',
    cpuLoad: '',
    network: ''
  });

  // Load device data
  const loadDeviceData = async () => {
    if (!isConnected) return;
    
    try {
      const [sceneListData, activeSceneData, capabilitiesData, ...deviceInfoData] = await Promise.all([
        deviceManager.getSceneList(),
        deviceManager.getActiveScene(),
        deviceManager.getActiveSceneCapabilities(),
        deviceManager.getDeviceInfo('50415753-0001-0003-0001-000000000000'), // Timestamp
        deviceManager.getDeviceInfo('50415753-0001-0003-0002-000000000000'), // Uptime
        deviceManager.getDeviceInfo('50415753-0001-0003-0003-000000000000'), // CPU Temp
        deviceManager.getDeviceInfo('50415753-0001-0003-0004-000000000000'), // CPU Load
        deviceManager.getDeviceInfo('50415753-0001-0003-0005-000000000000'), // Network
      ]);

      setSceneList(sceneListData);
      setActiveScene(activeSceneData);
      setCapabilities(capabilitiesData);
      
      // Load scene state if we have an active scene
      if (activeSceneData) {
        try {
          const state = await deviceManager.getSceneState(activeSceneData);
          setSceneState(state);
        } catch (error) {
          console.error('Failed to load scene state:', error);
          setSceneState('unknown');
        }
      }
      
      setDeviceInfo({
        timestamp: deviceInfoData[0] || '',
        uptime: deviceInfoData[1] || '',
        cpuTemp: deviceInfoData[2] || '',
        cpuLoad: deviceInfoData[3] || '',
        network: deviceInfoData[4] || '',
      });
    } catch (error) {
      console.error('Error loading device data:', error);
    }
  };

  // Connect to device
  const connect = async () => {
    setIsConnecting(true);
    try {
      await deviceManager.init();
    } catch (error) {
      console.error('Connection error:', error);
      setIsConnecting(false);
    }
  };

  // Disconnect from device
  const disconnect = async () => {
    try {
      await deviceManager.disconnect();
    } catch (error) {
      console.error('Disconnect error:', error);
    }
  };

  // Reconnect to device
  const reconnect = async () => {
    try {
      await deviceManager.reconnect();
    } catch (error) {
      console.error('Reconnection error:', error);
    }
  };

  // Reset device state
  const reset = () => {
    deviceManager.reset();
  };

  // Change active scene
  const changeScene = async (sceneId: string) => {
    try {
      await deviceManager.setActiveScene(sceneId);
      setActiveScene(sceneId);
      
      // Reload capabilities for the new scene
      const newCapabilities = await deviceManager.getActiveSceneCapabilities();
      setCapabilities(newCapabilities);
      
      // Load scene state for the new scene
      try {
        const state = await deviceManager.getSceneState(sceneId);
        setSceneState(state);
      } catch (error) {
        console.error('Failed to load scene state:', error);
        setSceneState('unknown');
      }
    } catch (error) {
      console.error('Error changing scene:', error);
    }
  };

  // Refresh device data
  const refreshData = async () => {
    await loadDeviceData();
  };

  // Set up event listeners
  useEffect(() => {
    const handleStateChange = (newState: PawscDeviceState, detail?: string) => {
      setState(newState);
      setStateDetail(detail || '');
      
      const connected = newState === PawscDeviceState.READY;
      setIsConnected(connected);
      
      if (connected) {
        setIsConnecting(false);
        // Load data when connected
        loadDeviceData();
      } else if (newState === PawscDeviceState.FAILED || newState === PawscDeviceState.NO_DEVICE_FOUND) {
        setIsConnecting(false);
      }
    };

    const handleSceneStateChange = (sceneId: string, state: string) => {
      if (sceneId === activeScene) {
        setSceneState(state);
      }
    };

    const handleSceneOutput = (sceneId: string, controlId: string, value: Uint8Array) => {
      console.log(`Scene output: ${sceneId}:${controlId}`, value);
    };

    const handleDeviceDisconnected = (message: string) => {
      setIsConnected(false);
      setState(PawscDeviceState.DISCONNECTED);
      setStateDetail(message);
      setIsConnecting(false);
    };

    // Subscribe to events
    deviceManager.subscribe('stateChange', handleStateChange);
    deviceManager.subscribe('sceneStateChange', handleSceneStateChange);
    deviceManager.subscribe('sceneOutput', handleSceneOutput);
    deviceManager.subscribe('deviceDisconnected', handleDeviceDisconnected);

    // Initialize state
    setState(deviceManager.state);
    setIsConnected(deviceManager.isConnected());

    return () => {
      deviceManager.unsubscribe('stateChange', handleStateChange);
      deviceManager.unsubscribe('sceneStateChange', handleSceneStateChange);
      deviceManager.unsubscribe('sceneOutput', handleSceneOutput);
      deviceManager.unsubscribe('deviceDisconnected', handleDeviceDisconnected);
    };
  }, [deviceManager, activeScene]);

  const value: DeviceContextType = {
    deviceManager,
    isConnected,
    isConnecting,
    state,
    stateDetail,
    activeScene,
    sceneList,
    capabilities,
    sceneState,
    deviceInfo,
    connect,
    disconnect,
    reconnect,
    reset,
    changeScene,
    refreshData,
  };

  return (
    <DeviceContext.Provider value={value}>
      {children}
    </DeviceContext.Provider>
  );
};

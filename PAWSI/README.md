# PAWSC Ionic App

A professional Ionic Capacitor application for controlling PAWSC (Personal Audio Visual Scene Controller) peripherals via Bluetooth Low Energy (BLE).

## Features

- **Bluetooth Connection Management**: Easy device discovery and connection to PAWSC peripherals
- **Scene Management**: View and switch between different scenes on the device
- **Capability Control**: Interact with scene-specific capabilities and controls
- **Test Mode**: Send generic commands for testing and development purposes
- **Real-time Monitoring**: View device information, status, and scene outputs
- **Professional UI**: Modern, responsive design with intuitive navigation

## Architecture

The app is built using:
- **Ionic 7** with React for the UI framework
- **Capacitor 5** for native mobile functionality
- **@capacitor-community/bluetooth-le** for BLE communication
- **TypeScript** for type safety

## App Structure

### Pages

1. **BluetoothPage** (`/bluetooth`)
   - Device connection management
   - Connection status and error handling
   - Initial connection setup

2. **DashboardPage** (`/dashboard`)
   - Overview of device status
   - Active scene information
   - Device metrics (CPU, network, etc.)
   - Quick navigation to other features

3. **SceneControlPage** (`/scene-control`)
   - Scene management and switching
   - Capability viewing and interaction
   - Scene-specific controls

4. **TestModePage** (`/test-mode`)
   - Generic capability testing
   - Command history
   - Multiple value type support (string, hex, number)

### Navigation

The app uses a tabbed navigation system:
- **Dashboard**: Main overview and device status
- **Scenes**: Scene management and control
- **Test**: Testing and development tools
- **Connection**: Bluetooth connection management

## BLE Communication

### Services

The app communicates with PAWSC devices through three main BLE services:

1. **PAWS Base Service** (`50415753-0001-0001-0000-000000000000`)
   - Scene list and management
   - Active scene control
   - Scene capabilities

2. **Scene Interaction Service** (`50415753-0001-0002-0000-000000000000`)
   - Input control commands
   - Output event notifications

3. **Device Info Service** (`50415753-0001-0003-0000-000000000000`)
   - System metrics
   - Device status information

### Command Protocol

Commands are sent using a self-describing payload format:
```
[SceneID Length][SceneID][ControlID Length][ControlID][Value Data]
```

- **SceneID**: Target scene identifier
- **ControlID**: Specific capability or control identifier
- **Value**: Command data (string, hex, or numeric)

## Getting Started

### Prerequisites

- Node.js 16+ and npm
- Ionic CLI
- Capacitor CLI
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd PAWSI
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Build for mobile**
   ```bash
   npm run build
   npx cap add android
   npx cap add ios
   npx cap sync
   ```

### Running on Device

1. **Android**
   ```bash
   npx cap open android
   # Build and run in Android Studio
   ```

2. **iOS**
   ```bash
   npx cap open ios
   # Build and run in Xcode
   ```

## Usage

### Connecting to a PAWSC Device

1. Open the app and navigate to the Connection tab
2. Ensure Bluetooth is enabled on your device
3. Tap "Connect to PAWSC"
4. Select your PAWSC device from the discovery list
5. Wait for connection to establish

### Managing Scenes

1. **View Available Scenes**
   - Navigate to the Scenes tab
   - See all available scenes and their capabilities

2. **Switch Scenes**
   - Tap on a scene in the list
   - Use the action sheet to activate the scene

3. **View Capabilities**
   - Active scene capabilities are displayed as interactive chips
   - Tap capabilities to send test commands

### Testing Capabilities

1. **Test Mode**
   - Navigate to the Test tab
   - Select target scene and capability
   - Choose value type (string, hex, number)
   - Send commands and view history

2. **Command Types**
   - **String**: Text-based commands
   - **Hex**: Binary data in hexadecimal format
   - **Number**: Numeric values

### Monitoring Device Status

- **Dashboard**: Overview of device health and status
- **Real-time Updates**: Scene outputs and device events
- **System Metrics**: CPU usage, temperature, network status

## Development

### Project Structure

```
PAWSI/
├── src/
│   ├── components/
│   │   └── contexts/
│   │       ├── PawscDeviceManager.ts    # BLE device management
│   │       ├── EventHandler.tsx         # Event handling system
│   │       └── BleEnableDebug.tsx       # Debug utilities
│   ├── pages/
│   │   ├── BluetoothPage.tsx            # Connection management
│   │   ├── DashboardPage.tsx            # Main dashboard
│   │   ├── SceneControlPage.tsx         # Scene management
│   │   └── TestModePage.tsx             # Testing interface
│   ├── App.tsx                          # Main app component
│   └── main.tsx                         # App entry point
├── android/                             # Android platform files
├── ios/                                 # iOS platform files
└── package.json                         # Dependencies and scripts
```

### Key Components

#### PawscDeviceManager

Central class for managing BLE communication with PAWSC devices:
- Device discovery and connection
- Service and characteristic management
- Command sending and event handling
- State management

#### EventHandler

Abstract base class providing event subscription system:
- Event registration and unregistration
- Callback management
- Event emission

### Adding New Features

1. **New Pages**: Create in `src/pages/` and add to routing
2. **New Services**: Extend PawscDeviceManager with new BLE operations
3. **New UI Components**: Create reusable components in `src/components/`

## Troubleshooting

### Common Issues

1. **Bluetooth Not Available**
   - Ensure Bluetooth is enabled
   - Check app permissions
   - Restart the app

2. **Connection Failures**
   - Verify device is in range
   - Check device is advertising
   - Restart Bluetooth on both devices

3. **Scene Commands Not Working**
   - Verify correct scene ID and capability ID
   - Check device is in correct mode
   - Review command payload format

### Debug Mode

Enable debug logging by setting environment variables:
```bash
export IONIC_DEBUG=true
export BLE_DEBUG=true
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions:
- Create an issue in the repository
- Check the documentation
- Review the PAWSC backend implementation

## Version History

- **v1.0.0**: Initial release with basic BLE communication
- **v1.1.0**: Added scene management and capability control
- **v1.2.0**: Enhanced UI and added test mode
- **v1.3.0**: Professional design and improved navigation

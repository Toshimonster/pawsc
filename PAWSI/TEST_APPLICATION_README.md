# PAWS Scene Interaction Test Application

This test application provides a dedicated page to test the PAWS Scene Interaction Service functionality in your PAWS-IONIC app.

## Features

### 1. Connection Management
- **Connect/Disconnect**: Easily connect to PAWS devices and manage connections
- **Status Display**: Real-time connection status with device ID information
- **Bluetooth Initialization**: Automatic Bluetooth LE initialization

### 2. Pre-defined Test Commands
The app includes several pre-configured test commands:
- `getStateList` - Request the list of available states
- `getModeList` - Request the list of available modes
- `setMode` - Set the device mode to "game"
- `setState` - Set the device state to "running"

### 3. Custom Command Interface
- **Scene ID**: Specify the target scene (default: "ID[TEST]")
- **Control ID**: Define the control command to send
- **Value**: Optional parameter value for the command

### 4. Event Monitoring
- **Real-time Notifications**: Listen for incoming events from the PAWS device
- **Event Display**: View decoded event data including:
  - Scene ID
  - Event ID  
  - Value (both text and hex representation)
- **Event History**: Keep track of the last 10 received events

## How to Use

### 1. Access the Test Page
- Navigate to the **Test** tab in your PAWS-IONIC app
- The test page is accessible without requiring a Bluetooth connection

### 2. Connect to a PAWS Device
1. Click the **Connect** button
2. Select your PAWS device from the Bluetooth device list
3. Wait for the connection to establish
4. The status will show "Connected" with the device ID

### 3. Send Test Commands
- **Quick Commands**: Use the pre-defined test commands by clicking the send button
- **Custom Commands**: Fill in the custom command form and click send
- **Monitor Results**: Watch the console and event list for responses

### 4. Monitor Events
- Events received from the PAWS device will appear in the "Received Events" section
- Each event shows the decoded scene ID, event ID, and value
- Use the "Clear" button to reset the event history

## Technical Details

### Bluetooth Service UUIDs
- **Scene Interaction Service**: `50415753-0001-0002-0000-000000000000`
- **Input Control Characteristic**: `50415753-0001-0002-0001-000000000000`
- **Output Events Characteristic**: `50415753-0001-0002-0002-000000000000`

### Payload Encoding
The app uses the same payload encoding as your PAWS C# backend:
```
[SceneID Length][SceneID][ControlID Length][ControlID][Value]
```

### Error Handling
- Automatic retry logic for notification subscriptions
- Graceful handling of connection failures
- Timeout protection for Bluetooth operations

## Troubleshooting

### Common Issues

1. **"Device busy" errors**: The app automatically retries notification subscriptions
2. **Connection failures**: Ensure your PAWS device is powered on and discoverable
3. **No events received**: Check that the device is sending events to the Output Events characteristic

### Debug Information
- Check the browser console for detailed logs
- Monitor the connection status indicator
- Verify device ID is displayed after connection

## Integration with PAWS Backend

This test app is designed to work with your existing PAWS C# backend:
- Uses the same UUIDs defined in `UuidRegistry.cs`
- Implements the same payload encoding as `ScenePayloadEncoder`
- Compatible with the `PawsSceneInteractionService` implementation

## Development Notes

- The test page is independent of the main PAWS device context
- No authentication or complex state management required
- Perfect for testing and debugging scene interaction functionality
- Can be used alongside other PAWS app features


# PAWS Game Controller

This document describes the new game controller functionality added to the PAWS Ionic app.

## Overview

The game controller provides a gamepad interface that allows users to send commands to the PAWS device when it's in "Game" mode. The controller sends BLE commands to a specific characteristic that the device can interpret for gameplay.

## Features

### Game Controller Interface
- **D-Pad Controls**: LEFT, RIGHT, UP, DOWN directional buttons
- **Action Buttons**: A and B buttons for game actions
- **Visual Feedback**: Buttons provide visual feedback when pressed
- **Status Display**: Shows the last pressed button

### Mode Management
- **Centralized Mode Control**: New ModeManager component in the Status page
- **Visual Mode Cards**: Each mode has its own card with description and icon
- **Easy Mode Switching**: One-click mode switching with visual feedback
- **Mode Status**: Clear indication of current active mode

## BLE Implementation

### Game Controller Service
- **Service UUID**: `00000000000000000000000000000000` (placeholder)
- **Characteristic UUID**: `00000000000000000000000000000000` (placeholder)

### Command Protocol
The controller sends single-byte commands:
- `0x00` - A button
- `0x01` - B button  
- `0x02` - LEFT
- `0x03` - RIGHT
- `0x04` - UP
- `0x05` - DOWN

### Data Format
```typescript
const dataView = new DataView(new ArrayBuffer(1));
dataView.setUint8(0, command);
```

## Usage

### Accessing the Game Controller
1. Navigate to the **Game** tab in the app
2. Ensure the device is in "Game" mode
3. Use the on-screen gamepad to send commands

### Switching Modes
1. Go to the **Status** page
2. Use the **Mode Management** section
3. Click on any mode card to switch to that mode
4. Wait for the mode change confirmation

### Available Modes
- **States**: Control device states and animations
- **PixelDrawer**: Draw and display pixel art
- **VideoShare**: Share and stream video content
- **Game**: Play games with the device

## Technical Details

### Components
- `GameController`: Main game controller interface
- `ModeManager`: Centralized mode management
- `Game`: Game page that hosts the controller

### CSS Styling
- `GameController.css`: Styling for the game controller
- `ModeManager.css`: Styling for the mode management interface

### BLE Integration
The game controller integrates with the existing PAWS BLE infrastructure:
- Uses the same device connection
- Follows the established property pattern
- Integrates with the additional capabilities system

## Future Enhancements

### Potential Improvements
- **Keyboard Support**: Add keyboard shortcuts for game controls
- **Customizable Layouts**: Allow users to customize button layouts
- **Game Profiles**: Save different game configurations
- **Haptic Feedback**: Add vibration feedback for button presses
- **Analog Support**: Support for analog stick inputs

### Additional Game Modes
- **Retro Games**: Classic arcade-style games
- **Puzzle Games**: Brain teasers and logic puzzles
- **Multiplayer**: Games that support multiple players
- **Achievements**: Gaming achievement system

## Troubleshooting

### Common Issues
1. **Controller Not Responding**: Check if device is in Game mode
2. **Mode Won't Change**: Verify BLE connection and device status
3. **Buttons Not Working**: Ensure game controller capability is reachable

### Debug Information
- Check the browser console for BLE communication logs
- Verify the device supports the game controller service
- Confirm the characteristic UUIDs match between app and device

## Development Notes

### Adding New Commands
To add new game commands:
1. Update the command mapping in `GameController.tsx`
2. Add new command bytes to the protocol
3. Update device firmware to handle new commands

### Customizing the Interface
The game controller is built with modular components:
- Button layouts can be easily modified
- CSS classes provide consistent styling
- Component props allow for customization

### Testing
- Test with actual PAWS device in Game mode
- Verify BLE communication works correctly
- Test mode switching functionality
- Validate visual feedback and animations 
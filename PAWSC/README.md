# PAWSC - PAWS System Controller

A high-performance system controller for PAWS (Personal Assistant Wearable System) with support for multiple interfaces, controllers, and scenes.

## Features

- **Multi-Interface Support**: Frame buffer, terminal, and proxy interfaces
- **Controller Management**: BLE GATT controllers for system control
- **Scene System**: Dynamic scene management with drawing capabilities
- **High Performance**: Optimized drawing loop with configurable FPS
- **Cross-Platform**: Support for Linux and Windows environments
- **Security-Focused**: Secure package management and vulnerability prevention

## Architecture

### Core Components

- **PawsRuntime**: Main runtime orchestrator
- **PawsInterfaceManager**: Manages display interfaces
- **PawsControllerManager**: Manages system controllers
- **PawsSceneManager**: Manages rendering scenes
- **PawsDrawingThread**: High-performance drawing loop

### Key Interfaces

- **IPawsInterface**: Base interface for display devices
- **IPawsController**: Base interface for system controllers
- **IPawsScene**: Base interface for renderable scenes

## Code Quality Improvements

This project has been enhanced with the following code quality improvements:

### 1. **Error Handling & Validation**
- Added comprehensive null checks and argument validation
- Improved exception handling with meaningful error messages
- Added proper error propagation throughout the call stack

### 2. **Resource Management**
- Implemented `IDisposable` pattern for proper resource cleanup
- Added cancellation token support for graceful shutdown
- Improved thread management and cleanup

### 3. **Performance Optimizations**
- Replaced `ForEach` with more efficient LINQ operations
- Added parallel initialization where appropriate
- Optimized drawing loop with better timing calculations

### 4. **Code Documentation**
- Added comprehensive XML documentation for all public APIs
- Improved code readability with better naming conventions
- Added inline comments for complex logic

### 5. **Type Safety**
- Fixed generic constraint issues in proxy managers
- Improved nullable reference type usage
- Better type checking and validation

### 6. **Project Configuration**
- Added code analysis and style enforcement
- Configured warnings as errors for stricter quality control
- Added EditorConfig for consistent formatting

### 7. **Security & Package Management**
- Secure package version constraints
- Vulnerability prevention with package auditing
- Explicit secure dependency versions
- NuGet security configuration

## Getting Started

### Prerequisites

- .NET 9.0 SDK (version 9.0.100 or later)
- Linux environment for frame buffer support (optional)

### Building

```bash
dotnet restore
dotnet build
```

### Running

```bash
dotnet run
```

## Development

### Code Style

The project uses strict code quality standards:
- All warnings are treated as errors (except security warnings during development)
- XML documentation is required for public APIs
- Code analysis is enabled with latest rules
- Consistent formatting enforced via EditorConfig

### Security

- Package vulnerabilities are automatically detected and reported
- Secure package versions are enforced
- Regular security audits are performed during builds

### Adding New Components

1. **Interfaces**: Implement `IPawsInterface`
2. **Controllers**: Extend base controller classes
3. **Scenes**: Implement `IPawsScene`

### Testing

```bash
dotnet test
```

### Package Management

The project uses secure package management:
- Explicit version constraints for critical dependencies
- Automatic vulnerability detection
- Secure package sources only

## Troubleshooting

### Build Issues

If you encounter build issues:

1. **Clean and restore packages**:
   ```bash
   dotnet clean
   dotnet restore
   ```

2. **Check for security vulnerabilities**:
   ```bash
   dotnet list package --vulnerable
   ```

3. **Update packages**:
   ```bash
   dotnet outdated
   dotnet add package [PackageName] --version [Version]
   ```

## SETUP:
1) Ensure bluetoothd is running with --experimental and --noplugin=*
2) Use the following env vars:
   ```bash:
   export DOTNET_ROOT=$HOME/.dotnet
   export PATH=$PATH:$HOME/.dotnet
   export LD_PRELOAD=/usr/lib/aarch64-linux-gnu/libfreetype.so.6
   export LD_PRELOAD=$LD_PRELOAD:/lib/aarch64-linux-gnu/libuuid.so.1
   ```

## License

This project is proprietary software.

## Contributing

Please ensure all code follows the established quality standards and includes proper documentation. Security vulnerabilities should be reported immediately. 

import {
	BleClient,
	BleDevice,
	dataViewToNumbers,
	dataViewToText,
	ScanResult,
	textToDataView,
} from "@capacitor-community/bluetooth-le";
import config from "../../config";
import { EventHandler } from "./EventHandler";
import BleEnableDebug from "./BleEnableDebug";

/**
 * Helper function
 */
const dataViewToFloat = (dv: DataView) => {
	return dv.getFloat32(0);
};

/**
 * The state of the paws device
 */
export enum PawsState {
	FAILED,
	NO_BLUETOOTH,
	UNDEFINED, //root
	CHECKING_REQUIREMENTS,
	FINDING_DEVICE,
	CONNECTING,
	INITIALISING,
	READY,
}

/**
 * Scene event interface for the new command structure
 */
export interface SceneEvent {
	sceneId: string;
	eventId: string;
	value: Uint8Array;
}

/**
 * Scene command interface for the new command structure
 */
export interface SceneCommand {
	sceneId: string;
	controlId: string;
	value: string;
}

/**
 * Device capability interface
 */
export interface DeviceCapability {
	name: string;
	type: 'get' | 'set' | 'unknown';
	description?: string;
}

/**
 * Scene capabilities interface
 */
export interface SceneCapabilities {
	sceneId: string;
	capabilities: DeviceCapability[];
}

/**
 * A property, usually a characteristic
 */
export interface PawsProperty<T> {
	name: string;
	value: T | undefined;
	sync: () => Promise<void>;
	write?: (v: T, sync?: boolean) => Promise<void>;
}

export type PawsDeviceProperties = { [key: string]: PawsProperty<any> };

export interface PawsCapability {
	reachable: boolean;
	service: string;
	properties: PawsDeviceProperties;
}

export type PawsCapabilities = { [key: string]: PawsCapability };

/**
 * Modern PAWS Device with scene-based command structure
 */
export class PawsDevice extends EventHandler {
	public device: BleDevice | undefined;
	public readonly debug;

	// New properties for the modern structure
	private _capabilities: SceneCapabilities[] = [];
	private _activeScene: string = 'ID[TEST]';
	private _sceneInteractionClient: SceneInteractionClient | null = null;

	/**
	 * These give data on the current status of the device / debugging symbols
	 */
	private _detailString = "Not initialized";
	private _state: PawsState = PawsState.UNDEFINED;

	/**
	 * GETTERS AND SETTERS
	 */
	get state(): PawsState {
		return this._state;
	}
	set state(value: PawsState) {
		this._state = value;
		this.emit("onStateChange", value);
	}

	get detailString(): string {
		return this._detailString;
	}
	set detailString(value: string) {
		this._detailString = value;
		this.emit("onDetailStringChange", value);
	}

	get capabilities(): SceneCapabilities[] {
		return this._capabilities;
	}

	get activeScene(): string {
		return this._activeScene;
	}

	constructor(debug = false) {
		super();
		this.debug = debug;
		if (debug) BleEnableDebug();
	}

	async main(): Promise<PawsState> {
		this.detailString = "Trying to initialise";
		try {
			await BleClient.initialize({
				androidNeverForLocation: true,
			});
		} catch (e) {
			this.detailString =
				"Cannot initialize bluetooth client - Does your device support it?";
			this.state = PawsState.NO_BLUETOOTH;
			return this.state;
		}
		this.detailString = "Initialised";
		this.state = PawsState.CHECKING_REQUIREMENTS;
		if (!(await BleClient.isEnabled())) {
			this.detailString =
				"Bluetooth is not enabled on the client - Please enable it!";
			this.state = PawsState.NO_BLUETOOTH;
		} else {
			this.detailString = "Bluetooth enabled";
			try {
				// Main implementation
				await this.scan();
				await this.connect();
				await this.initialiseAllValues();
				this.detailString = "PAWS device ready!";
				this.state = PawsState.READY;
			} catch (e) {
				let message = "Unknown Failure";
				console.log(e);
				if (e instanceof Error) message = e.message;
				if (typeof e === "string") message = e;
				this.detailString = message;
				this.state = PawsState.FAILED;
				throw e;
			}
		}
		return this.state;
	}

	async scan() {
		this.detailString = "Initializing Bluetooth client";
		await BleClient.initialize();

		this.detailString = "Requesting PAWS device";
		this.state = PawsState.FINDING_DEVICE;

		const options = {
			services: [config.UUIDS.PawsBaseService],
			optionalServices: [config.UUIDS.SceneInteractionService, config.UUIDS.DeviceInfoService],
		};

		if (config.BLE_SCAN_SELECTOR) {
			this.device = await BleClient.requestDevice(options);
			this.detailString = "Found PAWS device!";
		} else {
			// eslint-disable-next-line no-async-promise-executor
			return new Promise<void>(async (resolve, reject) => {
				try {
					await BleClient.requestLEScan(options,
						(result: ScanResult) => {
							this.detailString = "Found PAWS device!";
							this.device = result.device;
							BleClient.stopLEScan();
							resolve();
						}
					);
					setTimeout(() => {
						if (!this.device) {
							this.detailString = "Cannot find PAWS device";
							reject("Timeout exceeded");
						}
					}, config.BLE_SCAN_TIMEOUT);
				} catch (e) {
					reject(e);
				}
			});
		}
	}

	async connect(iteration = 1) {
		if (!this.device) throw new Error("Device not initialised");

		this.detailString = `Attempting to connect to device: ${this.device.name} - iteration ${iteration}`;
		this.state = PawsState.CONNECTING;
		try {
			await BleClient.connect(this.device.deviceId, this.onDisconnect);
		} catch (e) {
			if (iteration >= config.BLE_CONNECT_ITERATIONS) throw e;
			await this.connect(iteration + 1);
		}
	}

	async onDisconnect() {
		console.error("Disconnect");
		this.state = PawsState.UNDEFINED;
		this._sceneInteractionClient = null;
		window.location.reload();
	}

	async initialiseAllValues() {
		this.state = PawsState.INITIALISING;
		this.detailString = "Discovering device capabilities";

		// Discover capabilities from Base Service
		await this.discoverCapabilities();

		// Initialize scene interaction if available
		await this.initializeSceneInteraction();

		this.detailString = "Device initialization complete";
	}

	/**
	 * Discover device capabilities from the Base Service
	 */
	async discoverCapabilities(): Promise<void> {
		if (!this.device?.deviceId) throw new Error("Device not connected");

		try {
			console.log('🔍 Discovering device capabilities...');

			// Read from the ActiveSceneCapabilities characteristic
			const capabilitiesData = await BleClient.read(
				this.device.deviceId,
				config.UUIDS.PawsBaseService,
				config.UUIDS.PawsBaseCharacteristics.ActiveSceneCapabilities
			);

			console.log('📊 Raw capabilities data:', capabilitiesData);

			// Try to decode the capabilities
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

				this._capabilities = sceneCapabilities;

			} catch (parseError) {
				console.log('⚠️ Could not parse capabilities as JSON, treating as comma-separated string');

				// Parse comma-separated capabilities string
				const capabilitiesText = new TextDecoder().decode(capabilitiesData.buffer as ArrayBuffer);
				const cleanedText = capabilitiesText.replace(/\x00/g, '');
				const capabilityNames = cleanedText.split(',').map(cap => cap.trim()).filter(cap => cap.length > 0);

				// Convert to our format
				this._capabilities = [{
					sceneId: 'ID[TEST]',
					capabilities: capabilityNames.map(capName => {
						let type: 'get' | 'set' | 'unknown' = 'unknown';
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
			}

			console.log('✅ Discovered capabilities:', this._capabilities);

		} catch (error) {
			console.error('❌ Failed to discover capabilities:', error);

			// Fallback: create default capabilities
			this._capabilities = [{
				sceneId: 'ID[TEST]',
				capabilities: [
					{ name: 'getCapabilities', type: 'get', description: 'Retrieve device capabilities' },
					{ name: 'getState', type: 'get', description: 'Get current state' },
					{ name: 'getStateList', type: 'get', description: 'Get list of available states' },
					{ name: 'setState', type: 'set', description: 'Set device state' }
				]
			}];
		}
	}

	/**
	 * Initialize scene interaction service if available
	 */
	async initializeSceneInteraction(): Promise<void> {
		if (!this.device?.deviceId) return;

		try {
			// Check if Scene Interaction Service is available
			const services = await BleClient.getServices(this.device.deviceId);
			const hasSceneService = services.some(s => s.uuid === config.UUIDS.SceneInteractionService);

			if (hasSceneService) {
				console.log('✅ Scene Interaction Service found, initializing...');
				this._sceneInteractionClient = new SceneInteractionClient((event: SceneEvent) => {
					console.log("Received scene event:", event);
					this.emit("onSceneEvent", event);
				});

				await this._sceneInteractionClient.initialize();
				await this._sceneInteractionClient.requestAndConnect(this.device!.deviceId);

				console.log('✅ Scene Interaction Service initialized');
			} else {
				console.log('⚠️ Scene Interaction Service not available');
			}
		} catch (error) {
			console.error('❌ Failed to initialize Scene Interaction Service:', error);
		}
	}

	/**
	 * Send a scene command
	 */
	async sendSceneCommand(sceneId: string, controlId: string, value: string): Promise<void> {
		if (!this._sceneInteractionClient) {
			throw new Error("Scene Interaction Service not available");
		}

		const valueBytes = new TextEncoder().encode(value);
		await this._sceneInteractionClient.sendControl(sceneId, controlId, valueBytes);
	}

	/**
	 * Get device capabilities
	 */
	async getCapabilities(): Promise<SceneCapabilities[]> {
		return this._capabilities;
	}

	/**
	 * Check if scene interaction is available
	 */
	hasSceneInteraction(): boolean {
		return this._sceneInteractionClient !== null;
	}

	async fullSync(setDetail = false) {
		// This method is kept for compatibility but now uses the new structure
		if (setDetail) {
			this.detailString = "Syncing device capabilities";
		}

		await this.discoverCapabilities();
	}
}

/**
 * Modern Scene Interaction Client for the new command structure
 */
class SceneInteractionClient {
	static readonly SCENE_SERVICE_UUID = config.UUIDS.SceneInteractionService;
	static readonly INPUT_CONTROL_UUID = config.UUIDS.SceneInteractionCharacteristics.InputControl;
	static readonly OUTPUT_EVENTS_UUID = config.UUIDS.SceneInteractionCharacteristics.OutputEvents;

	private deviceId: string | null = null;
	private onEventCallback?: (event: SceneEvent) => void;

	constructor(onEventCallback?: (event: SceneEvent) => void) {
		this.onEventCallback = onEventCallback;
	}

	/** Encode sceneId + controlId + value into BLE payload */
	static encodePayload(sceneId: string, controlId: string, valueBytes: Uint8Array): Uint8Array {
		const sceneBytes = new TextEncoder().encode(sceneId);
		const controlBytes = new TextEncoder().encode(controlId);
		const payload = new Uint8Array(2 + sceneBytes.length + controlBytes.length + valueBytes.length);

		let offset = 0;
		payload[offset++] = sceneBytes.length;
		payload.set(sceneBytes, offset);
		offset += sceneBytes.length;

		payload[offset++] = controlBytes.length;
		payload.set(controlBytes, offset);
		offset += controlBytes.length;

		payload.set(valueBytes, offset);
		return payload;
	}

	/** Decode BLE payload into sceneId, eventId, and value */
	static decodePayload(payload: ArrayBuffer): SceneEvent {
		const view = new Uint8Array(payload);
		let offset = 0;

		const sceneLen = view[offset++];
		const sceneId = new TextDecoder().decode(view.slice(offset, offset + sceneLen));
		offset += sceneLen;

		const eventLen = view[offset++];
		const eventId = new TextDecoder().decode(view.slice(offset, offset + eventLen));
		offset += eventLen;

		const value = view.slice(offset);
		return { sceneId, eventId, value };
	}

	/** Initialize BLE client */
	async initialize(): Promise<void> {
		await BleClient.initialize();
	}

	/** Request device and connect */
	async requestAndConnect(deviceId: string): Promise<void> {
		this.deviceId = deviceId;

		// Subscribe to output events
		await this.startNotificationsWithRetries();
	}

	private async startNotificationsWithRetries() {
		return new Promise<void>((resolve, reject) => {
			let attempts = 0;
			const maxAttempts = 5;
			const startNotifications = async () => {
				attempts += 1;
				try {
					if (!this.deviceId) {
						reject(new Error("Device ID is null"));
						return;
					}
					await BleClient.startNotifications(
						this.deviceId,
						SceneInteractionClient.SCENE_SERVICE_UUID,
						SceneInteractionClient.OUTPUT_EVENTS_UUID,
						(event) => {
							const sceneEvent = SceneInteractionClient.decodePayload(event.buffer as ArrayBuffer);
							this.onEventCallback?.(sceneEvent);
						}
					);
					resolve();
				} catch (error) {
					console.error(error)
					if (attempts >= maxAttempts) {
						reject("Max attempts used for notification start");
						return;
					}
					if (!(error instanceof Error) || error.name != 'NotSupportedError')
						throw error;
					console.log(`Device busy, could not subscribe to characteristic ${SceneInteractionClient.OUTPUT_EVENTS_UUID}. Retrying...`);
					setTimeout(startNotifications, 100);
				}
			}
			startNotifications();
		})
	}

	/** Send an InputControl command */
	async sendControl(sceneId: string, controlId: string, valueBytes: Uint8Array): Promise<void> {
		if (!this.deviceId) throw new Error("Device not connected");

		const payload = SceneInteractionClient.encodePayload(sceneId, controlId, valueBytes).buffer;
		await BleClient.write(
			this.deviceId,
			SceneInteractionClient.SCENE_SERVICE_UUID,
			SceneInteractionClient.INPUT_CONTROL_UUID,
			new DataView(payload)
		);
	}

	/** Disconnect from device */
	async disconnect(): Promise<void> {
		if (this.deviceId) {
			await BleClient.disconnect(this.deviceId);
			this.deviceId = null;
		}
	}
}

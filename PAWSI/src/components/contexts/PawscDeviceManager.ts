import { BleClient } from "@capacitor-community/bluetooth-le";
import { EventHandler } from "./EventHandler";

export enum PawscDeviceState {
	FAILED,
	NO_BLUETOOTH,
	NO_DEVICE_FOUND,
	UNDEFINED,
	CHECKING_REQUIREMENTS,
	FINDING_DEVICE,
	CONNECTING,
	INITIALISING,
	READY,
	DISCONNECTED,
}

export class PawscDeviceManager extends EventHandler {
	private static _instance: PawscDeviceManager;
	private _state: PawscDeviceState = PawscDeviceState.UNDEFINED;
	private _deviceId: string | null = null;
	private _connectionCheckInterval: NodeJS.Timeout | null = null;

	public static getInstance(): PawscDeviceManager {
		if (!PawscDeviceManager._instance) {
			PawscDeviceManager._instance = new PawscDeviceManager();
		}
		return PawscDeviceManager._instance;
	}

	public get state(): PawscDeviceState {
		return this._state;
	}

	private setState(newState: PawscDeviceState, detail?: string) {
		this._state = newState;
		this.emit("stateChange", newState, detail);
	}

	public reset(): void {
		this._deviceId = null;
		this.stopConnectionMonitoring();
		this.setState(PawscDeviceState.UNDEFINED);
	}

	public isConnected(): boolean {
		return this._deviceId !== null && this._state === PawscDeviceState.READY;
	}

	public async reconnect(): Promise<void> {
		if (this._deviceId) {
			try {
				this.setState(PawscDeviceState.CONNECTING, "Reconnecting...");
				await BleClient.connect(this._deviceId, this.handleDisconnect);
				await this.setupNotifications();
				this.setState(PawscDeviceState.READY);
			} catch (err) {
				this.setState(PawscDeviceState.FAILED, `Reconnection failed: ${(err as Error).message}`);
			}
		}
	}

	public async disconnect(): Promise<void> {
		if (this._deviceId) {
			try {
				await BleClient.disconnect(this._deviceId);
			} catch (error) {
				console.error("Error during disconnect:", error);
			} finally {
				this._deviceId = null;
				this.setState(PawscDeviceState.DISCONNECTED, "Manually disconnected");
			}
		}
	}

	/* ---------- Helpers ---------- */

	private normalizeToUint8Array(input: any): Uint8Array {
		if (!input) return new Uint8Array([]);

		if (input instanceof Uint8Array) return input;
		if (input instanceof ArrayBuffer) return new Uint8Array(input);
		if (input instanceof DataView) {
			return new Uint8Array(input.buffer, input.byteOffset, input.byteLength);
		}

		if (typeof input === "object" && "value" in input) {
			const v = (input as any).value;
			if (v instanceof Uint8Array) return v;
			if (v instanceof ArrayBuffer) return new Uint8Array(v);
			if (v instanceof DataView) return new Uint8Array(v.buffer, v.byteOffset, v.byteLength);
			if (typeof v === "string") return this.base64ToUint8Array(v);
		}

		if (typeof input === "string") return this.base64ToUint8Array(input);

		if (Array.isArray(input) && input.every((x) => typeof x === "number")) {
			return new Uint8Array(input as number[]);
		}

		try {
			return new Uint8Array(input);
		} catch {
			return new Uint8Array([]);
		}
	}

	private base64ToUint8Array(base64: string): Uint8Array {
		const binary = atob(base64);
		const len = binary.length;
		const bytes = new Uint8Array(len);
		for (let i = 0; i < len; i++) {
			bytes[i] = binary.charCodeAt(i);
		}
		return bytes;
	}

	private utf16leEncode(str: string): Uint8Array {
		const buf = new ArrayBuffer(str.length * 2);
		const view = new DataView(buf);
		for (let i = 0; i < str.length; i++) {
			view.setUint16(i * 2, str.charCodeAt(i), true);
		}
		return new Uint8Array(buf);
	}

	private utf16leDecode(bytes: Uint8Array): string {
		if (!bytes || bytes.length === 0) return "";
		try {
			const decoder = new TextDecoder("utf-16le");
			return decoder.decode(bytes);
		} catch {
			const dv = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
			let out = "";
			for (let i = 0; i < dv.byteLength; i += 2) {
				const code = dv.getUint16(i, true);
				if (code === 0) break;
				out += String.fromCharCode(code);
			}
			return out;
		}
	}

	/* ---------- Lifecycle ---------- */

	public async init() {
		this.setState(PawscDeviceState.CHECKING_REQUIREMENTS);
		try {
			await BleClient.initialize();
		} catch {
			this.setState(PawscDeviceState.NO_BLUETOOTH);
			return;
		}

		try {
			const device = await this.requestDevice();
			if (!device) {
				this.setState(PawscDeviceState.NO_DEVICE_FOUND, "No PAWSC device found. Please ensure your device is powered on and in range.");
				return;
			}
			this.setState(PawscDeviceState.CONNECTING, device.deviceId);
			await BleClient.connect(device.deviceId, this.handleDisconnect);

			this._deviceId = device.deviceId;
			this.setState(PawscDeviceState.INITIALISING);

			await this.setupNotifications();

			this.setState(PawscDeviceState.READY);
		} catch (err) {
			this.setState(PawscDeviceState.FAILED, (err as Error).message);
		}
	}

	private async requestDevice() {
		return new Promise<any>((resolve) => {
			let resolved = false;

			const timeout = setTimeout(() => {
				if (!resolved) {
					resolved = true;
					resolve(null);
				}
			}, 10000);

			BleClient.requestDevice({
				services: [UuidRegistry.PawsBaseService], // Only base service is advertised
				optionalServices: [UuidRegistry.SceneInteractionService, UuidRegistry.DeviceInfoService],
			})
				.then((device) => {
					if (!resolved) {
						resolved = true;
						clearTimeout(timeout);
						resolve(device);
					}
				})
				.catch(() => {
					if (!resolved) {
						resolved = true;
						clearTimeout(timeout);
						resolve(null);
					}
				});
		});
	}

	private async setupNotifications() {
		if (!this._deviceId) throw new Error("No device connected");

		const svc = UuidRegistry.SceneInteractionService;
		const chr = UuidRegistry.SceneInteractionCharacteristics.OutputEvents;

		// Start notifications for scene output events (indications)
		await BleClient.startNotifications(this._deviceId, svc, chr, (payload) => {
			const bytes = this.normalizeToUint8Array(payload);
			const decoded = PawscDeviceManager.ScenePayload.decode(bytes);
			
			// Emit scene output event
			this.emit("sceneOutput", decoded.sceneId, decoded.controlOrEventId, decoded.value);
			
			// Update scene state if this is a state change event
			if (decoded.controlOrEventId === "state" || decoded.controlOrEventId === "status") {
				this.updateSceneState(decoded.sceneId, decoded.value);
			}
			
			// Log the event
			this.emit("stateChange", this._state, `Scene event ${decoded.sceneId}:${decoded.controlOrEventId}`);
		});

		// Start connection monitoring
		this.startConnectionMonitoring();
	}

	private updateSceneState(sceneId: string, value: Uint8Array) {
		try {
			const stateValue = new TextDecoder().decode(value);
			this.emit("sceneStateChange", sceneId, stateValue);
		} catch (error) {
			console.error("Failed to decode scene state:", error);
		}
	}

	private startConnectionMonitoring() {
		// Clear any existing interval
		if (this._connectionCheckInterval) {
			clearInterval(this._connectionCheckInterval);
		}

		// Check connection every 2 seconds
		this._connectionCheckInterval = setInterval(async () => {
			if (this._deviceId && this._state === PawscDeviceState.READY) {
				try {
					// Try to read a simple characteristic to check if connection is alive
					await BleClient.read(this._deviceId, UuidRegistry.PawsBaseService, UuidRegistry.PawsBaseCharacteristics.SceneList);
				} catch (error) {
					console.log("Connection check failed, device may be disconnected");
					this.handleDisconnect();
				}
			}
		}, 2000);
	}

	private stopConnectionMonitoring() {
		if (this._connectionCheckInterval) {
			clearInterval(this._connectionCheckInterval);
			this._connectionCheckInterval = null;
		}
	}

	private handleDisconnect = () => {
		console.log("Device disconnected, updating state...");
		this._deviceId = null;
		// Stop connection monitoring
		this.stopConnectionMonitoring();
		// Force state update to ensure UI gets notified
		this.setState(PawscDeviceState.DISCONNECTED, "Device disconnected");
		// Also emit a specific disconnect event
		this.emit("deviceDisconnected", "Device disconnected unexpectedly");
	};

	/* ---------- Read/Write ---------- */

	private async readCharacteristic(serviceUuid: string, charUuid: string): Promise<Uint8Array> {
		if (!this._deviceId) throw new Error("Not connected to a device");
		const result = await BleClient.read(this._deviceId, serviceUuid, charUuid);
		return this.normalizeToUint8Array(result);
	}

	public async getActiveScene(): Promise<string> {
		const data = await this.readCharacteristic(
			UuidRegistry.PawsBaseService,
			UuidRegistry.PawsBaseCharacteristics.ActiveScene
		);
		return this.utf16leDecode(data);
	}

	public async getSceneState(sceneId: string): Promise<string> {
		try {
			// Try to get scene state from the scene interaction service
			// This reads the last known state from the OutputEvents characteristic
			const data = await this.readCharacteristic(
				UuidRegistry.SceneInteractionService,
				UuidRegistry.SceneInteractionCharacteristics.OutputEvents
			);
			
			if (data.length > 0) {
				const decoded = PawscDeviceManager.ScenePayload.decode(data);
				if (decoded.sceneId === sceneId) {
					return new TextDecoder().decode(decoded.value);
				}
			}
			
			// Fallback to active scene capabilities
			return "unknown";
		} catch (error) {
			console.error("Failed to get scene state:", error);
			return "unknown";
		}
	}

	public async getSceneList(): Promise<string[]> {
		const data = await this.readCharacteristic(
			UuidRegistry.PawsBaseService,
			UuidRegistry.PawsBaseCharacteristics.SceneList
		);
		const sceneListStr = this.utf16leDecode(data);
		return sceneListStr.split(',').filter(s => s.trim().length > 0);
	}

	public async getActiveSceneCapabilities(): Promise<string[]> {
		const data = await this.readCharacteristic(
			UuidRegistry.PawsBaseService,
			UuidRegistry.PawsBaseCharacteristics.ActiveSceneCapabilities
		);
		const capabilitiesStr = this.utf16leDecode(data);
		return capabilitiesStr.split(',').filter(s => s.trim().length > 0);
	}

	public async setActiveScene(sceneId: string): Promise<void> {
		if (!this._deviceId) throw new Error("Not connected");
		const payload = this.utf16leEncode(sceneId);
		await BleClient.write(
			this._deviceId,
			UuidRegistry.PawsBaseService,
			UuidRegistry.PawsBaseCharacteristics.ActiveScene,
			new DataView(payload.buffer, payload.byteOffset, payload.byteLength)
		);
	}

	public async getDeviceInfo(characteristic: string): Promise<string> {
		const data = await this.readCharacteristic(
			UuidRegistry.DeviceInfoService,
			characteristic
		);
		return this.utf16leDecode(data);
	}

	public async sendSceneCommand(sceneId: string, controlId: string, value: Uint8Array) {
		if (!this._deviceId) throw new Error("Not connected");
		const payload = PawscDeviceManager.ScenePayload.encode(sceneId, controlId, value);
		await BleClient.write(
			this._deviceId,
			UuidRegistry.SceneInteractionService,
			UuidRegistry.SceneInteractionCharacteristics.InputControl,
			new DataView(payload.buffer, payload.byteOffset, payload.byteLength)
		);
	}

	/* ---------- Payload Codec ---------- */

	public static ScenePayload = {
		encode(sceneId: string, controlId: string, value: Uint8Array): Uint8Array {
			const sceneBytes = new TextEncoder().encode(sceneId);
			const idBytes = new TextEncoder().encode(controlId);

			const buf = new Uint8Array(2 + sceneBytes.length + idBytes.length + value.length);
			let offset = 0;
			buf[offset++] = sceneBytes.length;
			buf.set(sceneBytes, offset);
			offset += sceneBytes.length;
			buf[offset++] = idBytes.length;
			buf.set(idBytes, offset);
			offset += idBytes.length;
			buf.set(value, offset);

			return buf;
		},

		decode(payload: Uint8Array): { sceneId: string; controlOrEventId: string; value: Uint8Array } {
			try {
				let index = 0;
				const sceneLen = payload[index++];
				const sceneId = new TextDecoder().decode(payload.slice(index, index + sceneLen));
				index += sceneLen;
				const idLen = payload[index++];
				const controlOrEventId = new TextDecoder().decode(payload.slice(index, index + idLen));
				index += idLen;
				const value = payload.slice(index);
				return { sceneId, controlOrEventId, value };
			} catch {
				return { sceneId: "", controlOrEventId: "", value: new Uint8Array([]) };
			}
		},
	};
}

/* ---------- UUID Registry ---------- */
export const UuidRegistry = {
	PawsBaseService: "50415753-0001-0001-0000-000000000000",
	SceneInteractionService: "50415753-0001-0002-0000-000000000000",
	DeviceInfoService: "50415753-0001-0003-0000-000000000000",
	PawsBaseCharacteristics: {
		SceneList: "50415753-0001-0001-0001-000000000000",
		ControllerList: "50415753-0001-0001-0002-000000000000",
		InterfaceList: "50415753-0001-0001-0003-000000000000",
		ActiveScene: "50415753-0001-0001-0004-000000000000",
		ActiveSceneCapabilities: "50415753-0001-0001-0005-000000000000",
	},
	SceneInteractionCharacteristics: {
		InputControl: "50415753-0001-0002-0001-000000000000",
		OutputEvents: "50415753-0001-0002-0002-000000000000",
	},
	DeviceInfoCharacteristics: {
		Timestamp: "50415753-0001-0003-0001-000000000000",
		Uptime: "50415753-0001-0003-0002-000000000000",
		CpuTemp: "50415753-0001-0003-0003-000000000000",
		CpuLoad: "50415753-0001-0003-0004-000000000000",
		Network: "50415753-0001-0003-0005-000000000000",
	},
};

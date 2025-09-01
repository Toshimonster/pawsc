import {
	BleClient,
	BleDevice,
	dataViewToText,
	numbersToDataView,
	textToDataView,
} from "@capacitor-community/bluetooth-le";
import config from "../../config";
import { useRef } from "react";

function floatToDataView(f: number) {
	const x = new Float32Array(1);
	x[0] = f;
	return new DataView(x.buffer);
}

export default function BleEnableDebug() {
	const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

	const activeState = useRef("Idle");
	const randSleep = () => sleep((Math.random() * 100 + 0.05) * 10);
	BleClient.isEnabled = async () => {
		await randSleep();
		await randSleep();
		return true;
	};
	BleClient.initialize = async () => {
		await randSleep();
	};
	BleClient.read = async (deviceId, service, characteristic) => {
		if (!deviceId || !service) throw new Error("Invalid read");
		console.log(`READ: ${deviceId}|${service}|${characteristic}`);
		await randSleep();
		const x = new TextEncoder();
		return new DataView(x.encode("UNKNOWN").buffer);
	};
	BleClient.write = async (
		deviceId,
		service,
		characteristic,
		value,
		options
	) => {
		if (!deviceId || !service) throw new Error("Invalid read");
		console.log(
			`WRITE: ${deviceId}|${service}|${characteristic}|${dataViewToText(value)}`
		);
		await randSleep();
	};
	BleClient.requestDevice = async (options) => {
		await randSleep();
		const device: BleDevice = {
			deviceId: "test",
			name: "test",
			uuids: ["test"],
		};
		return device;
	};
	BleClient.connect = async (deviceId, onDisconnect, options) => {
		await randSleep();
	};
}

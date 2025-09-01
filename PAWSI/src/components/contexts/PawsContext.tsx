import React, {
	createContext,
	ReactNode,
	useEffect,
	useReducer,
	useState,
} from "react";
import {
	PawsDevice,
	PawsDeviceProperties,
	PawsProperty,
	PawsState,
	SceneEvent,
	SceneCapabilities,
} from "./PawsDevice";

export interface PawsDeviceContextProps {
	device: PawsDevice;
	state: PawsState;
	detailString: string;
	properties: PawsDevicePropertiesValues;
	capabilities: SceneCapabilities[];
	hasSceneInteraction: boolean;
	sendSceneCommand: (sceneId: string, controlId: string, value: string) => Promise<void>;
	states: string[];
}

type PawsDevicePropertiesValues = { [p: string]: any };

/**
 * Main context
 */
export const PawsDeviceContext = createContext<
	PawsDeviceContextProps | undefined
>(undefined);

/**
 * Status dispatch
 */
type PropertiesAction = {
	type: string;
	prop_name?: string;
	prop_value?: any;
};

function propertiesReducer(
	state: PawsDevicePropertiesValues,
	action: PropertiesAction
): PawsDeviceProperties {
	const copy = { ...state };
	switch (action.type) {
		case "UPDATE_PROPERTY": {
			copy[action.prop_name!] = action.prop_value!;
			return copy;
		}
	}
	return copy;
}

/**
 * Reduces a PawsDeviceProperties to PawsDevicePropertiesValues
 * @param prop
 */
function reduceProperties(prop: PawsDeviceProperties) {
	const ret: PawsDevicePropertiesValues = {};
	for (const key in prop) {
		ret[key] = prop[key].value;
	}
	return ret;
}

// Component to wrap your app and provide the PawsDevice instance
export function PawsDeviceProvider({
	children,
	debug = false,
}: {
	children: ReactNode;
	debug?: boolean;
}) {
	const [device] = useState(new PawsDevice(debug));
	const [state, setState] = useState(device.state);
	const [detailString, setDetailString] = useState(device.detailString);
	const [properties, dispatchProperties] = useReducer(
		propertiesReducer,
		reduceProperties(device.properties)
	);
	const [capabilities, setCapabilities] = useState<SceneCapabilities[]>([]);
	const [hasSceneInteraction, setHasSceneInteraction] = useState(false);
	const [states, setStates] = useState<string[]>([]);

	useEffect(() => {
		// Initialize capabilities and scene interaction status
		const initializeDevice = async () => {
			try {
				console.log("🔄 Initializing device capabilities and scene interaction...");
				const deviceCapabilities = await device.getCapabilities();
				setCapabilities(deviceCapabilities);
				const hasScene = device.hasSceneInteraction();
				setHasSceneInteraction(hasScene);
				console.log(`✅ Device initialized - Capabilities: ${deviceCapabilities.length}, Scene Interaction: ${hasScene}`);
			} catch (error) {
				console.error("❌ Failed to initialize device capabilities:", error);
			}
		};

		const onStateChange = device.subscribe(
			"onStateChange",
			(value: PawsState) => {
				setState(value);
				// Initialize device capabilities when it becomes ready
				if (value === PawsState.READY) {
					console.log("🚀 Device became ready, initializing capabilities...");
					initializeDevice();
				}
			}
		);
		const onDetailStringChange = device.subscribe(
			"onDetailStringChange",
			(value: string) => {
				setDetailString(value);
			}
		);
		const onPropertyChange = device.subscribe(
			"onPropertyChange",
			(prop: PawsProperty<any>) => {
				dispatchProperties({
					type: "UPDATE_PROPERTY",
					prop_name: prop.name,
					prop_value: prop.value,
				});
			}
		);
		const onSceneEvent = device.subscribe(
			"onSceneEvent",
			(event: SceneEvent) => {
				console.log("Context received scene event:", event);
				if (event.eventId === 'getStateList') {
					// Convert Uint8Array to string array
					const stateString = new TextDecoder().decode(event.value);
					const stateArray = stateString.split(',');
					console.log("Parsed states: ", stateArray);
					setStates(stateArray);
				}
			}
		);

		// Initialize when device is ready
		if (device.state === PawsState.READY) {
			initializeDevice();
		}

		return () => {
			device.unsubscribe("onStateChange", onStateChange);
			device.unsubscribe("onDetailStringChange", onDetailStringChange);
			device.unsubscribe("onPropertyChange", onPropertyChange);
			device.unsubscribe("onSceneEvent", onSceneEvent);
		};
	}, [device]);

	// Send scene command function
	const sendSceneCommand = async (sceneId: string, controlId: string, value: string) => {
		try {
			await device.sendSceneCommand(sceneId, controlId, value);
		} catch (error) {
			console.error("Failed to send scene command:", error);
			throw error;
		}
	};

	const context: PawsDeviceContextProps = {
		device: device,
		state: state,
		detailString: detailString,
		properties: properties,
		capabilities: capabilities,
		hasSceneInteraction: hasSceneInteraction,
		sendSceneCommand: sendSceneCommand,
		states: states,
	};

	return (
		<PawsDeviceContext.Provider value={context}>
			{children}
		</PawsDeviceContext.Provider>
	);
}

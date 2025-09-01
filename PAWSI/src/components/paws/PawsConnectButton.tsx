import { IonButton } from "@ionic/react";
import React, { useCallback, useContext } from "react";
import { PawsState } from "../contexts/PawsDevice";
import {
	PawsDeviceContext,
	PawsDeviceContextProps,
} from "../contexts/PawsContext";

interface PawsConnectButtonProps {
	setReady: (value: ((prevState: boolean) => boolean) | boolean) => void;
}

export function PawsConnectButton({ setReady }: PawsConnectButtonProps) {
	const Paws = useContext(PawsDeviceContext) as PawsDeviceContextProps;

	const deviceConnect = useCallback(async () => {
		const startState = await Paws.device.main();
		if (startState >= PawsState.READY) {
			setReady(true);
		}
	}, [Paws.device, setReady]);

	switch (Paws.state) {
		case PawsState.FAILED:
			return (
				<IonButton color="danger" onClick={deviceConnect}>
					Failed
				</IonButton>
			);
		case PawsState.NO_BLUETOOTH:
			return (
				<IonButton color="light" onClick={deviceConnect}>
					Bluetooth Not Enabled
				</IonButton>
			);
		case PawsState.UNDEFINED:
			return <IonButton onClick={deviceConnect}>Connect</IonButton>;

		case PawsState.READY:
			return (
				<IonButton disabled={true} color="success">
					Connected!
				</IonButton>
			);
		default:
			return <IonButton disabled={true}>Connecting...</IonButton>;
	}
}

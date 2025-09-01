import React, { useEffect } from "react";
import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import { PawsStatusCard } from "../components/paws/PawsStatusCard";
import { PawsConnectButton } from "../components/paws/PawsConnectButton";

interface BluetoothConnectPageProps {
	setReady: (value: ((prevState: boolean) => boolean) | boolean) => void;
}

export function BluetoothConnectPage({ setReady }: BluetoothConnectPageProps) {
	useEffect(() => {
		//initializeBluetooth();

		return () => {
			//disconnectFromDevice(); // Disconnect when leaving the page
		};
	}, []);

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Bluetooth Page</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						paddingTop: "1em",
					}}
				>
					<PawsConnectButton setReady={setReady} />
				</div>
				<div style={{ display: "flex", justifyContent: "center" }}>
					<PawsStatusCard />
				</div>
			</IonContent>
		</IonPage>
	);
}

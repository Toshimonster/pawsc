import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import React, { ReactNode } from "react";

export function PageWrapper(props: { name: string; children: ReactNode }) {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>{props.name}</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">{props.name}</IonTitle>
					</IonToolbar>
				</IonHeader>
				{props.children}
			</IonContent>
		</IonPage>
	);
}

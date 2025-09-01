import { Redirect, Route, useHistory } from "react-router-dom";
import {
	IonApp,
	IonIcon,
	IonLabel,
	IonRouterOutlet,
	IonTabBar,
	IonTabButton,
	IonTabs,
	setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { apps, bluetooth, brush, cog, videocam, flask } from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { PixelDraw } from "./pages/PixelDraw";
import { States } from "./pages/States";
import { Status } from "./pages/Status";
import { VideoSharePage } from "./pages/VideoSharePage";
import { BluetoothConnectPage } from "./pages/BluetoothConnectPage";
import TestPage from "./pages/TestPage";
import React, { useContext, useState } from "react";
import {
	PawsDeviceContext,
	PawsDeviceProvider,
} from "./components/contexts/PawsContext";
import { PawsState } from "./components/contexts/PawsDevice";

setupIonicReact();

const App: React.FC = () => {
	return (
		<PawsDeviceProvider>
			<IonApp>
				<PawsRouter />
			</IonApp>
		</PawsDeviceProvider>
	);
};

function PawsRouter() {
	// Bluetooth initialised
	const [ready, setReady] = useState(false); //!Paws || Paws.state >= PawsState.READY;
	/**
	 * Wraps a component that is dependent on bluetooth devices;
	 * Will redirect to /bluetooth if the device is not ready
	 */
	const IsDependant = (props: { children: JSX.Element }): JSX.Element => {
		return ready ? props.children : <Redirect to="/bluetooth" />;
	};

	return (
		<IonReactRouter>
			<IonTabs>
				<IonRouterOutlet>
					<Route exact path="/bluetooth">
						<BluetoothConnectPage setReady={setReady} />
					</Route>
					<Route exact path="/pixeldraw">
						<IsDependant>
							<PixelDraw />
						</IsDependant>
					</Route>
					<Route exact path="/states">
						<IsDependant>
							<States />
						</IsDependant>
					</Route>
					<Route exact path="/status">
						<IsDependant>
							<Status />
						</IsDependant>
					</Route>
					<Route exact path="/video">
						<IsDependant>
							<VideoSharePage />
						</IsDependant>
					</Route>
					<Route exact path="/test">
						<TestPage />
					</Route>
					<Route>
						<Redirect to="/bluetooth" />
					</Route>
				</IonRouterOutlet>
				<IonTabBar slot="bottom">
					<IonTabButton tab="bluetooth" href="/bluetooth">
						<IonIcon aria-hidden="true" icon={bluetooth} />
						<IonLabel>Bluetooth</IonLabel>
					</IonTabButton>

					<IonTabButton tab="states" href="/states" disabled={!ready}>
						<IonIcon aria-hidden="true" icon={apps} />
						<IonLabel>States</IonLabel>
					</IonTabButton>
					<IonTabButton tab="status" href="/status" disabled={!ready}>
						<IonIcon aria-hidden="true" icon={cog} />
						<IonLabel>Status</IonLabel>
					</IonTabButton>
					<IonTabButton tab="pixeldraw" href="/pixeldraw" disabled={!ready}>
						<IonIcon aria-hidden="true" icon={brush} />
						<IonLabel>Pixel Draw</IonLabel>
					</IonTabButton>
					<IonTabButton tab="video" href="/video" disabled={!ready}>
						<IonIcon aria-hidden="true" icon={videocam} />
						<IonLabel>Video Share</IonLabel>
					</IonTabButton>
					<IonTabButton tab="test" href="/test">
						<IonIcon aria-hidden="true" icon={flask} />
						<IonLabel>Test</IonLabel>
					</IonTabButton>
				</IonTabBar>
			</IonTabs>
		</IonReactRouter>
	);
}

export default App;

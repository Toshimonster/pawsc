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
import { 
	apps, 
	bluetooth, 
	gameController, 
	settings, 
	flask 
} from "ionicons/icons";

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
import React from "react";

// Import pages
import BluetoothPage from "./pages/BluetoothPage";
import DashboardPage from "./pages/DashboardPage";
import SceneControlPage from "./pages/SceneControlPage";
import TestModePage from "./pages/TestModePage";

// Import device provider
import { DeviceProvider } from "./components/contexts/DeviceProvider";

setupIonicReact();

const App: React.FC = () => {
	return (
		<IonApp>
			<PawsRouter />
		</IonApp>
	);
};

function PawsRouter() {
	return (
		<DeviceProvider>
			<IonReactRouter>
				<IonTabs>
					<IonRouterOutlet>
						<Route exact path="/dashboard">
							<DashboardPage />
						</Route>
						<Route exact path="/scene-control">
							<SceneControlPage />
						</Route>
						<Route exact path="/test-mode">
							<TestModePage />
						</Route>
						<Route exact path="/bluetooth">
							<BluetoothPage />
						</Route>
						<Route exact path="/">
							<Redirect to="/dashboard" />
						</Route>
					</IonRouterOutlet>

					<IonTabBar slot="bottom">
						<IonTabButton tab="dashboard" href="/dashboard">
							<IonIcon icon={apps} />
							<IonLabel>Dashboard</IonLabel>
						</IonTabButton>

						<IonTabButton tab="scene-control" href="/scene-control">
							<IonIcon icon={gameController} />
							<IonLabel>Scenes</IonLabel>
						</IonTabButton>

						<IonTabButton tab="test-mode" href="/test-mode">
							<IonIcon icon={flask} />
							<IonLabel>Test</IonLabel>
						</IonTabButton>

						<IonTabButton tab="bluetooth" href="/bluetooth">
							<IonIcon icon={bluetooth} />
							<IonLabel>Connection</IonLabel>
						</IonTabButton>
					</IonTabBar>
				</IonTabs>
			</IonReactRouter>
		</DeviceProvider>
	);
}

export default App;

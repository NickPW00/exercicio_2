import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AbaEventos from "./pages/AbaEventos";
import SobreApp from "./pages/SobreApp";

const Drawer = createDrawerNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Drawer.Navigator>
				<Drawer.Screen name="SobreApp" component={SobreApp} />
				<Drawer.Screen name="AbaEventos" component={AbaEventos} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
}



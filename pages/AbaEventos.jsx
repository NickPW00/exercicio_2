import EventosDisponiveis from "./EventosDisponiveis";
import TabRelecionadoEventos from "./TabRelacionadoEventos";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function AbaEventos() {
    return (
            <Stack.Navigator>
                <Stack.Screen name="Lista" component={EventosDisponiveis} options={{headerShown: false}}/>
                <Stack.Screen name="Evento" component={TabRelecionadoEventos} />
            </Stack.Navigator>
    );
}
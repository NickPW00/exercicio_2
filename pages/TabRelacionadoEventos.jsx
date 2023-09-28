import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function TabRelecionadoEventos({ route }) {
    const dados = route.params;
    const item = dados.dado;
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Evento"
                component={EventoSelecionado}
                initialParams={item}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Voos"
                component={Voos}
                initialParams={item}
                options={{ headerShown: false }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#f0f0f0",
    },
    eventDetails: {
        backgroundColor: "#fff",
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    },
    eventTitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 8,
        color: "#333",
    },
    eventInfo: {
        fontSize: 18,
        marginBottom: 8,
        color: "#555",
    },
    eventImage: {
        width: "100%",
        height: 200,
        marginBottom: 16,
        borderRadius: 8,
    },
});

function EventoSelecionado({ route }) {
    const dados = route.params;
    const item = dados;
    return (
        <View style={styles.container}>
            <View style={styles.eventDetails}>
                <Text style={styles.eventTitle}>{item.titulo}</Text>
                <Text style={styles.eventInfo}>Local: {item.local}</Text>
                <Text style={styles.eventInfo}>Data: {item.data}</Text>
                <Text style={styles.eventInfo}>Preço: {item.preco}</Text>
                {item.imagens.map((item, index) => (
                    <Image
                        key={index}
                        style={styles.eventImage}
                        source={{ uri: item }}
                    />
                ))}
            </View>
        </View>
    );
}

function Voos({ route }) {
    const dados = route.params;
    const voo = dados.voo;
    return (
        <View style={styles.container}>
            <View style={styles.eventDetails}>
                <Text style={styles.eventTitle}>Voo</Text>
                <Text style={styles.eventInfo}>Companhia Aérea: {voo.companhia_aerea}</Text>
                <Text style={styles.eventInfo}>Origem: {voo.origem}</Text>
                <Text style={styles.eventInfo}>Destino: {voo.destino}</Text>
                <Text style={styles.eventInfo}>Horário de Partida: {voo.horario_partida}</Text>
                <Text style={styles.eventInfo}>Horário de Chegada: {voo.horario_chegada}</Text>
            </View>
        </View>
    );
}

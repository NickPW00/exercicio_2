import React from "react";
import { Pressable, Image, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Eventos({ item }) {
    const navigation = useNavigation();

    console.log(item)

    return (
        <Pressable
            onPress={() => navigation.navigate("Evento", { dado: item })}
            style={styles.card}
        >
            <Image style={styles.image} source={{ uri: item.imagens[0] }} />
            <Text style={styles.title}>{item.titulo}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
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
        alignItems: "center",
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 10,
        borderRadius: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
    },
});

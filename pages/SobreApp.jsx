import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SobreApp() {
    return (
        <View style={styles.container}>
            <Text style={styles.appName}>App sobre eventos</Text>
            <Text style={styles.developer}>Desenvolvedor: Nicholas Puggian Wright</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    appName: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
        color: "#333",
    },
    developer: {
        fontSize: 18,
        color: "#666",
    },
});

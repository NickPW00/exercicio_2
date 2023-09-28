import React, { useEffect, useState } from "react";
import { View, FlatList, TextInput, StyleSheet, ActivityIndicator, Text } from "react-native";
import axios from 'axios';
import Eventos from "../components/Eventos";

export default function EventosDisponiveis() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://mocki.io/v1/ac99d854-0bc1-42a1-8a98-b6cbf55e2c77");
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, []);

  const filteredData = data.filter((item) =>
    item.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Pesquisar eventos..."
        onChangeText={(text) => setSearchTerm(text)} 
      />
      {isLoading ? (
        <ActivityIndicator style={styles.loader} size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={filteredData}
          renderItem={({ item }) => <Eventos item={item} />}
          keyExtractor={(item) => item.titulo}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 16,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
    backgroundColor: "#fff",
  },
  loader: {
    marginTop: 16,
  },
});


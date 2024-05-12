import { StatusBar } from "expo-status-bar";

import { useEffect, useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { GET_APARTMENTS } from "../services/apartment.API";
export default function Apartments({ navigation }) {
  const [apartments, setApartments] = useState([]);
  const fetchApartments = async () => {
    GET_APARTMENTS()
      .then((res) => {
        setApartments(res);
      })
      .catch((error) => {
        console.error("Failed to fetch apartments:", error);
      });
  };
  useEffect(() => {
    fetchApartments();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={apartments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable
            onTouchEnd={() => navigation.push("Apartment", { id: item.id })}
            style={styles.card}
          >
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.description}>{item.price}</Text>
            <Text style={styles.description}>{item.location}</Text>
          </Pressable>
        )}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  card: {
    margin: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
});

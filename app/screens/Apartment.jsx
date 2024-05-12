import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { GET_APARTMENTS_BY_ID } from "../services/apartment.API";
export default function Apartment({ route }) {
  const [apartment, setApartment] = useState(null);
  const { id } = route.params;
  useEffect(() => {
    if (id) {
      fetchApartmentDetails(id);
    }
  }, [id]);

  const fetchApartmentDetails = async (id) => {
    GET_APARTMENTS_BY_ID(id)
      .then((res) => {
        setApartment(res);
      })
      .catch((error) => {
        console.error("Error fetching apartment details:", error);
      });
  };

  return apartment != null ? (
    <View style={styles.card}>
      <Text style={styles.title}>{apartment.name}</Text>
      <Text style={styles.location}>{apartment.price}</Text>
      <Text style={styles.location}>{apartment.location}</Text>
      <Text style={styles.location}>{apartment.description}</Text>
    </View>
  ) : (
    <View style={styles.container}>
      <Text>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 29,
  },
  card: {
    margin: 10,
    padding: 10,
    // backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
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

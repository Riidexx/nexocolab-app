import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";

const MOCK_OBJECTS = [
  {
    id: "1",
    title: "Taladro",
    owner: "Carlos",
    category: "Herramientas",
  },
  {
    id: "2",
    title: "Carpa",
    owner: "María",
    category: "Camping",
  },
  {
    id: "3",
    title: "Calculadora científica",
    owner: "Juan",
    category: "Estudio",
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={MOCK_OBJECTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>Categoría: {item.category}</Text>
            <Text>Dueño: {item.owner}</Text>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Solicitar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    backgroundColor: "#1f2933",
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 4,
    color: "white",
  },
  button: {
    marginTop: 10,
    backgroundColor: "#2563eb",
    padding: 10,
    borderRadius: 6,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
  },
});

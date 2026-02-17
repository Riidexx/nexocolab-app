import { View, Text, FlatList, StyleSheet } from "react-native";

type RequestItem = {
  id: string;
  title: string;
  owner: string;
  status: "Solicitado" | "Aprobado" | "Rechazado" | "Devuelto";
};

const MOCK_REQUESTS: RequestItem[] = [
  { id: "1", title: "Taladro", owner: "Carlos", status: "Solicitado" },
  { id: "2", title: "Carpa", owner: "María", status: "Aprobado" },
  { id: "3", title: "Calculadora científica", owner: "Juan", status: "Devuelto" },
];

export default function RequestsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Mis solicitudes</Text>

      <FlatList
        data={MOCK_REQUESTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.text}>Dueño: {item.owner}</Text>
            <Text style={styles.text}>Estado: {item.status}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  h1: { fontSize: 22, fontWeight: "700", marginBottom: 12, color: "white" },
  card: {
    backgroundColor: "#1f2933",
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
  },
  title: { fontSize: 18, fontWeight: "600", color: "white", marginBottom: 4 },
  text: { color: "#cbd5e1" },
});

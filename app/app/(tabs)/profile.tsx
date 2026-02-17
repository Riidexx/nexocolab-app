import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

export default function ProfileScreen() {
  const user = {
    name: "Maicol",
    rating: 4.8,
    loans: 6,
    city: "Colombia",
  };

  const onLogin = () => {
    Alert.alert("Login (mock)", "Luego conectamos Auth real (Supabase/Firebase).");
  };

  const onLogout = () => {
    Alert.alert("Sesión cerrada (mock)", "Esto es simulado por ahora.");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Perfil</Text>

      <View style={styles.card}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.text}>Calificación: {user.rating}</Text>
        <Text style={styles.text}>Préstamos: {user.loans}</Text>
        <Text style={styles.text}>Ciudad: {user.city}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={onLogin}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.secondary]} onPress={onLogout}>
        <Text style={styles.buttonText}>Cerrar sesión</Text>
      </TouchableOpacity>
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
    marginBottom: 16,
  },
  name: { fontSize: 20, fontWeight: "700", color: "white", marginBottom: 6 },
  text: { color: "#cbd5e1" },
  button: {
    backgroundColor: "#2563eb",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  secondary: {
    backgroundColor: "#334155",
  },
  buttonText: { color: "white", fontWeight: "700", fontSize: 16 },
});

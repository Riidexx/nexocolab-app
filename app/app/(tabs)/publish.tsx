import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

export default function PublishScreen() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  const onPublish = () => {
    if (!title.trim() || !category.trim()) {
      Alert.alert("Falta info", "Completa título y categoría.");
      return;
    }

    // Mock: aquí luego conectamos a Supabase
    Alert.alert("Publicado ✅", `Objeto: ${title}\nCategoría: ${category}`);

    setTitle("");
    setCategory("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Publicar objeto</Text>

      <Text style={styles.label}>Título</Text>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Ej: Taladro, Bicicleta, Calculadora..."
        placeholderTextColor="#94a3b8"
        style={styles.input}
      />

      <Text style={styles.label}>Categoría</Text>
      <TextInput
        value={category}
        onChangeText={setCategory}
        placeholder="Ej: Herramientas, Estudio, Camping..."
        placeholderTextColor="#94a3b8"
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={onPublish}>
        <Text style={styles.buttonText}>Publicar</Text>
      </TouchableOpacity>

      <Text style={styles.hint}>
        Nota: por ahora esto es mock. Luego lo conectamos al backend.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  h1: { fontSize: 22, fontWeight: "700", marginBottom: 16, color: "white" },
  label: { color: "#cbd5e1", marginTop: 10, marginBottom: 6 },
  input: {
    backgroundColor: "#1f2933",
    padding: 12,
    borderRadius: 10,
    color: "white",
  },
  button: {
    marginTop: 16,
    backgroundColor: "#2563eb",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: { color: "white", fontWeight: "700", fontSize: 16 },
  hint: { marginTop: 14, color: "#94a3b8" },
});

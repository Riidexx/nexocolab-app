import { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { supabase } from "../../lib/supabase";
import * as ImagePicker from "expo-image-picker";
import { Image } from "react-native";

export default function PublishScreen() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<string | null>(null);

    const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.7,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const publish = async () => {
    if (!title.trim() || !category.trim()) {
      Alert.alert("Falta info", "Completa título y categoría");
      return;
    }

    setLoading(true);

    const { data: sessionData } = await supabase.auth.getSession();
    const userId = sessionData.session?.user.id;

    if (!userId) {
      setLoading(false);
      Alert.alert("Sin sesión", "Inicia sesión para publicar");
      return;
    }

    const { error } = await supabase.from("items").insert([
      {
        title: title.trim(),
        category: category.trim(),
        user_id: userId,
      },
    ]);

    setLoading(false);

    if (error) {
      Alert.alert("Error", error.message);
      return;
    }

    Alert.alert("Listo", "Objeto publicado");
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
        placeholder="Ej: Taladro, Bicicleta..."
        placeholderTextColor="#94a3b8"
        style={styles.input}
      />

      <Text style={styles.label}>Categoría</Text>
      <TextInput
        value={category}
        onChangeText={setCategory}
        placeholder="Ej: Herramientas, Estudio..."
        placeholderTextColor="#94a3b8"
        style={styles.input}
      />
      
      <TouchableOpacity onPress={pickImage} style={styles.button}>
        <Text style={styles.buttonText}>Seleccionar imagen</Text>
      </TouchableOpacity>

      {image && (
        <Image
          source={{ uri: image }}
          style={{
            width: "100%",
            height: 200,
            borderRadius: 10,
            marginTop: 10,
          }}
        />
      )}

      <TouchableOpacity style={styles.button} onPress={publish} disabled={loading}>
        <Text style={styles.buttonText}>{loading ? "Publicando..." : "Publicar"}</Text>
      </TouchableOpacity>

      <Text style={styles.note}>Nota: ya guarda en Supabase (real).</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  h1: { fontSize: 22, fontWeight: "700", color: "white", marginBottom: 12 },
  label: { color: "#cbd5e1", marginTop: 8, marginBottom: 6 },
  input: { backgroundColor: "#1f2933", color: "white", padding: 12, borderRadius: 10 },
  button: { backgroundColor: "#2563eb", padding: 12, borderRadius: 10, marginTop: 14, alignItems: "center" },
  buttonText: { color: "white", fontWeight: "700" },
  note: { color: "#94a3b8", marginTop: 10 },
});

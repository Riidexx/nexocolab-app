import { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { supabase } from "../../lib/supabase";

type Item = {
  id_uuid: string;
  title: string;
  category: string;
  user_id: string;
};

export default function HomeScreen() {
  const [items, setItems] = useState<Item[]>([]);
  const [userId, setUserId] = useState<string | null>(null);

  const loadItems = async () => {
    const { data, error } = await supabase
      .from("items")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setItems(data);
    }
  };

  const requestItem = async (item: Item) => {
    if (!userId) {
      Alert.alert("Error", "Debes iniciar sesión");
      return;
    }

    if (item.user_id === userId) {
      Alert.alert("Error", "No puedes solicitar tu propio objeto");
      return;
    }

    const { error } = await supabase.from("requests").insert([
      {
        item_id: item.id_uuid,
        owner_id: item.user_id,
      },
    ]);

    if (error) {
      Alert.alert("Error", error.message);
      return;
    }

    Alert.alert("Listo", "Solicitud enviada");
  };

  useEffect(() => {
    const init = async () => {
      const { data: sessionData } = await supabase.auth.getSession();
      const uid = sessionData.session?.user.id ?? null;
      setUserId(uid);
      if (uid) {
        loadItems();
      }
    };

    init();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      const uid = session?.user.id ?? null;
      setUserId(uid);
      if (uid) {
        loadItems();
      }
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id_uuid}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.meta}>Categoría: {item.category}</Text>

            <TouchableOpacity
              style={styles.button}
              onPress={() => requestItem(item)}
            >
              <Text style={styles.buttonText}>Solicitar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 12 },
  card: {
    backgroundColor: "#1f2933",
    padding: 14,
    borderRadius: 14,
    marginBottom: 12,
  },
  title: { color: "white", fontSize: 18, fontWeight: "700" },
  meta: { color: "#cbd5e1", marginVertical: 6 },
  button: {
    backgroundColor: "#2563eb",
    padding: 10,
    borderRadius: 8,
    marginTop: 8,
    alignItems: "center",
  },
  buttonText: { color: "white", fontWeight: "700" },
});
import { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { supabase } from "../../lib/supabase";

type Item = {
  id_uuid: string;
  title: string;
  category: string;
  user_id: string;
  created_at: string;
};

export default function HomeScreen() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  const loadItems = async () => {
    console.log("Loading items...");

    const { data, error } = await supabase
      .from("items")
      .select("*")
      .order("created_at", { ascending: false });

    console.log("DATA:", data);
    console.log("ERROR:", error);

    if (!error && data) {
      setItems(data);
    }

    setLoading(false);
  };

  useEffect(() => {
    const init = async () => {
      const { data: sessionData } = await supabase.auth.getSession();
      if (sessionData.session) {
        console.log("Session detected:", sessionData.session.user.email);
        await loadItems();
      } else {
        console.log("No active session");
        setLoading(false);
      }
    };

    init();

    const { data: listener } = supabase.auth.onAuthStateChange(() => {
      loadItems();
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text style={styles.empty}>Cargando...</Text>
      ) : items.length === 0 ? (
        <Text style={styles.empty}>No hay objetos publicados aún</Text>
      ) : (
        <FlatList
          data={items}
          keyExtractor={(item) => item.id_uuid}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.meta}>Categoría: {item.category}</Text>

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Solicitar</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
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
  empty: {
    color: "#cbd5e1",
    textAlign: "center",
    marginTop: 40,
    fontSize: 16,
  },
});
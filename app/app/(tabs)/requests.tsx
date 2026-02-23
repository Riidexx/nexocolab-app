import { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { supabase } from "../../lib/supabase";

type Request = {
  id: string;
  item_id: string;
  requester_id: string;
  owner_id: string;
  status: string;
  created_at: string;
};

export default function RequestsScreen() {
  const [received, setReceived] = useState<Request[]>([]);
  const [sent, setSent] = useState<Request[]>([]);
  const [userId, setUserId] = useState<string | null>(null);

  const loadRequests = async (uid: string) => {
    // 📥 Recibidas
    const { data: receivedData } = await supabase
      .from("requests")
      .select("*")
      .eq("owner_id", uid)
      .order("created_at", { ascending: false });

    // 📤 Enviadas
    const { data: sentData } = await supabase
      .from("requests")
      .select("*")
      .eq("requester_id", uid)
      .order("created_at", { ascending: false });

    if (receivedData) setReceived(receivedData);
    if (sentData) setSent(sentData);
  };

  useEffect(() => {
    const init = async () => {
      const { data: sessionData } = await supabase.auth.getSession();
      const uid = sessionData.session?.user.id ?? null;
      setUserId(uid);
      if (uid) loadRequests(uid);
    };

    init();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      const uid = session?.user.id ?? null;
      setUserId(uid);
      if (uid) loadRequests(uid);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>📥 Solicitudes Recibidas</Text>

      {received.length === 0 ? (
        <Text style={styles.empty}>No tienes solicitudes recibidas</Text>
      ) : (
        <FlatList
          data={received}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.meta}>Estado: {item.status}</Text>
            </View>
          )}
        />
      )}

      <Text style={styles.sectionTitle}>📤 Solicitudes Enviadas</Text>

      {sent.length === 0 ? (
        <Text style={styles.empty}>No has enviado solicitudes</Text>
      ) : (
        <FlatList
          data={sent}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.meta}>Estado: {item.status}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 12 },
  sectionTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
    marginVertical: 10,
  },
  card: {
    backgroundColor: "#1f2933",
    padding: 12,
    borderRadius: 10,
    marginBottom: 8,
  },
  meta: { color: "#cbd5e1" },
  empty: { color: "#94a3b8", marginBottom: 10 },
});
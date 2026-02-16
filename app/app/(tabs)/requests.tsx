import { View, Text } from "react-native";

export default function RequestsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 22, fontWeight: "600" }}>Solicitudes</Text>
      <Text>Mis préstamos / solicitudes</Text>
    </View>
  );
}

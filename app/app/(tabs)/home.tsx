import { View, Text } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 22, fontWeight: "600" }}>Home</Text>
      <Text>Listado de objetos subutilizados</Text>
    </View>
  );
}

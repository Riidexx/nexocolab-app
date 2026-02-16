import { View, Text } from "react-native";

export default function PublishScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 22, fontWeight: "600" }}>Publicar</Text>
      <Text>Formulario para publicar un objeto</Text>
    </View>
  );
}

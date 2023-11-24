import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StyleSheet, TextInput, View } from "react-native";
import { Theme } from "../lib/theme";

export function SendMessageInput() {
  return (
    <View style={styles.container}>
      <MaterialIcons name="add" size={24} color={Theme.colors.white} />
      <TextInput
        style={styles.input}
        placeholderTextColor={Theme.colors.grey200}
        placeholder="Send a message"
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  input: {
    borderColor: Theme.colors.grey100,
    borderWidth: StyleSheet.hairlineWidth,
    height: 37,
    flex: 1,
    paddingLeft: 14,
    borderRadius: 32,
    backgroundColor: Theme.colors.purple,
  },
});

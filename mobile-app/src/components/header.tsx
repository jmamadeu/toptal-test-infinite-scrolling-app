import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StyleSheet, Text, View } from "react-native";

import { Theme } from "../lib/theme";

export function Header() {
  return (
    <View style={styles.header}>
      <MaterialIcons
        name="keyboard-arrow-left"
        size={34}
        color={Theme.colors.white}
      />
      <View style={styles.avatar} />
      <Text style={styles.name}>John</Text>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatar: {
    width: 40,
    height: 40,
    backgroundColor: Theme.colors.pink,
    borderRadius: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  name: {
    fontSize: 24,
    fontWeight: "700",
    fontStyle: "normal",
    fontFamily: Theme.fontFamily.MainRegular,
    color: Theme.colors.white,
  },
});

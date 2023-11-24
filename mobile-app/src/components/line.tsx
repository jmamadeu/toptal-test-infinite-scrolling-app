import { StyleSheet, View } from "react-native";
import { Theme } from "../lib/theme";

export function Line() {
  return <View style={styles.line} />;
}

export const styles = StyleSheet.create({
  line: {
    borderBottomColor: Theme.colors.grey,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

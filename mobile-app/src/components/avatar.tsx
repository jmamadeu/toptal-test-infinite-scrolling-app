import { StyleSheet, View, ViewProps } from "react-native";
import { Theme } from "../lib/theme";

type AvatarProps = ViewProps & {};

export function Avatar({ style, ...props }: AvatarProps) {
  return <View style={[styles.avatar, style]} {...props} />;
}

const styles = StyleSheet.create({
  avatar: {
    width: 40,
    height: 40,
    backgroundColor: Theme.colors.pink,
    borderRadius: 20,
  },
});

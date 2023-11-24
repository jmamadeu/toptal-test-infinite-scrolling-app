import { StyleSheet, Text, View } from "react-native";
import { Theme } from "../lib/theme";

type MessageCardProps = {
  children: string;
  incoming?: boolean;
};

export function MessageCard({ children, incoming = false }: MessageCardProps) {
  return (
    <View style={[incoming ? styles.incomingView : styles.container]}>
      <Text style={[styles.text, incoming && styles.incomingText]}>
        {children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.colors.light100,
    borderRadius: 16,
  },
  text: {
    fontFamily: Theme.fontFamily.MainRegular,
    fontSize: 14,
    fontWeight: "500",
    color: Theme.colors.dark1,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  incomingView: {
    backgroundColor: "#B143F6",
    borderRadius: 16,
  },
  incomingText: {
    color: Theme.colors.white,
  },
});

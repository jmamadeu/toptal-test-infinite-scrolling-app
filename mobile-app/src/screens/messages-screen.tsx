import { FlatList, StyleSheet, Text, View } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Avatar } from "../components/avatar";
import { Header } from "../components/header";
import { Line } from "../components/line";
import { MessageCard } from "../components/message-card";
import { SendMessageInput } from "../components/send-message-input";
import { useMessages } from "../lib/services/message.service";
import { Theme } from "../lib/theme";

export function MessagesScreen() {
  const insets = useSafeAreaInsets();
  const { data, fetchNextPage } = useMessages({});

  const messages = data?.pages.flatMap((p) => p.items) ?? [];

  return (
    <LinearGradient
      style={{ flex: 1, justifyContent: "space-between" }}
      colors={["#2C1E31", "#2C1E31"]}
    >
      <FlatList
        ListHeaderComponent={() => (
          <>
            <View style={[{ marginTop: insets.top }]}>
              <Header />
              <View style={styles.line}>
                <Line />
              </View>
            </View>

            <View style={{ alignItems: "center", marginTop: 16 }}>
              <Text style={{ color: Theme.colors.white }}>Aug 05, 9:42 PM</Text>
            </View>
          </>
        )}
        data={messages}
        renderItem={({ item }) => {
          if (item.incoming) {
            return (
              <View
                style={[
                  styles.messageContainer,
                  { justifyContent: "flex-end" },
                ]}
              >
                <MessageCard incoming={item.incoming}>
                  {item.message}
                </MessageCard>
              </View>
            );
          }

          return (
            <View
              style={[
                {
                  gap: 8,
                },
                styles.messageContainer,
              ]}
            >
              <Avatar style={{ alignSelf: "flex-end" }} />
              <MessageCard>{item.message}</MessageCard>
            </View>
          );
        }}
        extraData={data}
        onEndReached={() => fetchNextPage()}
        onEndReachedThreshold={0}
      />

      <View
        style={[
          {
            marginBottom: insets.bottom,
          },
          styles.footer,
        ]}
      >
        <SendMessageInput />
      </View>
    </LinearGradient>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontWeight: "700",
    fontStyle: "normal",
    fontFamily: Theme.fontFamily.MainRegular,
  },
  line: {
    marginTop: 15,
  },
  footer: {
    paddingHorizontal: 24,
  },
  messageContainer: {
    flexDirection: "row",

    marginBottom: 16,
    paddingHorizontal: 16,
  },
});

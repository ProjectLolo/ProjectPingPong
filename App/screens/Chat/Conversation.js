import React from "react";
import { Text, View } from "react-native";
import NavHome from "../../components/NavHome";

export default function Conversation() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <NavHome />
      <View style={{ flex: 1 }}>
        <Text>This is conversationScreen</Text>
      </View>
    </View>
  );
}

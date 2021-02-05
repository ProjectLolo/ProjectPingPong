import { useIsFocused } from "@react-navigation/native";
import styles from "@styles/styles";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import NavButtons from "../../components/NavButtons";
import NavHome from "../../components/NavHome";

const stylesNew = StyleSheet.create({
  chatContainer: {
    backgroundColor: "green",
    height: 100,
    margin: 5,
    borderRadius: 12,
    justifyContent: "center",
  },
});

export default function Chats({ route, navigation }) {
  //hardcoded kidId, not sure atm where to get it from
  const isFocused = useIsFocused();
  const [loveBanks, setLoveBanks] = useState([]);
  const { kidData } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: "space-evenly" }}>
      <NavHome />
      <Text style={styles.titleText}>
        Welcome to {route.params.kidName}'s chats!
      </Text>
      <View style={{ flex: 1 }}>
        <View style={stylesNew.chatContainer}>
          <Text>Conversation name</Text>
        </View>
      </View>
      <NavButtons
        screen="Chats"
        userId={route.params.activeUser}
        kidName={route.params.kidName}
        kidData={kidData}
      />
    </View>
  );
}

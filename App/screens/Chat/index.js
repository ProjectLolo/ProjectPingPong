import styles from "@styles/styles";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import colors from "../../assets/colors/index";
import { windowWidth } from "../../assets/utils/dimentions";
import NavButtons from "../../components/NavButtons";
import NavHome from "../../components/NavHome";

const stylesNew = StyleSheet.create({
  chatContainer: {
    backgroundColor: colors.pink,
    height: 50,
    width: windowWidth * 0.9,
    margin: 5,
    paddingLeft: 10,
    borderRadius: 12,
    justifyContent: "center",
    alignSelf: "center",
  },
});

export default function Chats({ route, navigation }) {
  const { kidData } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: "space-evenly" }}>
      <NavHome />
      <Text style={[styles.title, { marginTop: "5%" }]}>
        Welcome to {route.params.kidName}'s chats!
      </Text>
      <View style={{ flex: 1 }}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Conversation")}
        >
          <View style={stylesNew.chatContainer}>
            <Text style={[styles.loginButtonText, { textAlign: "left" }]}>
              Chat with Granddad
            </Text>
          </View>
        </TouchableWithoutFeedback>
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

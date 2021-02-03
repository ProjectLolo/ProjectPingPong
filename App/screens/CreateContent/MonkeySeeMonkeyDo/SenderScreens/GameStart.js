import styles from "@styles/styles";
import React from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";

export default function GameStart({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-evenly",
      }}
    >
      <Text style={[styles.title, { marginTop: 0 }]}>
        {"Let's play monkey see, monkey do \n"}
        {
          "You imitate an animal, and [other family member] \n has to guess which one you imitated"
        }
      </Text>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("AnimalSelector")}
      >
        <View style={[styles.loginButton, { marginBottom: "5%" }]}>
          <Text style={styles.loginButtonText}>Understood. Let's go!</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

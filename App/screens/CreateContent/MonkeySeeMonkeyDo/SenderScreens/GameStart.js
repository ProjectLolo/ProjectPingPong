import styles from "@styles/styles";
import React from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import NavHome from "../../../../components/NavHome";

export default function GameStart({ navigation }) {
  return (
    <View>
      <NavHome />
      <View>
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
            <Text style={styles.loginButtonText}>Start the game!</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}
s;

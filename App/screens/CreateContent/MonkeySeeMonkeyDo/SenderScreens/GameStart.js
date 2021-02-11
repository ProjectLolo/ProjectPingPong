import styles from "@styles/styles";
import React from "react";
import { Image, Text, TouchableWithoutFeedback, View } from "react-native";
import monkeyImitator from "../../../../assets/images/monkeyImitator.png";
import NavHome from "../../../../components/NavHome";

export default function GameStart({ navigation }) {
  return (
    <View>
      <NavHome />
      <View style={styles.screenContainer}>
        <Text style={[styles.title, { marginTop: 20 }]}>
          "Let's play monkey see, monkey do"
        </Text>
        <Image
          source={monkeyImitator}
          style={{
            resizeMode: "contain",
            width: 200,
            height: 300,
            alignSelf: "center",
          }}
        />
        <Text style={styles.text}>
          "You imitate an animal, and [other family member] has to guess which
          one you imitated"
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

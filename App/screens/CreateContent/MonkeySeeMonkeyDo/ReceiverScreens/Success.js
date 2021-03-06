import styles from "@styles/styles";
import React from "react";

import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";

const stylesNew = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function Success({route, navigation}) {
  //console.log("route", route);
  const {relationId} = route.params;

  return (
    <SafeAreaView style={stylesNew.container}>
      <Text>You've got it right!!!</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("MonkeySeeMonkeyDo", {
            screen: "AnimalSelector",
            params: {recipientId: relationId},
          })
        }
      >
        <View style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Let's play again</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Recommended")}>
        <View style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Go back to home</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

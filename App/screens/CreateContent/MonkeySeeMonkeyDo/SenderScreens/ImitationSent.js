import styles from "@styles/styles";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const stylesNew = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function ImitationSent({ navigation }) {
  return (
    <SafeAreaView style={stylesNew.container}>
      <Text>Hurray!</Text>
      <TouchableOpacity onPress={() => navigation.navigate("AnimalSelector")}>
        <View style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Let's do another one</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("GameStart")}>
        <View style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Go back to home</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

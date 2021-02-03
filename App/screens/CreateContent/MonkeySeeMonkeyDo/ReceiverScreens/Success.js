import styles from "@styles/styles";
import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

const stylesNew = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function Success() {
  return (
    <SafeAreaView style={stylesNew.container}>
      <Text>You've got it right!!!</Text>
      <TouchableOpacity onPress={() => navigation.navigate("AnimalSelector")}>
        <View style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Let's play again</Text>
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

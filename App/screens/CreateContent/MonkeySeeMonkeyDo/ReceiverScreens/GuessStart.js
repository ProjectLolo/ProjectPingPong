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

export default function GuessStart() {
  return (
    <SafeAreaView style={stylesNew.container}>
      <Text>Can you guess what animal I am?</Text>
      <TouchableOpacity onPress={() => navigation.navigate("GuessAnimal")}>
        <View style={styles.loginButton}>
          <Text style={styles.loginButtonText}>start</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function GuessStart() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Can you guess what animal I am?</Text>
    </SafeAreaView>
  );
}

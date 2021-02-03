import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function GuessAnimal() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>This is the screen telling you the imitation has been sent</Text>
    </SafeAreaView>
  );
}

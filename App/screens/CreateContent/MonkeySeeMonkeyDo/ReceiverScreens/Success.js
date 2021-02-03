import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function Success() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>You've got it right!!!</Text>
    </SafeAreaView>
  );
}

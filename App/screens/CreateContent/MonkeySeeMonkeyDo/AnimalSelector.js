import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function AnimalSelector() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>This is animal selector screen</Text>
    </SafeAreaView>
  );
}

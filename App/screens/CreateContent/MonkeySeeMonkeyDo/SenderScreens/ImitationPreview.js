import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function ImitationPreview() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>This is the imitation preview screen</Text>
    </SafeAreaView>
  );
}

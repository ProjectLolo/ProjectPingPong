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

export default function RecordImitation({ navigation }) {
  return (
    <SafeAreaView style={stylesNew.container}>
      <Text>This is the recording screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate("ImitationPreview")}>
        <View style={styles.loginButton}>
          <Text style={styles.loginButtonText}>
            Go to recording preview screen
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

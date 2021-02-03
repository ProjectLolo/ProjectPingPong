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

export default function ImitationPreview({ navigation }) {
  return (
    <SafeAreaView style={stylesNew.container}>
      <Text>This is the imitation preview screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate("ImitationSent")}>
        <View style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Send</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("RecordImitation")}>
        <View style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Redo</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

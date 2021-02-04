import styles from "@styles/styles";
import React from "react";
import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";

const stylesNew = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function GetReady({navigation, animal}) {
  return (
    <SafeAreaView style={stylesNew.container}>
      <Text>{`Are you ready to unleash your inner monkey?`}</Text>
      <TouchableOpacity onPress={() => navigation.navigate("RecordImitation")}>
        <View style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Let's go!</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

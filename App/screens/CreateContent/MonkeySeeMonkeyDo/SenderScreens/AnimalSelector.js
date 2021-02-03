import colors from "@assets/colors";
import styles from "@styles/styles";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { windowHeight, windowWidth } from "../../../../assets/utils/dimentions";

const stylesNew = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  animalContainer: {
    backgroundColor: colors.purple,
    height: windowHeight / 15,
    width: windowWidth / 1.5,
    borderRadius: 10,
    marginBottom: 5,
  },
});

export default function AnimalSelector({ navigation }) {
  return (
    <SafeAreaView style={stylesNew.container}>
      <Text>Pick an animal!</Text>
      <TouchableOpacity onPress={() => navigation.navigate("GetReady")}>
        <View style={stylesNew.animalContainer}>
          <Text>elphant</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("GetReady")}>
        <View style={stylesNew.animalContainer}>
          <Text>monkey</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Get new animals</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

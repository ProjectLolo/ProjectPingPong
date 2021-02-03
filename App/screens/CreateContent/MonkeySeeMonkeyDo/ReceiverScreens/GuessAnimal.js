import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

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

export default function GuessAnimal({ navigation }) {
  return (
    <SafeAreaView style={stylesNew.container}>
      <Text>guessssssss?</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Success")}>
        <View style={stylesNew.animalContainer}>
          <Text>monkey</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

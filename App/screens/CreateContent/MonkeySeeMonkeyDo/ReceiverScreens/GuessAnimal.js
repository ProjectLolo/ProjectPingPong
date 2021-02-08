import colors from "@assets/colors";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { generateAnimalsAtRandom } from "../SenderScreens/helpers";

const stylesNew = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  animalContainer: {
    backgroundColor: colors.purple,
    height: 100,
    width: 100,
    borderRadius: 10,
    marginBottom: 5,
  },
});

export default function GuessAnimal({ route, navigation }) {
  const { animal } = route.params;
  const rightAnswer = [animal];
  const wrongAnswers = generateAnimalsAtRandom(3, rightAnswer);

  console.log(wrongAnswers);

  return (
    <SafeAreaView style={stylesNew.container}>
      <Text>guessssssss?</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Success")}>
        <View style={stylesNew.animalContainer}>
          <Text>{animal}</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

//random set of 3 animals
//push right animal onto the array of 3 random animals
//put right animal in temp state
//match right and wrong with if or switch statement

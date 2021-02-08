import colors from "@assets/colors";
import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import {
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { getAnimalPicture } from "../../../../assets/animalList";
import {
  checkCorrectAnswer,
  generateAnimalsAtRandom,
  shuffle,
} from "../SenderScreens/helpers";

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

const Item = ({ animal, correct }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => checkCorrectAnswer(animal, correct)}
    >
      <View
        style={{
          width: 150,
          height: 150,
          backgroundColor: colors.ltPurple,
          justifyContent: "space-evenly",
          alignItems: "center",
          margin: 10,
          padding: 10,
          borderRadius: 12,
        }}
      >
        <Image
          style={{ resizeMode: "contain", height: "90%" }}
          source={getAnimalPicture(animal)}
        />
        <Text>{animal}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default function GuessAnimal({ route, navigation }) {
  const { animal } = route.params;
  const wrongAnswers = generateAnimalsAtRandom(3, [animal]);

  console.log("animal is", animal);

  const possibleAnswers = wrongAnswers.concat(animal);

  const possibleAnswersShuffled = shuffle(possibleAnswers);

  const renderItem = ({ item }) => {
    return (
      <View>
        <Item animal={item} correct={animal} />
      </View>
    );
  };

  return (
    <SafeAreaView style={stylesNew.container}>
      <Text>guessssssss?</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Success")}>
        <View style={stylesNew.animalContainer}>
          <Text>{animal}</Text>
        </View>
      </TouchableOpacity>
      <View style={{ flex: 1 }}>
        <FlatList
          data={possibleAnswersShuffled}
          keyExtractor={(_, i) => i}
          renderItem={renderItem}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
}

//flatlist with possibleAnswers
//make flatlist items clickable
//write function that checks if answer is correct
//if answer correct navigate to correct screeen
//if answer is incorrect turn red

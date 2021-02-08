import colors from "@assets/colors";
import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { getAnimalPicture } from "../../../../assets/animalList";
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

const Item = ({ animal }) => {
  return (
    <View
      style={{
        width: 150,
        height: 150,
        backgroundColor: colors.ltPink,
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
  );
};

export default function GuessAnimal({ route, navigation }) {
  const { animal } = route.params;
  const wrongAnswers = generateAnimalsAtRandom(3, [animal]);

  console.log("route", route);
  console.log("animal is", animal);
  console.log("wronganswers", wrongAnswers);

  const possibleAnswers = wrongAnswers.concat(animal);
  console.log("possible answers", possibleAnswers);
  console.log("animal again", animal);

  const renderItem = ({ item }) => {
    return (
      <View>
        <Item animal={item} />
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
          data={possibleAnswers}
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

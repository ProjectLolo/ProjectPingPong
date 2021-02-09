import colors from "@assets/colors";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import * as Animatable from "react-native-animatable";
import {
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { getAnimalPicture } from "../../../../assets/animalList";
import { generateAnimalsAtRandom, shuffle } from "../SenderScreens/helpers";

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

const Item = ({ animal, correct, id }) => {
  const navigation = useNavigation();
  const [animate, setAnimate] = useState(false);

  //take animal from monkeypong
  const checkCorrectAnswer = (animal, correct) => {
    if (animal !== correct) {
      // return Alert.alert("oopsie, try again");
      setAnimate(true);
    } else {
      navigation.navigate("Success");
    }

    //check pressed animal
    //if monkeypong !== pressed = red background
    //if monkeypong === pressed = correct
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => checkCorrectAnswer(animal, correct)}
    >
      <Animatable.View
        animation={animate ? "shake" : null}
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
      </Animatable.View>
    </TouchableWithoutFeedback>
  );
};

export default function GuessAnimal({ route, navigation }) {
  const { animal } = route.params;
  const wrongAnswers = generateAnimalsAtRandom(3, [animal]);

  console.log("animal is", animal);

  const possibleAnswers = wrongAnswers.concat(animal);

  const possibleAnswersShuffled = shuffle(possibleAnswers);

  const renderItem = ({ item, index }) => {
    return (
      <View key={index}>
        <Item animal={item} correct={animal} id={index} />
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

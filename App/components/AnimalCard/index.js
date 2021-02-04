import React from "react";
import {getAnimalPicture} from "../../assets/animalList";
import {View, Text, TouchableWithoutFeedback, Image} from "react-native";
import styles from "@styles/styles";
export default function AnimalCard({animal, goToGetReadyScreen}) {
  //const {animal} = route.params;
  const animalPicture = getAnimalPicture(animal);
  return (
    <TouchableWithoutFeedback onPress={() => goToGetReadyScreen(animal)}>
      <View style={styles.touchableCard}>
        <Image style={styles.animalImage} source={animalPicture} />
        <Text> {animal} </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

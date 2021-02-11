import styles from "@styles/styles";
import React from "react";
import { Image, View } from "react-native";
import { getAnimalPicture } from "../../assets/animalList";
export default function AnimalCard({ animal }) {
  //const {animal} = route.params;
  const animalPicture = getAnimalPicture(animal);
  return (
    <View style={[styles.touchableCard, { borderRadius: 20 }]}>
      <Image style={styles.animalImage} source={animalPicture} />
    </View>
  );
}

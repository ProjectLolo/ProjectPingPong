import React from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  FlatList,
} from "react-native";
import styles from "@styles/styles";
import {chooseAnimalAtRandom} from "../../../../assets/animalList";
import ActivityCard from "../../../../components/StoryCard";

export default function AnimalSelector() {
  const {animal: animal1, picture: animal1Picture} = chooseAnimalAtRandom();
  const {animal: animal2, picture: animal2Picture} = chooseAnimalAtRandom();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <Text style={[styles.title, {marginTop: 0}]}>{"Animal selector \n"}</Text>
      {/* <TouchableWithoutFeedback> */}
      <Image
        style={{
          width: 66,
          height: 58,
          alignSelf: "center",
        }}
        source={animal1Picture}
      />
      <Image
        style={{
          width: 66,
          height: 58,
          alignSelf: "center",
        }}
        source={animal2Picture}
      />
      {/* </TouchableWithoutFeedback> */}
    </View>
  );
}

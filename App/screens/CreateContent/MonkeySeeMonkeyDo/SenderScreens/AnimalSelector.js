import React, {useState, useEffect} from "react";
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

export default function AnimalSelector({navigation}) {
  const [refreshSwitch, setRefreshSwitch] = useState(true);
  const {animal: animal1, picture: animal1Picture} = chooseAnimalAtRandom();
  const {animal: animal2, picture: animal2Picture} = chooseAnimalAtRandom();
  useEffect(() => {
    //refreshes the component to get new animals
  }, [refreshSwitch]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-around",
      }}
    >
      <Text style={[styles.title, {marginTop: 0}]}>{"Pick an animal \n"}</Text>
      <TouchableWithoutFeedback onPress={() => navigation.navigate("GetReady")}>
        <View style={styles.touchableCard}>
          <Image style={styles.animalImage} source={animal1Picture} />
          <Text> {animal1} </Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => navigation.navigate("GetReady")}>
        <View style={styles.touchableCard}>
          <Image style={styles.animalImage} source={animal2Picture} />
          <Text> {animal2} </Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => setRefreshSwitch(!refreshSwitch)}
      >
        <View style={[styles.loginButton, {marginBottom: "5%"}]}>
          <Text style={styles.loginButtonText}>I want other animals</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

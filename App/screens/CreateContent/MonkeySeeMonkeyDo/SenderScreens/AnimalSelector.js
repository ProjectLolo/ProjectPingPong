import React, {useState, useEffect} from "react";
import {View, Text, TouchableWithoutFeedback, Image} from "react-native";
import styles from "@styles/styles";
import {chooseAnimalAtRandom} from "../../../../assets/animalList";
import AnimalCard from "../../../../components/AnimalCard";

const generateTwoRandomAnimals = (animalsToExclude) => {
  const initialAnimals = [chooseAnimalAtRandom(animalsToExclude)];
  initialAnimals.push(
    chooseAnimalAtRandom([...animalsToExclude, initialAnimals[0]])
  );
  return initialAnimals;
};

export default function AnimalSelector({navigation}) {
  const [refreshSwitch, setRefreshSwitch] = useState(true);
  const [animalsToSelect, setAnimalsToSelect] = useState(
    generateTwoRandomAnimals([])
  );

  useEffect(() => {
    setAnimalsToSelect(generateTwoRandomAnimals(animalsToSelect));
  }, [refreshSwitch]);

  const goToGetReadyScreen = (animal) => {
    navigation.navigate("GetReady", {animal: animal});
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-around",
      }}
    >
      <Text style={[styles.title, {marginTop: 0}]}>{"Pick an animal \n"}</Text>
      <AnimalCard
        animal={animalsToSelect[0]}
        goToGetReadyScreen={goToGetReadyScreen}
      />
      <AnimalCard
        animal={animalsToSelect[1]}
        goToGetReadyScreen={goToGetReadyScreen}
      />

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

import styles from "@styles/styles";
import React, { useEffect, useState } from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import { chooseAnimalAtRandom } from "../../../../assets/animalList";
import AnimalCard from "../../../../components/AnimalCard";
import NavHome from "../../../../components/NavHome";

const generateTwoRandomAnimals = (animalsToExclude) => {
  const initialAnimals = [chooseAnimalAtRandom(animalsToExclude)];
  initialAnimals.push(
    chooseAnimalAtRandom([...animalsToExclude, initialAnimals[0]])
  );
  return initialAnimals;
};

export default function AnimalSelector({ navigation }) {
  const [refreshSwitch, setRefreshSwitch] = useState(true);
  const [animalsToSelect, setAnimalsToSelect] = useState(
    generateTwoRandomAnimals([])
  );

  useEffect(() => {
    setAnimalsToSelect(generateTwoRandomAnimals(animalsToSelect));
  }, [refreshSwitch]);

  const goToGetReadyScreen = (animal) => {
    navigation.navigate("GetReady", { animal: animal });
  };
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <NavHome />
      <Text style={[styles.title, { marginTop: 0 }]}>
        {"Pick an animal \n"}
      </Text>
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
        <View style={[styles.loginButton, { marginBottom: "5%" }]}>
          <Text style={styles.loginButtonText}>I want other animals</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

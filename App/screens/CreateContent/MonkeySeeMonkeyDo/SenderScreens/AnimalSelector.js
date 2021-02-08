import styles from "@styles/styles";
import React, {useEffect, useState} from "react";
import {Text, TouchableWithoutFeedback, View} from "react-native";
import AnimalCard from "../../../../components/AnimalCard";
import NavHome from "../../../../components/NavHome";
import {generateAnimalsAtRandom} from "./helpers";

export default function AnimalSelector({navigation}) {
  const numberOfAnimals = 2;
  const [refreshSwitch, setRefreshSwitch] = useState(true);
  const [animalsToSelect, setAnimalsToSelect] = useState(
    generateAnimalsAtRandom(numberOfAnimals)
  );

  useEffect(() => {
    setAnimalsToSelect(
      generateAnimalsAtRandom(numberOfAnimals, animalsToSelect)
    );
  }, [refreshSwitch]);

  const goToGetReadyScreen = (animal) => {
    navigation.navigate("GetReady", {animal: animal});
  };
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <NavHome />

      <Text style={[styles.title, {marginTop: 0}]}>{"Pick an animal \n"}</Text>

      {animalsToSelect.map((animal) => (
        <TouchableWithoutFeedback
          key={Math.random() * 1000000}
          onPress={() => goToGetReadyScreen(animal)}
        >
          <View>
            <AnimalCard animal={animal} />
          </View>
        </TouchableWithoutFeedback>
      ))}

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

import * as FileSystem from "expo-file-system";
import * as ImagePicker from "expo-image-picker";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getAnimalPicture } from "../../../../assets/animalList";
import { windowWidth } from "../../../../assets/utils/dimentions";
import NavHome from "../../../../components/NavHome";
import styles from "../../../../styles/index";

const stylesNew = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default function GetReady({ route, navigation }) {
  const { animal } = route.params;
  const takeVideo = async () => {
    let result = [];
    result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      aspect: [3, 4],
      quality: 0.5,
      videoMaxDuration: 10,
    });

    await FileSystem.copyAsync({ from: result.uri, to: `${result.uri}.mp4` });
    if (!result.cancelled) {
      navigation.navigate("ImitationPreview", {
        uri: `${result.uri}.mp4`,
        animal: animal,
        type: "video",
      });
    }
  };

  const animalPicture = getAnimalPicture(animal);

  return (
    <View style={stylesNew.container}>
      <NavHome />
      <Image
        style={{ resizeMode: "contain", height: "40%", marginTop: 50 }}
        source={animalPicture}
      />
      <Text
        style={styles.title}
      >{`Are you ready to unleash your inner ${animal}?`}</Text>
      <TouchableOpacity onPress={takeVideo}>
        <View style={[styles.loginButton, { width: windowWidth * 0.9 }]}>
          <Text style={styles.loginButtonText}>Let's go!</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

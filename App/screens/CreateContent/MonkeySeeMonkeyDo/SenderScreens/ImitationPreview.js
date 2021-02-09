import styles from "@styles/styles";
import {Video} from "expo-av";
import * as firebase from "firebase";
import React from "react";
import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";

const stylesNew = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
const handleSend = async (videoUri, videoName) => {
  try {
    console.log("uploading video", videoUri, videoName);
    //upload image to firebase
    const uploadImage = async (videoUri, videoName) => {
      const response = await fetch(videoUri);
      const blob = await response.blob();
      const ref = firebase
        .storage()
        .ref()
        .child("userProfileImages/" + videoName);
      return (uploadTask = ref.put(blob));
    };
    const firebaseAnswer = await uploadImage(videoUri, videoName);
    console.log("firebaseAnswer", firebaseAnswer);
    navigation.navigate("ImitationSent");
  } catch (e) {
    console.log(e);
  }
};
export default function ImitationPreview({route, navigation}) {
  return (
    <SafeAreaView style={stylesNew.container}>
      <Text style={[styles.h2, styles.center]}>
        Your imitation video is ready!
      </Text>
      <Video
        source={{uri: route.params.uri}}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        useNativeControls
        style={{width: 300, height: 400}}
      />
      <TouchableOpacity
        onPress={() =>
          handleSend(route.params.uri, `${Math.round(Math.random() * 1000000)}`)
        }
      >
        <View style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Send</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("RecordImitation")}>
        <View style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Redo</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

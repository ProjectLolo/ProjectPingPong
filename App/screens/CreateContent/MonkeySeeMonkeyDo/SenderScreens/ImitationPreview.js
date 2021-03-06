import styles from "@styles/styles";
import {Video} from "expo-av";

import React from "react";
import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";
import {uploadVideo} from "./helpers";

const stylesNew = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function ImitationPreview({route, navigation}) {
  const {recipientId} = route.params;
  const handleSend = async (videoUri) => {
    navigation.navigate("VideoUpload", {
      videoUri: videoUri,
      animal: route.params.animal,
      recipientId: recipientId,
    });
  };
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
      <TouchableOpacity onPress={() => handleSend(route.params.uri)}>
        <View style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Send</Text>
        </View>
      </TouchableOpacity>
      {/* <TouchableOpacity
        onPress={() =>
          navigation.navigate("RecordImitation", {recipientId: recipientId})
        }
      >
        <View style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Redo</Text>
        </View>
      </TouchableOpacity> */}
    </SafeAreaView>
  );
}

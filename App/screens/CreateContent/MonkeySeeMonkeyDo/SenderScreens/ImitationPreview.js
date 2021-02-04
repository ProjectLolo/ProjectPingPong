import styles from "@styles/styles";
import { Video } from "expo-av";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const stylesNew = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function ImitationPreview({ route, navigation }) {
  return (
    <SafeAreaView style={stylesNew.container}>
      <Text style={[styles.h2, styles.center]}>
        Your imitation video is ready!
      </Text>
      <Video
        source={{ uri: route.params.uri }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        useNativeControls
        style={{ width: 300, height: 400 }}
      />
      <TouchableOpacity onPress={() => navigation.navigate("ImitationSent")}>
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

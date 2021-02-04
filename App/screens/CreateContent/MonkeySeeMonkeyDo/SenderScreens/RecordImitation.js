import styles from "@styles/styles";
import { Camera } from "expo-camera";
import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const stylesNew = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    margin: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "white",
  },
});

export default function RecordImitation({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <SafeAreaView style={stylesNew.container}>
      <Text>This is the recording screen</Text>

      <Camera style={stylesNew.camera} type={type}>
        <View style={stylesNew.buttonContainer}>
          <TouchableOpacity
            style={stylesNew.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Text style={stylesNew.text}> Flip </Text>
          </TouchableOpacity>
        </View>
      </Camera>

      <TouchableOpacity onPress={() => navigation.navigate("ImitationPreview")}>
        <View style={styles.loginButton}>
          <Text style={styles.loginButtonText}>
            Go to recording preview screen
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

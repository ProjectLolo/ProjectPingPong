import {useIsFocused} from "@react-navigation/native";
import {Video} from "expo-av";
import React from "react";
import {Button, StyleSheet, View} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  video: {
    alignSelf: "center",
    width: 400,
    height: 250,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default function VideoPlayer({url}) {
  const video = React.useRef({});
  const [status, setStatus] = React.useState();
  const isFocused = useIsFocused();
  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: url,
        }}
        useNativeControls
        resizeMode="contain"
        shouldPlay={isFocused}
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
    </View>
  );
}

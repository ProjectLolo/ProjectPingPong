import React from "react";
import {View, Text, TouchableWithoutFeedback, FlatList} from "react-native";
import styles from "@styles/styles";

export default function AnimalSelector() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-evenly",
      }}
    >
      <Text style={[styles.title, {marginTop: 0}]}>{"Animal selector \n"}</Text>
    </View>
  );
}

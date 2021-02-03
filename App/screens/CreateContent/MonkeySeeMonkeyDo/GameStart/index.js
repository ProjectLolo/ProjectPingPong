import React from "react";
import {View, Text, TouchableWithoutFeedback, FlatList} from "react-native";
import styles from "@styles/styles";

export default function GameStart() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-evenly",
      }}
    >
      <Text style={[styles.title, {marginTop: 0}]}>
        {"Let's play monkey see, monkey do \n"}
        {
          "You imitate an animal, and [other family member] \n has to guess which one you imitated"
        }
      </Text>
    </View>
  );
}

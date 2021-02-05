import React from "react";
import { Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import colors from "../../assets/colors/index";
import { windowHeight, windowWidth } from "../../assets/utils/dimentions";
import NavHome from "../../components/NavHome";
import { data } from "./data";

const Item = ({ url, sender, animal, kidId, receiver }) => {
  const align = sender === "1" ? "flex-end" : "flex-start";
  return (
    <View
      style={{
        alignSelf: align,
        margin: 5,
        padding: 5,
        width: "50%",
        height: windowHeight / 7,
        backgroundColor: colors.ltPink,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.yellow,
      }}
    >
      <View
        style={{
          backgroundColor: colors.dkGrey,
          height: "80%",
        }}
      >
        <Text>the video: {animal}</Text>
      </View>
      <Text>{sender === "1" ? "you" : "tony"}</Text>
    </View>
  );
};

export default function Conversation() {
  const renderItem = ({ item }) => {
    return (
      <Item
        url={item.url}
        sender={item.sender}
        kidId={item.pongId.kidId}
        animal={item.pongId.animal}
      />
    );
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <NavHome />
      <View style={{ flex: 1 }}>
        <View
          style={{
            width: windowWidth,
          }}
        >
          <FlatList
            data={data}
            keyExtractor={(item) => item._id}
            renderItem={renderItem}
          />
        </View>
      </View>
    </View>
  );
}

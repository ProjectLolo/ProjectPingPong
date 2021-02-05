import React from "react";
import { Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { windowWidth } from "../../assets/utils/dimentions";
import NavHome from "../../components/NavHome";
import { data } from "./data";

const Item = ({ url, userId, recipientId, kidId }) => {
  const align = userId === "1" ? "flex-end" : "flex-start";
  return (
    <View
      style={{
        alignSelf: align,
        backgroundColor: "green",
        margin: 5,
        width: "50%",
      }}
    >
      <Text>the video: {url}</Text>
      <Text>you: {userId}</Text>
      <Text>receiver: {recipientId}</Text>
      <Text>the kiddo: {kidId}</Text>
    </View>
  );
};

export default function Conversation() {
  const renderItem = ({ item }) => {
    return (
      <Item
        url={item.url}
        userId={item.userId}
        recipientId={item.pong.recipientId}
        kidId={item.pong.kidId}
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
        <Text>This is conversationScreen</Text>
        <View
          style={{
            backgroundColor: "pink",
            width: windowWidth,
          }}
        >
          <FlatList
            data={data}
            keyExtractor={(item) => item.pongId}
            renderItem={renderItem}
          />
        </View>
      </View>
    </View>
  );
}

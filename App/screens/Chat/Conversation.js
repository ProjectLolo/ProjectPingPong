import {useQuery} from "@apollo/client";
import styles from "@styles/styles";
import React from "react";
import {Text, View} from "react-native";
import {FlatList, TouchableWithoutFeedback} from "react-native-gesture-handler";
import colors from "../../assets/colors/index";
import {windowHeight, windowWidth} from "../../assets/utils/dimentions";
import NavHome from "../../components/NavHome";
import {data} from "./data";
import {GET_MONKEY_PONGS} from "../../../graphql/queries";

const Item = ({url, sender, animal, kidId, receiver}) => {
  console.log("kidId", kidId);

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
          backgroundColor: "lightgrey",
          height: "80%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.regular}>the video: {animal}</Text>
      </View>
      <Text style={[styles.regular, {marginTop: 3}]}>
        {sender === "1" ? "you" : "tony"}
      </Text>
    </View>
  );
};

export default function Conversation({route, navigation}) {
  // const {data, refetch} = useQuery(GET_MONKEY_PONGS, {
  //   variables: {
  //     kidId: route.params.activeKid,
  //   },
  //   onError(error) {
  //     console.log("error", error.graphQLErrors);
  //   },
  //   onCompleted(fetchedData) {
  //     console.log("works", fetchedData);
  //   },
  // });
  console.log("data from query", data);
  const renderItem = ({item}) => {
    return (
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate("GuessAnimal", {animal: item.pongId.animal})
        }
      >
        <Item
          url={item.url}
          sender={item.sender}
          kidId={item.pongId.kidId}
          animal={item.pongId.animal}
        />
      </TouchableWithoutFeedback>
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
      <View style={{flex: 1}}>
        <View
          style={{
            width: windowWidth,
          }}
        >
          <FlatList
            data={data}
            key={parseInt(Math.random() * 100000)}
            keyExtractor={(item) => item._id}
            renderItem={renderItem}
            style={{
              marginBottom: 50,
            }}
          />
        </View>
      </View>
    </View>
  );
}

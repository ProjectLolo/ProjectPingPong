import styles from "@styles/styles";
//import {Video} from "expo-av";
import React, {useRef} from "react";
import {Text, View, Image} from "react-native";
import {FlatList, TouchableWithoutFeedback} from "react-native-gesture-handler";
import images from "../../assets";
import colors from "../../assets/colors/index";
import {windowHeight, windowWidth} from "../../assets/utils/dimentions";
import NavHome from "../../components/NavHome";

const Item = ({
  activeUser,
  sender,
  animal,
  kidId,
  kidName,
  relation,
  receiver,
  url,
}) => {
  const align = sender === activeUser ? "flex-end" : "flex-start";

  const video = useRef(null);
  // const [thumbnail, setThumbnail] = useState("");

  // const generateThumbnail = async () => {
  //   try {
  //     const { uri } = await VideoThumbnails.getThumbnailAsync(url, {
  //       time: 15000,
  //     });
  //     setThumbnail(uri);
  //   } catch (error) {
  //     console.warn(error);
  //   }
  // };
  // console.log("url----->", url);
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
          backgroundColor: "white",
          height: "80%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{height: "100%", width: "100%"}}
          source={images.AnimalsThumbnail}
          style={{height: "100%", width: "100%"}}
        />

        {/* <Text style={styles.regular}>the video: {animal}</Text> */}
        {/* <Video
          ref={video}
          style={{height: "100%", width: "100%"}}
          source={{uri: url}}
          shouldPlay={false}
          isLooping={false}
          resizeMode={Video.RESIZE_MODE_COVER}
        /> */}
      </View>
      <Text style={[styles.regular, {marginTop: 3}]}>
        {sender === activeUser ? "you" : relation ? relation : kidName}
      </Text>
    </View>
  );
};

export default function Conversation({route, navigation}) {
  const {
    activeUser,
    conversation,
    relationId,
    kidName,
    relation,
  } = route.params;

  //console.log("RELATION ID", relationId);
  const data = conversation.reverse();
  console.log("data from query", data);

  const renderItem = ({item}) => {
    //console.log("item", item);
    return (
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate("GuessAnimal", {
            animal: item.pongId.animal,
            senderId: relationId,
            url: item.pongId.url,
          })
        }
      >
        <Item
          url={item.pongId.url}
          activeUser={activeUser}
          sender={item.senderId}
          kidId={item.pongId.kidId}
          relation={relation}
          kidName={kidName}
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

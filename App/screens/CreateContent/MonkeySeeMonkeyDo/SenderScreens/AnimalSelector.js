import React, {useState, useEffect} from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  FlatList,
} from "react-native";
import styles from "@styles/styles";
import {chooseAnimalAtRandom} from "../../../../assets/animalList";
import ActivityCard from "../../../../components/StoryCard";

export default function AnimalSelector() {
  const [refreshSwitch, setRefreshSwitch] = useState(true);
  const {animal: animal1, picture: animal1Picture} = chooseAnimalAtRandom();
  const {animal: animal2, picture: animal2Picture} = chooseAnimalAtRandom();
  useEffect(() => {
    //refreshes the component to get new animals
  }, [refreshSwitch]);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-around",
      }}
    >
      <Text style={[styles.title, {marginTop: 0}]}>{"Animal selector \n"}</Text>
      {/* <TouchableWithoutFeedback> */}
      <Image
        style={{
          width: 66,
          height: 58,
          alignSelf: "center",
        }}
        source={animal1Picture}
      />

      <Image
        style={{
          width: 66,
          height: 58,
          alignSelf: "center",
        }}
        source={animal2Picture}
      />
      {/* </TouchableWithoutFeedback> */}
      <TouchableWithoutFeedback
        onPress={() => setRefreshSwitch(!refreshSwitch)}
      >
        <View style={[styles.loginButton, {marginBottom: "5%"}]}>
          <Text style={styles.loginButtonText}>I want other animals</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

// export default function AnimalSelector({ navigation }) {
//   return (
//     <SafeAreaView style={stylesNew.container}>
//       <Text>Pick an animal!</Text>
//       <TouchableOpacity onPress={() => navigation.navigate("GetReady")}>
//         <View style={stylesNew.animalContainer}>
//           <Text>elphant</Text>
//         </View>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate("GetReady")}>
//         <View style={stylesNew.animalContainer}>
//           <Text>monkey</Text>
//         </View>
//       </TouchableOpacity>
//       <TouchableOpacity>
//         <View style={styles.loginButton}>
//           <Text style={styles.loginButtonText}>Get new animals</Text>
//         </View>
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// }

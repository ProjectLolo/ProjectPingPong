import React, { useState, useContext } from "react";
import {
  View,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
  Text,
  Image,
  Alert,
  FlatList
} from "react-native";
import styles from "@styles/styles";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../../graphql/mutations";
import { AuthContext } from "../../context/Auth";
import images from "@assets/images";
import {  TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaInsetsContext } from "react-native-safe-area-context";

export default function Login({ navigation }) {
  const [variables, setVariables] = useState({
    email: "",
    password: "",
  });
  const [hidePassword, setHidePassword] = useState(true);

  const { signIn, signUp } = useContext(AuthContext);
  const [text, setText] = useState("")
  const [login, { error }] = useMutation(LOGIN, {
    onError: (error) =>
      error.graphQLErrors.map(({ message }, i) => alert(`${message}`)),
    onCompleted({ login }) {
      if (login.error) {
        set_errorState(<Alert variant="danger">{login.error}</Alert>);
      }
      if (login.token) {
        // dispatch(loginSuccess(login));
        signIn(login.token);
      }
    },
  });

  function togglePassword() {
    hidePassword ? setHidePassword(false) : setHidePassword(true);
  }

  function submitForm(e) {
    e.preventDefault();

    console.log("variables", variables);
    login({ variables });
  }

  function MyHeader() {
    return (
      <View>
        <Text>
          tekst
        </Text>
      </View>
    )
  }

  function MyFooter() {
    return (
      <View>
        <Text>
          tekst
        </Text>
        <TextInput
        style={{
          borderWidth: 2,
          borderColor: "black",
          padding: 20
        }}
          value={text}
          onChangeText={(e) => setText(e)}
        />
      </View>
    )
  }

  return (
    <View>
    <FlatList 

    ListHeaderComponent={MyHeader}
    ListFooterComponent={MyFooter}
    removeClippedSubviews={false}
    data={[0,1,2,3,4]}
    renderItem={({item}) => {
      return (
        <TouchableOpacity
        onPress={() => Alert.alert("press")}>
          <Text>
            press me
          </Text>
        </TouchableOpacity>
      )
    }
    }
    keyExtractor={(item) => String(item)}
  />
</View>
  );
}

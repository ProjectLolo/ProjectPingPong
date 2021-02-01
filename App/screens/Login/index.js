import React, { useState, useContext } from "react";
import {
  View,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
  Text,
  Image,
} from "react-native";
import styles from "@styles/styles";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../../graphql/mutations";
import { AuthContext } from "../../context/Auth";
import images from "@assets/images";

export default function Login({ navigation }) {
  const [variables, setVariables] = useState({
    email: "",
    password: "",
  });
  const [hidePassword, setHidePassword] = useState(true);

  const { signIn, signUp } = useContext(AuthContext);

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

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1 }}>
        <Image style={styles.peekabondLogo} source={images.peekabondLogo} />
        <Text style={[styles.title, { marginTop: "10%" }]}>Login</Text>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="Enter email..."
          placeholderTextColor="grey"
          onChangeText={(text) => setVariables({ ...variables, email: text })}
          value={variables.email}
        />
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="Enter password..."
          placeholderTextColor="grey"
          secureTextEntry={hidePassword}
          onChangeText={(text) =>
            setVariables({ ...variables, password: text })
          }
          value={variables.password}
        />
        {variables.password === "" ? null : (
          <TouchableWithoutFeedback onPress={togglePassword}>
            <Text style={styles.showPassword}>
              {hidePassword ? "Show password" : "Hide password"}
            </Text>
          </TouchableWithoutFeedback>
        )}

        <TouchableWithoutFeedback onPress={submitForm}>
          <View style={styles.loginButton}>
            <Text style={styles.loginButtonText}>LOGIN</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Password")}
        >
          <Text style={styles.bottomText}>FORGOT PASSWORD?</Text>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.bottomText}>SIGNUP</Text>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
}

import React, {useEffect, useReducer, createContext} from "react";

import jwtDecode from "jwt-decode";
import AsyncStorage from "@react-native-community/async-storage";
import AuthNavigator from "./AuthNavigator";
import StackNavigator from "./StackNavigator";
import {AuthContext} from "../context/Auth";

const AuthStateContext = createContext();

export default function CombineNavigators() {
  const authContextValue = React.useMemo(
    () => ({
      signIn: async (token) => {
        console.log("WHAT IS IN THE SINGIN DATA", token);
        const decodedToken = jwtDecode(token);

        await AsyncStorage.setItem("userToken", token);
        dispatch({
          type: "SIGN_IN",
          token: {token, decodedToken},
        });
      },
      signOut: async () => {
        await AsyncStorage.removeItem("userToken");
        dispatch({type: "SIGN_OUT"});
      },
      signUp: async (data) => {
        console.log("WHAT IS IN THE SIGNUP DATA?", data);
        const screen = "SignUp";
        const decodedToken = jwtDecode(data);
        await AsyncStorage.setItem("userToken", data);
        dispatch({
          type: "SIGN_IN",
          token: {data, decodedToken, screen},
        });
      },
      activeUser: async (data) => {
        dispatch({type: "SET_USER", id: data});
      },
      activeKid: async (data) => {
        dispatch({type: "SET_KID", id: data});
      },
      kidName: async (data) => {
        dispatch({type: "SET_KID_NAME", name: data});
      },
    }),
    []
  );

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken = await AsyncStorage.getItem("userToken");
      } catch (e) {
        console.log(e);
        userToken = undefined;
      }
      if (userToken != null && userToken != undefined) {
        const decodedToken = jwtDecode(userToken);
        console.log("decoded token", decodedToken);
        const expiresAt = new Date(decodedToken.exp * 1000);

        if (new Date() > expiresAt) {
          try {
            await AsyncStorage.removeItem("userToken");
          } catch (e) {
            console.log("error bootstrapAsync token", e);
          }
        } else {
          dispatch({
            type: "RESTORE_TOKEN",
            token: {userToken, decodedToken},
          });
        }
      }
    };
    bootstrapAsync();
  }, []);

  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token.userToken,
            activeUser: action.token.decodedToken.userId,
            firstName: action.token.decodedToken.name,
          };
        case "SIGN_IN":
          console.log("SIGNUP action.screen", action);
          return {
            ...prevState,
            userToken: action.token,
            activeUser: action.token.decodedToken.userId,
            firstName: action.token.decodedToken.name,
            screen: action.token.screen,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            userToken: false,
            activeUser: false,
          };
        case "SET_USER":
          return {
            ...prevState,
            activeUser: action.id,
          };
        case "SET_KID":
          return {
            ...prevState,
            activeKid: action.id,
          };
        case "SET_KID_NAME":
          return {
            ...prevState,
            kidName: action.name,
          };
      }
    },
    {
      userToken: false,
      activeKid: false,
      kidName: false,
      activeUser: false,
      firstName: false,
    }
  );

  //if there is a token (so user is logged in) we switch from AuthNavigator to StackNavigator
  //hardcoded for now

  return (
    <AuthContext.Provider value={authContextValue}>
      <AuthStateContext.Provider value={state}>
        {state.userToken ? <StackNavigator state={state} /> : <AuthNavigator />}
      </AuthStateContext.Provider>
    </AuthContext.Provider>
  );
}

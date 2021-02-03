import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import GameStart from "../screens/CreateContent/MonkeySeeMonkeyDo/GameStart";

const Stack = createStackNavigator();

export const MonkeySeeMonkeyDoStack = ({}) => {
  return (
    <Stack.Navigator initialRouteName="GameStart">
      <Stack.Screen
        name="GameStart"
        options={{
          header: () => null,
        }}
        component={GameStart}
      />
      {/* other screens here */}
    </Stack.Navigator>
  );
};

import {createStackNavigator} from "@react-navigation/stack";
import React from "react";
import GameStart from "../screens/CreateContent/MonkeySeeMonkeyDo/GameStart";
import AnimalSelector from "../screens/CreateContent/MonkeySeeMonkeyDo/AnimalSelector";

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
      <Stack.Screen
        name="AnimalSelector"
        options={{
          header: () => null,
        }}
        component={AnimalSelector}
      />
      {/* other screens here */}
    </Stack.Navigator>
  );
};

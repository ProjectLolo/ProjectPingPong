import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import AnimalSelector from "../screens/CreateContent/MonkeySeeMonkeyDo/AnimalSelector";
import GameStart from "../screens/CreateContent/MonkeySeeMonkeyDo/GameStart";
import GetReady from "../screens/CreateContent/MonkeySeeMonkeyDo/GetReady";
import ImitationPreview from "../screens/CreateContent/MonkeySeeMonkeyDo/ImitationPreview";
import ImitationSent from "../screens/CreateContent/MonkeySeeMonkeyDo/ImitationSent";
import RecordImitation from "../screens/CreateContent/MonkeySeeMonkeyDo/RecordImitation";

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
      <Stack.Screen
        name="GetReady"
        options={{
          header: () => null,
        }}
        component={GetReady}
      />
      <Stack.Screen
        name="RecordImitation"
        options={{
          header: () => null,
        }}
        component={RecordImitation}
      />
      <Stack.Screen
        name="ImitationPreview"
        options={{
          header: () => null,
        }}
        component={ImitationPreview}
      />
      <Stack.Screen
        name="ImitationSent"
        options={{
          header: () => null,
        }}
        component={ImitationSent}
      />
    </Stack.Navigator>
  );
};

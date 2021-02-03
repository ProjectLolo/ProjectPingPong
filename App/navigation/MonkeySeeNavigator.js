import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import GuessAnimal from "../screens/CreateContent/MonkeySeeMonkeyDo/ReceiverScreens/GuessAnimal";
import GuessStart from "../screens/CreateContent/MonkeySeeMonkeyDo/ReceiverScreens/GuessStart";
import Success from "../screens/CreateContent/MonkeySeeMonkeyDo/ReceiverScreens/Success";
import AnimalSelector from "../screens/CreateContent/MonkeySeeMonkeyDo/SenderScreens/AnimalSelector";
import GameStart from "../screens/CreateContent/MonkeySeeMonkeyDo/SenderScreens/GameStart";
import GetReady from "../screens/CreateContent/MonkeySeeMonkeyDo/SenderScreens/GetReady";
import ImitationPreview from "../screens/CreateContent/MonkeySeeMonkeyDo/SenderScreens/ImitationPreview";
import ImitationSent from "../screens/CreateContent/MonkeySeeMonkeyDo/SenderScreens/ImitationSent";
import RecordImitation from "../screens/CreateContent/MonkeySeeMonkeyDo/SenderScreens/RecordImitation";

const Stack = createStackNavigator();

export const MonkeySeeMonkeyDoStack = ({}) => {
  return (
    <Stack.Navigator initialRouteName="GameStart">
      {/* ------ senderscreens ------- */}
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

      {/* ------ senderscreens ------- */}
      <Stack.Screen
        name="GuessStart"
        options={{
          header: () => null,
        }}
        component={GuessStart}
      />
      <Stack.Screen
        name="GuessAnimal"
        options={{
          header: () => null,
        }}
        component={GuessAnimal}
      />
      <Stack.Screen
        name="Success"
        options={{
          header: () => null,
        }}
        component={Success}
      />
    </Stack.Navigator>
  );
};

import {createStackNavigator} from "@react-navigation/stack";
import React from "react";
import AnimalSelector from "../screens/CreateContent/MonkeySeeMonkeyDo/SenderScreens/AnimalSelector";
import GameStart from "../screens/CreateContent/MonkeySeeMonkeyDo/SenderScreens/GameStart";
import GetReady from "../screens/CreateContent/MonkeySeeMonkeyDo/SenderScreens/GetReady";
import ImitationPreview from "../screens/CreateContent/MonkeySeeMonkeyDo/SenderScreens/ImitationPreview";
import ImitationSent from "../screens/CreateContent/MonkeySeeMonkeyDo/SenderScreens/ImitationSent";
import RecordImitation from "../screens/CreateContent/MonkeySeeMonkeyDo/SenderScreens/RecordImitation";
import VideoUpload from "../screens/CreateContent/MonkeySeeMonkeyDo/SenderScreens/VideoUpload";

const Stack = createStackNavigator();

export const MonkeySeeMonkeyDoStack = ({route, state}) => {
  const {activeKid, kidName, activeUser} = route.params;
  //console.log("params", route.params.activeUser);

  return (
    <Stack.Navigator initialRouteName="GameStart">
      <Stack.Screen
        name="GameStart"
        options={{
          header: () => null,
        }}
        component={GameStart}
        initialParams={{kidName}}
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
      <Stack.Screen
        name="VideoUpload"
        options={{
          header: () => null,
        }}
        component={VideoUpload}
        initialParams={{activeKid: activeKid, userId: activeUser}}
      />
    </Stack.Navigator>
  );
};

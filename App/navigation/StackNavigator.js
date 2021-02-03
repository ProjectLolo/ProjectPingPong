import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Analytics from "expo-firebase-analytics";
import React from "react";
import TakeProfilePicture from "../components/TakeProfilePicture";
import VideoPreview from "../components/VideoPreview";
import Activate from "../screens/CreateContent/Activate";
import Fun from "../screens/CreateContent/Fun";
import Memory from "../screens/CreateContent/Memory";
import MessageSent from "../screens/CreateContent/MessageSent";
import ReadAStory from "../screens/CreateContent/ReadAStory";
import Story from "../screens/CreateContent/ReadAStory/Story";
import Share from "../screens/CreateContent/Share";
import ShareSomething from "../screens/CreateContent/ShareSomething";
import SingASong from "../screens/CreateContent/SingASong";
import Teach from "../screens/CreateContent/Teach";
import CreateFamilyMember from "../screens/CreateFamilyMember";
import CreateKidCircle from "../screens/CreateKidCircle";
import JoinKidCircle from "../screens/JoinKidCircle";
import KidCircles from "../screens/KidCircles";
import LoveBank from "../screens/LoveBank";
import MediaContentDetails from "../screens/MediaContentDetails";
import Recommended from "../screens/Recommended";
import Settings from "../screens/Settings";
import SettingsKid from "../screens/SettingsKid";
import SettingsParent from "../screens/SettingsParent";
import SettingsSuggestions from "../screens/SettingsSuggestions";
import ShareFamilyCode from "../screens/ShareFamilyCode";
import UploadKidProfile from "../screens/UploadKidProfile";
import UploadUserProfile from "../screens/UploadUserProfile";
import { MonkeySeeMonkeyDoStack } from "./MonkeySeeNavigator";

export default function authNavigator({ route, state }) {
  const Stack = createStackNavigator();

  function getActiveRouteName(navigationState) {
    if (!navigationState) return null;
    const route = navigationState.routes[navigationState.index];
    // Parse the nested navigators
    if (route.routes) return getActiveRouteName(route);
    return route.routeName;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={
          state.screen === "SignUp" ? "UploadUserProfile" : "KidCircles"
        }
        screenOptions={{ headerShown: false }}
        onNavigationStateChange={(prevState, currentState) => {
          console.log("ANALYTICS");
          const currentScreen = getActiveRouteName(currentState);
          const prevScreen = getActiveRouteName(prevState);
          if (prevScreen !== currentScreen) {
            // Update Firebase with the name of your screen
            Analytics.setCurrentScreen(currentScreen);
          }
        }}
      >
        <Stack.Screen
          name="KidCircles"
          component={KidCircles}
          initialParams={state}
        />
        <Stack.Screen
          name="CreateFamilyMember"
          component={CreateFamilyMember}
          initialParams={state}
        />
        <Stack.Screen name="CreateKidCircle" component={CreateKidCircle} />
        <Stack.Screen name="UploadKidProfile" component={UploadKidProfile} />
        <Stack.Screen
          name="UploadUserProfile"
          component={UploadUserProfile}
          initialParams={state}
        />
        <Stack.Screen
          name="TakeProfilePicture"
          component={TakeProfilePicture}
        />
        <Stack.Screen
          name="ShareFamilyCode"
          component={ShareFamilyCode}
          initialParams={state}
        />
        <Stack.Screen name="JoinKidCircle" component={JoinKidCircle} />
        <Stack.Screen
          name="Recommended"
          component={Recommended}
          initialParams={state}
        />
        <Stack.Screen
          name="LoveBank"
          component={LoveBank}
          initialParams={state}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          initialParams={state}
        />
        <Stack.Screen
          name="SettingsParent"
          component={SettingsParent}
          initialParams={state}
        />
        <Stack.Screen
          name="SettingsKid"
          component={SettingsKid}
          initialParams={state}
        />
        <Stack.Screen
          name="SettingsSuggestions"
          component={SettingsSuggestions}
          initialParams={state}
        />
        <Stack.Screen
          name="MediaContentDetails"
          component={MediaContentDetails}
          initialParams={state}
        />
        <Stack.Screen name="Activate" component={Activate} />
        <Stack.Screen name="Fun" component={Fun} />
        <Stack.Screen name="Memory" component={Memory} />
        <Stack.Screen
          name="MonkeySeeMonkeyDoGameStart"
          component={MonkeySeeMonkeyDoStack}
        />
        <Stack.Screen name="ReadAStory" component={ReadAStory} />
        <Stack.Screen name="Story" component={Story} />
        <Stack.Screen
          name="ShareSomething"
          component={ShareSomething}
          initialParams={state}
        />
        <Stack.Screen name="Share" component={Share} />
        <Stack.Screen name="SingASong" component={SingASong} />
        <Stack.Screen name="Teach" component={Teach} />
        <Stack.Screen
          name="VideoPreview"
          component={VideoPreview}
          initialParams={state}
        />
        <Stack.Screen name="MessageSent" component={MessageSent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

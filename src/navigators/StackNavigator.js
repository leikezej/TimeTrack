import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ChatScreen from "../screens/ChatScreen";
import Splash from "../screens/Splash";
import Welcome from "../screens/Welcome";

import BottomTabNavigator from "./TabNavigator";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerLeft: (props) => null }}  />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
    </Stack.Navigator>
  );
}

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="ContactScreen" component={ContactScreen} options={{ headerLeft: (props) => null }} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{ headerLeft: (props) => null }} />
    </Stack.Navigator>
  );
}

export default HomeStackNavigator = () => {

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Splash" component={Splash} />
          {/* <Stack.Screen name="Welcome" component={Welcome} /> */}
          <Stack.Screen name="TabNavigator" component={BottomTabNavigator} />
        </Stack.Navigator>
    );
}

export { HomeStackNavigator, ContactStackNavigator };
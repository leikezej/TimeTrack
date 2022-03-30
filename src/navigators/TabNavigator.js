import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStackNavigator, ContactStackNavigator } from "./StackNavigator";
const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreenStackNavigator}
                options={{
                    tabBarIcon: () => (<Image source={require("../assets/images/social-icons/home.png")} style={{width: 20, height: 20}} />)
                }}
                 />
            <Tab.Screen 
                name="Contact" 
                component={ContactStackNavigator}
                options={{
                    tabBarIcon: () => (<Image source={require("../assets/images/social-icons/home.png")} style={{width: 20, height: 20}} />)
                }}
            />
        </Tab.Navigator>
    );
};
export default BottomTabNavigator;
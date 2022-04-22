import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import AppForm from './components/AppForm';
import ImageUpload from './components/ImageUpload';
import UserProfile from './components/UserProfile';

import { Splash, Welcome, Home, Homes, Login, Register } from '../screens';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false}} >
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} headerShown={true} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Homes" component={Homes} />
       </Stack.Navigator>
    </NavigationContainer>
    );
};

const MainNavigator = () => {
    const context = useLogin()
    return <StackNavigator />;
}

export default  MainNavigator;
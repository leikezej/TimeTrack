import 'react-native-gesture-handler';

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from  '@react-navigation/native-stack';
 
// import { createStackNavigator} from  '@react-navigation/stack'; 
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Splash, Welcome, Home, Login, Register } from './src/screens';
import { TimeIn, TimeOut, TimeSheet } from './src/screens/navigation';

const Stack = createNativeStackNavigator();
//   const Stack = createStackNavigator();


const App = () => {
  return(
      <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false}} >
              <Stack.Screen name="Splash" component={Splash} />
              <Stack.Screen name="Welcome" component={Welcome} />
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Register" component={Register} />
              
            <Stack.Screen name="TimeIn" component={TimeIn} />
            <Stack.Screen name="TimeOut" component={TimeOut} />
            <Stack.Screen name="TimeSheet" component={TimeSheet} />
    </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App;
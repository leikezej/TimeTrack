import 'react-native-gesture-handler';

import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from  '@react-navigation/stack'; 
import { createNativeStackNavigator} from  '@react-navigation/native-stack';
// import { createDrawerNavigator} from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import StackNavigator from './src/navigators/StackNavigator';
// import TabsNavigator from './src/navigators/TabsNavigator';
// import BottomNavigator from './src/navigators/BottomNavigator';
// import DrawerNavigator from './src/navigators/DrawerNavigator';

// ?fTabs Screens
import { HomeScreen, Splash, Welcome, Login, Register } from './src/screens';
// import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { Bottom1, Bottom2, Bottom3, Bottom4 } from './src/screens/bottom';
// const Tabs = createMaterialBottomTabNavigator();

// const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();
// const Bottom = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();

  const App = () => {
    const [isSignedIn, setIsSignedIn]=useState(true);
    const Stack = createNativeStackNavigator();
    // const Stack = createStackNavigator();
    const Tab = createBottomTabNavigator();
    
    if(isSignedIn == true){
        return(      
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="HomeScreen" component={HomeScreen}
                     options={{
                        title: 'Super Home Screen',
                        headerStyle: {
                          backgroundColor: '#09f',
                        },
                     }}
                />
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="Login" component={Login} headerShown={true} />
                <Stack.Screen name="Register" component={Register} />
          </Stack.Navigator>
      </NavigationContainer>
    )
  } else{
      return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Bottom1" component={Bottom1}></Tab.Screen>
                <Tab.Screen name="Bottom2" component={Bottom2}></Tab.Screen>
                <Tab.Screen name="Bottom3" component={Bottom3}></Tab.Screen>
                <Tab.Screen name="Bottom4" component={Bottom4}></Tab.Screen>
            </Tab.Navigator>
       </NavigationContainer>
      )
    }
};
  export default App;  
  

  // return(
  //     <NavigationContainer>
  //         <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false}} >
  //           <Stack.Screen name="Splash" component={Splash} />
  //           <Stack.Screen name="Welcome" component={Welcome} />
  //           // <Stack.Screen name="Home" component={Home} />
  //           <Stack.Screen name="Login" component={Login} headerShown={true} />
  //           <Stack.Screen name="Register" component={Register} />
  //           <Stack.Screen name="Homes" component={Homes} />
  //           </Stack.Navigator>
  //     </NavigationContainer>
  //     );
  //   }
    


  // <Tabs.Navigator initialRouteName='HomeScreen' tabBarOptions={{activeTintColor: '#42f44b'}}>
  //   <Tabs.Screen name="Bottom1" component={Bottom1} />
  //   <Tabs.Screen name="Bottom2" component={Bottom2} />
  //   <Tabs.Screen name="HomeScreen" component={HomeScreen} />
  //   <Tabs.Screen name="Bottom3" component={Bottom3} />
  //   <Tabs.Screen name="Bottom4" component={Bottom4} />
  // </Tabs.Navigator>


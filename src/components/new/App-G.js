import 'react-native-gesture-handler';

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { NavigationContainer } from '@react-navigation/native';``
import { createStackNavigator} from  '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator} from  '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createDrawerNavigator} from '@react-navigation/drawer';
// import { createDrawerNavigator} from '@react-navigation/native';

import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import DetailsScreen from './src/screens/bottom/DetailsScreen';
import Splash from './src/screens/Splash';
import Welcome from './src/screens/Welcome';

//bottom navigation screens
import { EventsScreen, PayrollScreen, SettingsScreen, CalendarScreen } from './src/screens/bottom';
import { MainScreen } from './src/screens';

// import { Bottom1, Bottom2, Bottom3, Bottom4 } from './src/screens/bottom/';
// import { Screen1, Screen2, Screen3, Screen4, Screen5 } from './src/screens/drawer'
// import { DrawerContent } from './src/navigators/DrawerContent';



const Stack = createStackNavigator(); 
const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();
// const Tab = createMaterialBottomTabNavigator();
// const Bottom = createBottomTabNavigator();
// const Side = createDrawerTabNavigator();


function HomeTabs() {
  return (
    // <Tab.Navigator initialRouteName='Calendar' style={styles.tab} screenOptions={{ headerShown: false}} activeColor="#f0edf6"
    <Tab.Navigator style={styles.tab} screenOptions={{ headerShown: false}} activeColor="#f0edf6"
    inactiveColor="#3e2465"
    barStyle={{ paddingBottom: 48 }}>
    
      <Tab.Screen name="Events" component={EventsScreen} options={{ tabBarIcon: ({ color }) => (
            <Ionicons name="calendar-outline" color={color} size={30} />
          ), }}/>
      
      <Tab.Screen name="Payroll" component={PayrollScreen} options={{ tabBarIcon: ({ color }) => (
            <Ionicons name="cash-outline" color={color} size={30} />
          ), }}/>
      
      <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: 'Home', tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" color={color} size={30} />
          ), }}/>
      <Tab.Screen name="Settings" component={SettingsScreen} options={{ tabBarIcon: ({ color }) => (
            <Ionicons name="settings-outline" color={color} size={30} />
          ), }}/>
      <Tab.Screen name="Calendar" component={CalendarScreen} options={{ tabBarIcon: ({ color }) => (
            <Ionicons name="calendar-outline" color={color} size={30} />
          ), }}/>
    </Tab.Navigator>
  );
}

// function DrawerScreen() {
//   return (
//       <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props}/>}>
//         <Drawer.Screen name="Screen1" component={Screen1} />
//         <Drawer.Screen name="Screen2" component={Screen2} />
//         <Drawer.Screen name="Screen3" component={Screen3} />
//         <Drawer.Screen name="Screen4" component={Screen4} />
//         <Drawer.Screen name="Screen5" component={Screen5} />
//       </Drawer.Navigator>
//   )
// }



const SplashScreen = createNativeStackNavigator();
function SplashStackScreen() {
  return (
      <Stack.Navigator options={{ headerShown: false }}>
        <Stack.Group>
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }}/>
            <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }}/>
        </Stack.Group>
      </Stack.Navigator>
  );
}


// const App: () => Node = () => {
const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
     {/* <Stack.Navigator option={{ headerShown: false }}> */}
     <Stack.Navigator initialRouteName="SplashScreen">
        {/* <Stack.Screen name="Splash" options={{ headerShown: false }} component={Splash}/> */}
        {/* <Stack.Screen name="Welcome" options={{ headerShown: false }} component={Welcome}/> */}
        <Stack.Screen name="SplashScreen" options={{ headerShown: false }} component={SplashStackScreen}/>
        <Stack.Screen name="Login" options={{ headerShown: false }} component={Login}/>
        <Stack.Screen name="Register" options={{headerShown: false}} component={Register}/>
        {/* <Stack.Screen name="HomeScreen" options={{ headerShown: false }} component={HomeTabs} /> */}
        <Stack.Screen name="HomeScreen" options={{ headerShown: false }} component={MainScreen} />
        {/* <Stack.Screen name="Home" options={{ headerShown: false }} component={CustomDrawer} />   */}
        <Stack.Screen name="ProfileScreen" options={{ headerShown: false }} component={ProfileScreen} />
        <Stack.Screen name="DetailsScreen" options={{ headerShown: false }} component={DetailsScreen} />
     </Stack.Navigator>
    </NavigationContainer>  
  );      

};

export default App;

const styles = StyleSheet.create({
    tab: {
      activeColor: '#f0edf6',
      inactiveColor: '#3e2465'
    }
})

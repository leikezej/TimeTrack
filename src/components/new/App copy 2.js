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
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { createDrawerNavigator} from '@react-navigation/drawer';
// import { createDrawerNavigator} from '@react-navigation/native';

import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/bottom/ProfileScreen';
import DetailsScreen from './src/screens/bottom/DetailsScreen';
import Splash from './src/screens/Splash';
import Welcome from './src/screens/Welcome';

//bottom navigation screens
import { EventsScreen, PayrollScreen, SettingsScreen, CalendarScreen } from './src/screens/bottom';
import { Screen1, Screen2, Screen3, Screen4, Screen5 } from './src/screens/drawer';
import { createAppContainer } from "react-navigation";

// import { Bottom1, Bottom2, Bottom3, Bottom4 } from './src/screens/bottom/';
// import { Screen1, Screen2, Screen3, Screen4, Screen5 } from './src/screens/drawer'
// import { DrawerContent } from './src/navigators/DrawerContent';



const Stack = createStackNavigator(); 
const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();
// const Tab = createMaterialBottomTabNavigator();
// const Top = createMaterialTopTabNavigator();
// const Bottom = createBottomTabNavigator();
// const Side = createDrawerTabNavigator();


const screenOptions = (route, color) => {
  let iconName;

  switch (route.name) {
    case 'Home':
      iconName = 'home';
      break;
    case 'Browse':
      iconName = 'appstore-o';
      break;
    case 'Library':
      iconName = 'folder1';
      break;
    default:
      break;
  }

  return <Icon name={iconName} color={color} size={24} />;
};

function HomeTabs() {
  return (
    <Tab.Navigator initialRouteName="Home" style={{ backgroundColor: '#05c', height: '250' }} screenOptions={{ headerShown: false}}>
     
     {/* <Tab.Navigator 
          options={{ headerShown: false }}
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            headerShown: "false",
          // tabBarActiveTintColor: "#e91e63",
          // tabBarInactiveTintColor: "#555",
          // activeTintColor: "#e91e63",
          // activeBackgroundColor: "#c1c1c1",
          // labeled: 'false',
          // inactiveTintColor: "#e91e63",
          // inactiveTintColor: "#c1c1c1",
          
          tabBarLabelStyle: {
            fontSize: 10,
            headerShown: "false",
          },
          tabBarShowLabel: "false",
          headerShown: "false",
            tabBarLabelStyle: {
          headerShown: "false",
            textTransform: 'none',
          },
          tabStyle: {
            width: 100,    
          headerShown: "false",
          },
          style: {
          headerShown: "false",
            backgroundColor: '#eef2f9',
            borderTopColor: 'transparent',
          },
        })}
    > */}
    
          <Tab.Screen name="Events" component={EventsScreen} options={{ borderBottomColor: 'transparent', labelStyle: {color: 'red'}, tabBarIcon: ({ focused, color }) => (
                <Ionicons name="calendar-outline" color={focused ? '#B3D4FF' : '#B3BAC5'} size={40} />
              ), tabBarStyle: {height: 60, borderBottomColor: 'transparent', backgroundColor: '#fcfcfc' }, navigationOptions: { title: 'Events Screen' },
              tabBarOptions: { indicatorStyle: { backgroundColor: 'transparent', } },
              borderBottomColor: 'transparent',
              swipeEnabled: true,
              animationEnabled: true,
              style: {
                backgroundColor: 'grey',
                borderBottomColor: 'transparent',
              },
              tabStyle: {
                height: 49,
                borderBottomColor: 'transparent',
              },
              iconStyle: {
                flexGrow: 0,
                marginTop: 1.5
              },
              style: {
                borderBottomColor: 'transparent',
                padding: 5,
                backgroundColor: '#eef2f9',
                borderTopColor: 'transparent',
              },
              }}/>
          
          
          <Tab.Screen name="Payroll" component={PayrollScreen} options={{ tabBarIcon: ({ color }) => (
                <Ionicons name="cash-outline" color={'#000'} size={30} />
              ),   tabBarStyle : {
                height: 50,
                borderRadius: 20,
                backgroundColor: '#eef2f9'
           }}}/>
          
          <Tab.Screen name="Home" component={HomeScreen} style={{ background: '#000', backgroundColor: '#000' }} options={{ headerShown: 'false', tabBarLabel: 'Home', tabBarIcon: ({ color }) => (
                <Ionicons name="home-outline" size={36} marginTop={40} />
              ), }}/>
              
              
          <Tab.Screen name="Settings" component={SettingsScreen} options={{ tabBarIcon: ({ color }) => (
                <Ionicons name="settings-outline" color={'#000'} size={30} />),   tabBarStyle : {
                  height: 60,
             }}}/>
              
              
          <Tab.Screen name="Calendar" component={CalendarScreen} screenOption={{headerShown:false}}options={{ tabBarIcon: ({ color }) => (
                <Ionicons name="calendar-outline" color={'#000'} size={30} />
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
     <Stack.Navigator initialRouteName="HomeScreen">
     {/* <Stack.Navigator initialRouteName="SplashScreen"> */}
        {/* <Stack.Screen name="Splash" options={{ headerShown: false }} component={Splash}/> */}
        {/* <Stack.Screen name="Welcome" options={{ headerShown: false }} component={Welcome}/> */}
        <Stack.Screen name="SplashScreen" options={{ headerShown: false }} component={SplashStackScreen}/>
        <Stack.Screen name="Login" options={{ headerShown: false }} component={Login}/>
        <Stack.Screen name="Register" options={{headerShown: false}} component={Register}/>
        <Stack.Screen name="HomeScreen" options={{ headerShown: false }} component={HomeTabs} />
        {/* <Stack.Screen name="HomeScreen" options={{ headerShown: false }} component={HomeTabs} /> */}
        {/* <Stack.Screen name="Home" options={{ headerShown: false }} component={CustomDrawer} />   */}
        {/* <Stack.Screen name="ProfileScreen" options={{ headerShown: false }} component={ProfileScreen} /> */}
        {/* <Stack.Screen name="DetailsScreen" options={{ headerShown: false }} component={DetailsScreen} /> */}
     </Stack.Navigator>
    </NavigationContainer>  
  );      

};

export default App;

const styles = StyleSheet.create({
    bottomTab: {
      color: '#000',
      height: 1500,
      backgroundColor: '#e5d'
    }
})

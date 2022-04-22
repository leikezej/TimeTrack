import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Login from './src/screens/Login';
import Register from './src/screens/Register';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from  '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator} from  '@react-navigation/native-stack';
// import { createDrawerNavigator} from '@react-navigation/drawer';
// import { createDrawerNavigator} from '@react-navigation/native';

import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
// import SettingsScreen from './src/screens/SettingsScreen';
import Splash from './src/screens/Splash';
import Welcome from './src/screens/Welcome';

//bottom navigation screens
import { EventsScreen, PayrollScreen, SettingsScreen, AlarmsScreen } from './src/screens/bottom/';
// import { Bottom1, Bottom2, Bottom3, Bottom4 } from './src/screens/bottom/';

import { Screen1, Screen2, Screen3, Screen4, Screen5 } from './src/screens/drawer'

import DrawerNavigation from './src/components/DrawerNavigation';

// const Routing = StackNavigator({

//   WELCOME:  { screen: Welcome },
// },
// {
//       initialRouteName: 'Splash',
// });

// export  default Routing

// const screens = {
//   SignInScreen: {
//       screen: SignIn,
//   },
//   SignUpScreen: {
//       screen: SignUp,
//   },
//   HomeScreen: {
//       screen: Home,
//   }
// }

// const homeStack = createStackNavigator(
//   screens,
//   {
//       defaultNavigationOptions: {
//           headerStyle: {
//               backgroundColor: "#009387",
//           },
//           headerTintColor: '#fff',
//           headerTitleStyle: {
//               textAlign:'center',
//               fontWeight: 'bold',
//           },
//       },
//   },
//   {initialRouteName: 'SignInScreen'}
//   );

// export default createAppContainer(homeStack);


const Stack = createStackNavigator(); 
const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();
// const Bottom = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();
// const Side = createDrawerTabNavigator();
// const Drawer = createDrawerNavigator();


function HomeTabs() {
  return (
    <Tab.Navigator style={styles.tab} screenOptions={{ headerShown: false}} activeColor="#f0edf6"
    inactiveColor="#3e2465"
    barStyle={{ paddingBottom: 48 }}>
    
      {/* <Tab.Screen name="Calendar Events" component={DrawerNavigation} options={{ headerShown: false }}/> */}
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
      <Tab.Screen name="Alarms" component={AlarmsScreen} options={{ tabBarIcon: ({ color }) => (
            <Ionicons name="alarm-outline" color={color} size={30} />
          ), }}/>
    </Tab.Navigator>
  );
}

// function DrawerTabs() {
//   return (
//       <Drawer.Navigator>
//         <Drawer.Screen name="Screen1" component={Screen1} />
//         <Drawer.Screen name="Screen2" component={Screen2} />
//         <Drawer.Screen name="Screen3" component={Screen3} />
//         <Drawer.Screen name="Screen4" component={Screen4} />
//         <Drawer.Screen name="Screen5" component={Screen5} />
//       </Drawer.Navigator>
//   )
// }


// 
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


const App: () => Node = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
     {/* <Stack.Navigator option={{ headerShown: false }}> */}
     <Stack.Navigator>
        {/* <Stack.Screen name="Splash" options={{ headerShown: false }} component={Splash}/> */}
        {/* <Stack.Screen name="Welcome" options={{ headerShown: false }} component={Welcome}/> */}
        <Stack.Screen name="SplashScreen" options={{ headerShown: false }} component={SplashStackScreen}/>
        <Stack.Screen name="Login" options={{ headerShown: false }} component={Login}/>
        <Stack.Screen name="Register" options={{headerShown: false}} component={Register}/>
        <Stack.Screen name="HomeScreen" options={{ headerShown: false }} component={HomeTabs} />
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


// function Screen1({ navigation }) {
//   return (
//     <SafeAreaView style={[styles.container, { backgroundColor: '#6a51ae' }]}>
//       <FocusAwareStatusBar barStyle="light-content" backgroundColor="#6a51ae" />
//       <Text style={{ color: '#fff' }}>Light Screen</Text>
//       <Button
//         title="Next screen"
//         onPress={() => navigation.navigate('Screen2')}
//         color="#fff"
//       />
//     </SafeAreaView>
//   );
// }
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { HomeScreen, Notifications, ProfileScreen, Settings } from './src/screens/signedIn';

  // const [isSignedIn,setIsSignedIn]=useState(true);
  // const Tab = createBottomTabNavigator();
  
  //     if(isSignedIn == true ) {
  //         return (
  //           <NavigationContainer>
  //             <Tab.Navigator>
  //                 <Tab.Screen name="HomeScreen" component={HomeScreen} />
  //                 <Tab.Screen name="Profile" component={ProfileScreen} />
  //                 <Tab.Screen name="Settings" component={SettingsScreen} />
  //                 <Tab.Screen name="Notifications" component={NotificationsScreen} />
  //             </Tab.Navigator>
  //           </NavigationContainer>
  //         )
  //     }else{
          
      // }

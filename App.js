import 'react-native-gesture-handler';

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from  '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 
// import { createStackNavigator} from  '@react-navigation/stack'; 
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import SplashScreen from './src/screens/SplashScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
// import AdminLogin from './src/screens/AdminLogin';

// Bottom Tab Navigator Screens
import { Screen1, Screen2, Screen3, Screen4, Screen5 } from './src/screens/bottom';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
//   const Stack = createStackNavigator();

// box1
import TaskScreen from './src/pages/Tasks/TasksScreen';
import TodoScreen from './src/pages/Todo/TodoScreen';
import NoteScreen from './src/pages/Notes/NotesScreen';

import CalendarScreen from './src/pages/Calendar/CalendarScreen';
import ClockScreen from './src/pages/Clock/ClockScreen';

import TimeSheetScreen from './src/pages/TimeSheet/TimeSheetScreen';
import TimeInScreen from './src/pages/TimeSheet/TimeInScreen';
import TimeOutScreen from './src/pages/TimeSheet/TimeOutScreen';

// import SettingsScreen from './src/pages/Settings/SettingsScreen';

function HomeTabs() {
  return (
    // <Tab.Navigator initialRouteName='Calendar' style={styles.tab} screenOptions={{ headerShown: false}} activeColor="#f0edf6"
    <Tab.Navigator 
                  initialRouteName="HomeScreen" 
                  options={{ tabBarShowLabel: false }}
                  screenOptions={{
                  //   // marginTop: 10,
                  //   // backgroundColor: '#090',
                    tabBarInactiveTintColor: '#ffffff',
                    tabBarActiveTintColor: 'black',
                  //   // tabBarActiveBackgroundColor: '#eef2f0',
                  //   // marginTop: 20,
                  //   // tabBarLabelPosition: 'below-icon',
                  //   // headerShown: false,
                  //   // tabBarHideOnKeyboard: true,
                  //   // tabBarLabelStyle: { 
                  //   // color: '#000',
                  //   // tabBarActiveTintColor: '#000',
                  //     // fontSize: 15,
                  //     // borderTopWidth: 0,
                  //     // position: 'absolute',
                  //     // elevation: 5,
                  //     // marginTop: 20,  
                      
                  //   },
                  //   tabBarItemStyle: { 
                  //                     // // backgroundColor:`#dadce0`, //icon bg
                                      // marginTop: 5,
                  //                     // height: 90,
                  //                     // borderRadius:150,
                  //                   },
                  //   tabBarStyle: { 
                  //                     //  backgroundColor: "none",
                  //                   // backgroundColor: "#eef2f9", //container color
                  //                   // width: 350,
                  //                   // marginLeft: 20,
                  //                   // height: 80, //icon background height
                  //                   // // marginTop: 30,
                  //                   //   // marginTop: 20,
                  //                   // // marginLeft: 0,
                  //                   // justifyContent: 'center',
                  //                   // alignContent: 'center',
                  //                   // // color: 'white',
                  //                   // borderRadius: 20,
                  //                   // marginBottom: 5
                  //                },
                  }}
                >
                
                                {/* <Tab.Screen name="Events" component={EventsScreen} options={{ tabBarIcon: ({ color, size }) => ( */}
      <Tab.Screen name="Events" component={Screen1} options={{ tabBarIcon: ({ color, size }) => (
            // <Ionicons name="calendar-outline" color={'#000'} size={40} marginTop={40} />
            <Image source={require('././src/assets/images/b-icons/calendar-today-b.png')} style={{
              width: 40,
              height: 40
              // backgroundColor: '#f34',
              // tintColor: '#ccc',
              // borderRadius: '20'
            }}></Image>
          ), navigationOptions: { title: 'Events Screen' } }}/>
    
   
                
                            {/* <Tab.Screen name="Payroll" component={PayrollScreen} options={{ tabBarIcon: ({ color }) => ( */}
            <Tab.Screen name="Payroll" component={Screen2} options={{ tabBarIcon: ({ color }) => (
            // <Ionicons name="home-outline" color={'#000'} size={50} marginTop={40} />
            <Image source={require('././src/assets/images/b-icons/meetingg.png')} style={{
              width: 40,
              height: 40,
            }}></Image>
          ), }}/>
          


      
      {/* <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: 'Home', marginTop: 10, marginBottom: 50, tabBarIcon: ({ color }) => ( */}
      <Tab.Screen name="HomeScreen" component={HomeScreen} options={{ tabBarLabel: 'Home', tabBarIcon: ({ color }) => (
            // <Ionicons name="home-outline" color={'#000'} size={50} marginTop={40} />
            <Image source={require('././src/assets/images/b-icons/ios-home-b.png')} style={{
              width: 45,
              height: 45,
              marginBottom: 10
              // marginBottom:40,
              // backgroundColor: '#f34',
              // tintColor: '#ccc',
            }}></Image>
          ), }}/>
          
          
          <Tab.Screen name="Settings" component={Screen4} screenOption={{headerShown:false}}options={{ tabBarIcon: ({ color }) => (
            // <Ionicons name="settings" color={'#000'} size={40} />
            <Image source={require('././src/assets/images/b-icons/ios-settings-b.png')} style={{
              width: 50,
              height: 50,
            }}></Image>
          ), }}/>

          <Tab.Screen name="Profile" component={Screen5} screenOption={{headerShown:false}}options={{ tabBarIcon: ({ color }) => (
            // <Ionicons name="home-outline" color={'#000'} size={40} />
            <Image source={require('././src/assets/images/b-icons/appointment-b.png')} style={{
              width: 40,
              height: 40,
                            // backgroundColor: '#fff',
              // tintColor: '#000',
              // backgroundColor: '#f34',
              // tintColor '#ccc',
              // borderRadius: '20'
            }}></Image>
            // <Ionicons name="user-outline" color={'#fff'} size={50} />
          ), }}/>


        


    </Tab.Navigator>
  );
}

const App = () => {
  return(
      <NavigationContainer>
          {/* <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false}} > */}
          <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{ headerShown: false}} >
              <Stack.Screen name="HomeScreen" component={HomeTabs} />
              <Stack.Screen name="SplashScreen" component={SplashScreen} />
              <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
              {/* <Stack.Screen name="AdminLogin" component={AdminLogin} /> */}
        
          <Stack.Screen name="TaskScreen" screenOptions={{ headerShown: false}} component={TaskScreen} />  
          <Stack.Screen name="TodoScreen" screenOptions={{ headerShown: false}} component={TodoScreen} />  
          <Stack.Screen name="NoteScreen" screenOptions={{ headerShown: false}} component={NoteScreen} />  
          
          <Stack.Screen name="CalendarScreen" screenOptions={{ headerShown: false}} component={CalendarScreen} />  
          <Stack.Screen name="ClockScreen" screenOptions={{ headerShown: false}} component={ClockScreen} />  
          
          <Stack.Screen name="TimeSheetScreen" screenOptions={{ headerShown: false}} component={TimeSheetScreen} />  
          <Stack.Screen name="TimeInScreen" screenOptions={{ headerShown: false}} component={TimeInScreen} />  
          <Stack.Screen name="TimeOutScreen" screenOptions={{ headerShown: false}} component={TimeOutScreen} />  
    </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App;

const styles = StyleSheet.create({
  // tab: {
  //   activeColor: '#f34',
  //   inactiveColor: '#f34'
  // }
})
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
import AdminLogin from './src/screens/AdminLogin';

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

function HomeTabs() {
  return (
    // <Tab.Navigator initialRouteName='Calendar' style={styles.tab} screenOptions={{ headerShown: false}} activeColor="#f0edf6"
    <Tab.Navigator 
                  initialRouteName="HomeScreen" 
                  // screenOptions={{ headerShown: false}}
                  style={styles.tab} 
                  options={{ tabBarShowLabel: false }}
                  screenOptions={{
                    // marginTop: 10,
                    // backgroundColor: '#090',
                    // tabBarBackground: 'transparent',
                    tabBarActiveTintColor: '#000',
                    tabBarInactiveTintColor: '#f2f2f2',
                    // tabBarActiveBackgroundColor: '#d3d3d3',
                    // marginTop: 20,
                    // tabBarLabelPosition: 'below-icon',
                    headerShown: false,
                    tabBarHideOnKeyboard: true,
                    tabBarLabelStyle: { 
                    color: '#fff',
                    tabBarActiveTintColor: '#000',
                      fontSize: 15,
                      // borderTopWidth: 0,
                      // position: 'absolute',
                      // elevation: 5,
                      // marginTop: 20,  
                      
                    },
                    tabBarItemStyle: { 
                                      // backgroundColor:'#dadce0', //icon bg
                                      marginTop: 10,
                                      // height: 90,
                                      borderRadius:200,
                                    },
                    tabBarStyle: { 
                                      //  backgroundColor: "none",
                                    // backgroundColor: "transparent", //container color
                                    width: 340,
                                    marginLeft: 30,
                                    height: 90, //icon background height
                                    // marginTop: 30,
                                      // marginTop: 20,
                                    // marginLeft: 0,
                                    justifyContent: 'center',
                                    alignContent: 'center',
                                    // color: 'white',
                                    borderRadius: 20,
                                    marginBottom: 10
                                 },
                  }}
                >
    
      {/* <Tab.Screen name="Events" component={EventsScreen} options={{ tabBarIcon: ({ color, size }) => ( */}
      <Tab.Screen name="Events" component={Screen1} options={{ tabBarIcon: ({ color, size }) => (
            // <Ionicons name="calendar-outline" color={'#000'} size={40} marginTop={40} />
            <Image source={require('././src/assets/images/b-icons/calendar-schedule.png')} style={{
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
            <Image source={require('././src/assets/images/b-icons/meeting.png')} style={{
              width: 40,
              height: 40,
              // marginBottom:30,
            }}></Image>
          ), }}/>
      
      {/* <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: 'Home', marginTop: 10, marginBottom: 50, tabBarIcon: ({ color }) => ( */}
      <Tab.Screen name="HomeScreen" component={HomeScreen} options={{ tabBarLabel: 'Home', tabBarIcon: ({ color }) => (
            // <Ionicons name="home-outline" color={'#000'} size={50} marginTop={40} />
            <Image source={require('././src/assets/images/b-icons/ios-home.png')} style={{
              width: 40,
              height: 40,
              // marginBottom:40,
              // backgroundColor: '#f34',
              // tintColor: '#ccc',
              // borderRadius: '20'
            }}></Image>
          ), }}/>
          
      <Tab.Screen name="Calendar" component={Screen4} screenOption={{headerShown:false}}options={{ tabBarIcon: ({ color }) => (
            // <Ionicons name="home-outline" color={'#000'} size={40} />
            // <Ionicons name="settings" color={'#000'} size={40} />
            <Image source={require('././src/assets/images/b-icons/icons8-schedule-50.png')} style={{
              width: 35,
              height: 35,
            //   // marginBottom:40,
            //   // backgroundColor: '#f34',
            //   // tintColor: '#ccc',
            //   // borderRadius: '20'
            }}></Image>
          ), }}/>
          
      <Tab.Screen name="Profile" component={Screen5} screenOption={{headerShown:false}}options={{ tabBarIcon: ({ color }) => (
            // <Ionicons name="home-outline" color={'#000'} size={40} />
            <Image source={require('././src/assets/images/b-icons/ios-user.png')} style={{
              width: 40,
              height: 40
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
              <Stack.Screen name="AdminLogin" component={AdminLogin} />
        
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
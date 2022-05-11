import 'react-native-gesture-handler';

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { NavigationContainer } from '@react-navigation/native';``
import { createStackNavigator} from  '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator} from  '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createDrawerNavigator} from '@react-navigation/drawer';
// import { createDrawerNavigator} from '@react-navigation/native';

import HomeScreen from './src/screens/HomeScreen';
import SplashScreen from './src/screens/SplashScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';

//bottom navigation screens
import { EventsScreen, PayrollScreen, SideScreen } from './src/screens/bottom';
import { MainScreen } from './src/screens';

import AttendanceScreen from './src/screens/pages/Attendance/AttendanceScreen';
import CalendarScreen from './src/screens/pages/Calendar/CalendarScreen';
// import Charts from './src/screens/pages/Charts/DonutChart';
import ClockScreen from './src/screens/pages/Clock/ClockScreen';
import InvestScreen from './src/screens/pages/Investment/InvestScreen';
import MailScreen from './src/screens/pages/Mail/MailScreen';
import NotesScreen from './src/screens/pages/Notes/NotesScreen';
import NotificationScreen from './src/screens/pages/Notification/NotificationScreen';
import ProfileScreen from './src/screens/pages/Profile/ProfileScreen';
import TasksScreen from './src/screens/pages/Tasks/TasksScreen';
import TeamsScreen from './src/screens/pages/Teams/TeamsScreen';
import TimeSheetScreen from './src/screens/pages/TimeSheet/TimeSheetScreen';
import TodoScreen from './src/screens/pages/Todo/TodoScreen';
import SettingsScreen from './src/screens/pages/Settings/SettingsScreen';
import WalletScreen from './src/screens/pages/Wallet/WalletScreen';


// import { Bottom1, Bottom2, Bottom3, Bottom4 } from './src/screens/bottom/';
import { Screen1, Screen2, Screen3, Screen4, Screen5 } from './src/screens/drawer'
// import { DrawerContent } from './src/navigators/DrawerContent';

import Tabs from './src/navigations/Tabs';


const Stack = createStackNavigator(); 
const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();
// const Tab = createMaterialBottomTabNavigator();
// const Bottom = createBottomTabNavigator();
// const Side = createDrawerTabNavigator();


function TopTabs() {
  return (
      <Tab.Navigator 
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12 },
        tabBarItemStyle: { width: 100 },
        tabBarStyle: { backgroundColor: 'powderblue' },
      }}
    >
          <Tab.Screen name="Screen1" component={Screen1}  />
          <Tab.Screen name="Screen2" component={Screen2} />
          <Tab.Screen name="Screen3" component={Screen3} />
          <Tab.Screen name="Screen4" component={Screen4} />
          <Tab.Screen name="Screen5" component={Screen5} />
      </Tab.Navigator>
  )
}

function HomeTabs() {
  return (
    // <Tab.Navigator initialRouteName='Calendar' style={styles.tab} screenOptions={{ headerShown: false}} activeColor="#f0edf6"
    <Tab.Navigator initialRouteName="Home" style={styles.tab} screenOptions={{ headerShown: false}} activeColor="#f0edf6"
    inactiveColor="#000"
    barStyle={{ paddingBottom: 78 }}
      tabBarStyle={{ height: 900 }}>
    
      <Tab.Screen name="Events" component={EventsScreen} options={{ tabBarIcon: ({ color }) => (
            <Ionicons name="calendar-outline" color={'#000'} size={30} />
          ), navigationOptions: { title: 'Events Screen' } }}/>
      
      <Tab.Screen name="Payroll" component={PayrollScreen} options={{ tabBarIcon: ({ color }) => (
            <Ionicons name="cash-outline" color={'#000'} size={30} />
          ),   tabBarStyle : {
            height: 150,
       }}}/>
      
      <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: 'Home', tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" color={'#000'} size={36} marginTop={40} />
          ), }}/>
          
      {/* <Tab.Screen name="Settings" component={SettingsScreen} options={{ tabBarIcon: ({ color }) => (
            <Ionicons name="settings-outline" color={'#000'} size={30} />
          ), }}/> */}
          
      <Tab.Screen name="Calendar" component={CalendarScreen} screenOption={{headerShown:false}}options={{ tabBarIcon: ({ color }) => (
            <Ionicons name="calendar-outline" color={'#000'} size={30} />
          ), }}/>

    </Tab.Navigator>
  );
}


// function SplashStackScreen() {
//   return (
//       <Stack.Navigator options={{ headerShown: false }}>
//         <Stack.Group>
//             <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }}/>
//             <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }}/>
//             <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }}/>
//             <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }}/>
//         </Stack.Group>
//       </Stack.Navigator>
    
//   );
// }


// const App: () => Node = () => {
const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      {/* <Stack.Navigator option={{ headerShown: false }}> */}
      <Stack.Navigator initialRouteName="SplashScreen">
          {/* <Stack.Screen name="Splash" options={{ headerShown: false }} component={Splash}/> */}
          {/* <Stack.Screen name="Welcome" options={{ headerShown: false }} component={Welcome}/> */}
          <Stack.Screen name="SplashScreen" options={{ headerShown: false }} component={SplashScreen}/>
          <Stack.Screen name="Welcome" options={{ headerShown: false }} component={WelcomeScreen} />
          <Stack.Screen name="LoginScreen" options={{ headerShown: false }} component={LoginScreen}/>
          <Stack.Screen name="RegisterScreen" options={{headerShown: false}} component={RegisterScreen}/>
          <Stack.Screen name="HomeScreen" options={{ headerShown: false }} component={HomeTabs} />  
          <Stack.Screen name="AttendanceScreen" options={{ headerShown: false }} component={AttendanceScreen} />  
          <Stack.Screen name="CalendarScreen" options={{ headerShown: false }} component={CalendarScreen} />  
          <Stack.Screen name="ClockScreen" options={{ headerShown: false }} component={TopTabs} />  
          <Stack.Screen name="NotificationScreen" options={{ headerShown: false }} component={NotificationScreen} />  
          <Stack.Screen name="InvestScreen" options={{ headerShown: false }} component={InvestScreen} />  
          <Stack.Screen name="ProfileScreen" options={{ headerShown: false }} component={ProfileScreen} />  
          <Stack.Screen name="NotesScreen" options={{ headerShown: false }} component={NotesScreen} />  
          <Stack.Screen name="MailScreen" options={{ headerShown: false }} component={MailScreen} />  
          <Stack.Screen name="SettingsScreen" options={{ headerShown: false }} component={SettingsScreen} />  
          <Stack.Screen name="TasksScreen" options={{ headerShown: false }} component={TasksScreen} />  
          <Stack.Screen name="TeamsScreen" options={{ headerShown: false }} component={TeamsScreen} />  
          <Stack.Screen name="TimeSheetScreen" options={{ headerShown: false }} component={TimeSheetScreen} />  
          <Stack.Screen name="TodoScreen" options={{ headerShown: false }} component={TodoScreen} />  
          <Stack.Screen name="WalletScreen" options={{ headerShown: false }} component={WalletScreen} />  
      </Stack.Navigator>
    </NavigationContainer>  
  );      

};

export default App;

const styles = StyleSheet.create({
    tab: {
      activeColor: '#000',
      inactiveColor: '#000'
    }
})

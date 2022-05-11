import 'react-native-gesture-handler';

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

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

import HomeScreen from '../../screens/HomeScreen';
import ProfileScreen from './src/screens/bottom/ProfileScreen';
import DetailsScreen from '../../screens/bottom/DetailsScreen';
import Splash from './src/screens/Splash';
import Welcome from './src/screens/Welcome';

//bottom navigation screens
import { EventsScreen, PayrollScreen, SettingsScreen, CalendarScreen } from '../../screens/bottom';
import { Screen1, Screen2, Screen3, Screen4, Screen5 } from '../../screens/drawer';
import { createAppContainer } from "react-navigation";

// import { Bottom1, Bottom2, Bottom3, Bottom4 } from './src/screens/bottom/';
// import { Screen1, Screen2, Screen3, Screen4, Screen5 } from './src/screens/drawer'
// import { DrawerContent } from './src/navigators/DrawerContent';



const Stack = createStackNavigator(); 
// const Tab = createBottomTabNavigator();
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

function Screen_1() {
  return (
    <View style={{ flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#00B8D4'
      }}>
 
      <Text style={{color: '#FFFFFF', fontSize: 30, textAlign:'center'}}> This is Screen 1 ! </Text>
 
    </View>
  );
}
 
function Screen_2() {
  return (
    <View style={{ flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#EA80FC'
      }}>
 
      <Text style={{color: '#FFFFFF', fontSize: 30, textAlign:'center'}}> This is Screen 2 ! </Text>
 
    </View>
  );
}
 
function Screen_3() {
  return (
    <View style={{ flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#00C853'
      }}>
 
      <Text style={{color: '#FFFFFF', fontSize: 30, textAlign:'center'}}> This is Screen 3 ! </Text>
 
    </View>
  );
}

function Screen_4() {
  return (
    <View style={{ flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#00C853'
      }}>
 
      <Text style={{color: '#FFFFFF', fontSize: 30, textAlign:'center'}}> This is Screen 4 ! </Text>
 
    </View>
  );
}

function Screen_5() {
  return (
    <View style={{ flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#00C853'
      }}>
 
      <Text style={{color: '#FFFFFF', fontSize: 30, textAlign:'center'}}> This is Screen 5 ! </Text>
 
    </View>
  );
}

function CustomTabBar({ state, descriptors, navigation }) {
  return (
    
    <View style={styles.TabBarMainContainer} >

      {state.routes.map((route, index) => {
              const { options } = descriptors[route.key];
              const label =
                options.tabBarLabel !== undefined
                  ? options.tabBarLabel
                  : options.title !== undefined
                  ? options.title
                  : route.name;

              const isFocused = state.index === index;

              const onPress = () => {
                const event = navigation.emit({
                  type: 'tabPress',
                  target: route.key,
                });

                if (!isFocused && !event.defaultPrevented) {
                  navigation.navigate(route.name);
                }
              };

              return (
                <TouchableOpacity
                  key={index} 
                  accessibilityRole="button"
                  accessibilityState={isFocused ? { selected: true } : {}}
                  accessibilityLabel={options.tabBarAccessibilityLabel}
                  testID={options.tabBarTestID}
                  onPress={onPress}
                  style={isFocused ? styles.focus_button : styles.button} >

                    <Text style={isFocused ? styles.focus_textStyle : styles.TextStyle}> {label} </Text>

                </TouchableOpacity>
              );
            })}

    </View>
  );
}

const Tab = createBottomTabNavigator();
function AllTabs() {
  return (
    <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>

      <Tab.Screen 
        name="Screen 1" 
        component={Screen_1} />

      <Tab.Screen 
        name="Screen 2" 
        component={Screen_2} />

      <Tab.Screen 
        name="Screen 3" 
        component={Screen_3} />
      
      <Tab.Screen 
        name="Screen 4" 
        component={Screen_4} />
      
      <Tab.Screen 
        name="Screen 5" 
        component={Screen_5} />

    </Tab.Navigator>
  );
}

function myTabs() {
  return (
    <NavigationContainer>
        <AllTabs />
    </NavigationContainer>
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
        <Stack.Screen name="HomeScreen" options={{ headerShown: false }} component={AllTabs} />
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
    },
    TabBarMainContainer :{
      justifyContent: 'space-around', 
      height: 50, 
      flexDirection: 'row',
      width: '100%',
    },
     
    button: {
      height: 50,
      paddingTop:5,
      paddingBottom:5,
      backgroundColor: '#B0BEC5',
      justifyContent: 'center', 
      alignItems: 'center', 
      flexGrow: 1,
      borderRadius: 15,
      margin: 3,
    },
  
    focus_button: {
      height: 50,
      borderRadius: 20,
      paddingTop:5,
      paddingBottom:5,
      backgroundColor: '#E040FB',
      justifyContent: 'center', 
      alignItems: 'center', 
      flexGrow: 1
    },
     
    TextStyle:{
        color:'#FFFFFF',
        textAlign:'center',
        fontSize: 15
    },
    
    focus_textStyle:{
      color:'#000',
      textAlign:'center',
      fontSize: 20
  }
})

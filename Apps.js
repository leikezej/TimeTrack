// import 'react-native-gesture-handler';
// import React from 'react';

// // Import Navigators from React Navigation
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';

// // Import Screens
// import SplashScreen from './Screens/SplashScreen';
// import LoginScreen from './LoginScreen';
// import RegisterScreen from './Screens/RegisterScreen';
// import DrawerNavigationRoutes from './src/navigation/DrawerNavigationRoutes';

// const Stack = createStackNavigator();

// const Auth = () => {
//   // Stack Navigator for Login and Sign up Screen
//   return (
//     <Stack.Navigator initialRouteName="LoginScreen">
//       <Stack.Screen
//         name="LoginScreen"
//         component={LoginScreen}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="RegisterScreen"
//         component={RegisterScreen}
//         options={{
//           title: 'Register', //Set Header Title
//           headerStyle: {
//             backgroundColor: '#307ecc', //Set Header color
//           },
//           headerTintColor: '#fff', //Set Header text color
//           headerTitleStyle: {
//             fontWeight: 'bold', //Set Header text style
//           },
//         }}
//       />
//     </Stack.Navigator>
//   );
// };

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="SplashScreen">
//         {/* SplashScreen which will come once for 5 Seconds */}
//         <Stack.Screen
//           name="SplashScreen"
//           component={SplashScreen}
//           // Hiding header for Splash Screen
//           options={{headerShown: false}}
//         />
//         {/* Auth Navigator: Include Login and Signup */}
//         <Stack.Screen
//           name="Auth"
//           component={Auth}
//           options={{headerShown: false}}
//         />
//         {/* Navigation Drawer as a landing page */}
//         <Stack.Screen
//           name="DrawerNavigationRoutes"
//           component={DrawerNavigationRoutes}
//           // Hiding header for Navigation Drawer
//           options={{headerShown: false}}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;


// import 'react-native-gesture-handler';
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// import Login from './src/screens/Login';
// import Register from './src/screens/Register';

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator} from  '@react-navigation/stack'; 

// import HomeScreen from './src/screens/HomeScreen';
// import Splash from './src/screens/Splash';
// import Welcome from './src/screens/Welcome';
// import DrawerNavigationRoutes from './src/navigation/DrawerNavigationRoutes';

// const Stack = createStackNavigator();

// const Auth = () => {
//   return (
//      <Stack.Navigator initialRouteName="Welcome">
//         {/* <Stack.Screen name="Splash" options={{ headerShown: false }} component={Splash}/> */}
//         <Stack.Screen name="Welcome" options={{ headerShown: false }} component={Welcome}/>
//         <Stack.Screen name="Login" options={{ headerShown: false }} component={Login}/>
//         <Stack.Screen name="Register" options={{headerShown: false}} component={Register}/>
//         <Stack.Screen name="HomeScreen" options={{ headerShown: false }} component={HomeScreen}/>
//      </Stack.Navigator>
//   );      
// };

// const App = () => {
//   return  (
//     <NavigationContainer>
//         <Stack.Navigator initialRouteName="Splash">
//             <Stack.Screen
//                 name="Splash"
//                 component={Splash}
//                 // Hiding header for Splash Screen
//                 options={{headerShown: false}}
//             />
            
//             <Stack.Screen
//                 name="Welcome"
//                 component={Welcome}
//                 // Hiding header for Splash Screen
//                 options={{headerShown: false}}
//             />
            
//             <Stack.Screen
//                 name="Auth"
//                 component={Auth}
//                 options={{headerShown: false}}
//             />
            
//             <Stack.Screen
//                 name="DrawerNavigationRoutes"
//                 component={DrawerNavigationRoutes}
//                 // Hiding header for Navigation Drawer
//                 options={{headerShown: false}}
//             />
//         </Stack.Navigator>
//     </NavigationContainer>
//   )
// }
// export default App;

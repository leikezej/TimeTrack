// legit bottom nav bar

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import { Bottom1, Bottom2, Bottom3, Bottom4 } from '../screens/bottom';

const Tabs = createBottomTabNavigator();

const TabsNavigator  = () => {
     return (
        <Tabs.Navigator initialRouteName='HomeScreen'>
            <Tabs.Screen name="Bottom1" component={Bottom1} />
            <Tabs.Screen name="Bottom2" component={Bottom2} />
            <Tabs.Screen name="HomeScreen" component={HomeScreen} />
            <Tabs.Screen name="Bottom3" component={Bottom3} />
            <Tabs.Screen name="Bottom4" component={Bottom4} />
        </Tabs.Navigator>
     );
    };
export default TabsNavigator;
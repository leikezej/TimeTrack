import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../screens/HomeScreen';
import { Screen1, Screen2, Screen3 } from '../screens/drawer';

const Tab = createBottomNavigator();

function MyTabs {
     return (
         <Tab.Navigator>
            <Tab.Screen name="HomeScreen" component={HomeScreen} />
            <Tab.Screen name="Screen1" component={Screen1} />
            <Tab.Screen name="Screen2" component={Screen2} />
            <Tab.Screen name="Screen3" component={Screen3} />
        </Tab.Navigator>
     );
    };
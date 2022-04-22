import React from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import Home from '../screens/Homes';
import Tasks from '../screens/Tasks';

const Drawer = createDrawerNavigator();

const CustomDrawer = props => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: 20,
                    backgroundColor: '#f6f6f6',
                    marginBottom: 20
                    
                }}>
                    <View>
                        <Text> John Dow</Text>
                        <Text> John Dow</Text>
                    </View>
                    
                    <Image
                        source={{
                            uri: 'https://unsplash.com/photos/tv7upqk4ess',
                        }}
                        style={{ width: 60, height: 60, borderRadius: 30 }}
                    />
                </View>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <TouchableOpacity
                style={{
                    position: 'absolute',
                    right: 0,
                    left: 0,
                    bottom: 50,
                    backgroundColor: '#f6f6f6',
                    padding: 20,
                }}
            >
            <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: 'transparent',
                    elevation: 0,
                    shadowOpacity: 0,
                },
                headerTitle: ''.
            }}
            drawerContent={props => <CustomDrawer {...props} />}
        >
            <Drawer.Screen component={Home} name='Home' />
            <Drawer.Screen component={Tasks} name='Tasks' />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
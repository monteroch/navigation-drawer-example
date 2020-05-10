import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Dashboard } from '../screens/dashboard';
import { Settings } from '../screens/settings';
import { About } from '../screens/about';

export function MainStack(){

    const Drawer = createDrawerNavigator();

    return(
        <Drawer.Navigator initialRouteName="Dashboard">
            <Drawer.Screen name="dashboard" component={ Dashboard }/>
            <Drawer.Screen name="settings" component={ Settings }/>
            <Drawer.Screen name="about" component={ About }/>
        </Drawer.Navigator>
    );
};
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../screens/login';
import { SignUp } from '../screens/signup';

export function AuthStack(){

    const Stack = createStackNavigator();

    return(
        <Stack.Navigator>
            <Stack.Screen name="login" component={ Login } options={{headerShown:false}}/>
            <Stack.Screen name="signup" component={ SignUp } options={{headerShown:false}}/>
        </Stack.Navigator>
    );
}
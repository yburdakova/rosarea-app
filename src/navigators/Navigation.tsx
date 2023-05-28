import { View, Text } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ForgotPasswordScreen, HomeScreen, SignInScreen } from '../screens';


const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name='Sign In' component={SignInScreen}/>
                <Stack.Screen name='Home' component={HomeScreen}/>
                <Stack.Screen name='Forgot Password' component={ForgotPasswordScreen}/>
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
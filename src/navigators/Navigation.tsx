import { View, Text } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ConfirmEmailScreen, ConfirmResetScreen, ForgotPasswordScreen, HomeScreen, SignInScreen, SignUpScreen } from '../screens';

export type StackParamsList = {
    SignIn: undefined;
    Home: undefined;
    ForgotPassword: undefined;
    ResetPassword: undefined;
    SignUp: undefined;
    ConfirmEmail: undefined
}

const Stack = createNativeStackNavigator<StackParamsList>();

const Navigation = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name='SignIn' component={SignInScreen}/>
                <Stack.Screen name='Home' component={HomeScreen}/>
                <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen}/>
                <Stack.Screen name='ResetPassword' component={ConfirmResetScreen}/>
                <Stack.Screen name='SignUp' component={SignUpScreen}/>
                <Stack.Screen name='ConfirmEmail' component={ConfirmEmailScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
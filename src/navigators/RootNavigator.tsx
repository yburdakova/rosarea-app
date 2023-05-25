import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from '../screens/DetailsScreen';
import TabsNavigator, {TabStackParamsList} from './TabsNavigator';


export type RootStackParamList = {
    TabsStack: NavigatorScreenParams<TabStackParamsList>;
    DetailsScreen: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
    return (
        <RootStack.Navigator >
            <RootStack.Screen 
                name='TabsStack' 
                component={TabsNavigator}
                options={{
                    headerShown:false,
                }}/>
            <RootStack.Screen name='DetailsScreen' component={DetailsScreen}/>
        </RootStack.Navigator>
    );
};

export default RootNavigator;
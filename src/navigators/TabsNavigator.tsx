import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icons from '@expo/vector-icons/MaterialIcons';

import {HomeScreen, CartScreen, PaymentScreen, ProfileScreen} from '../screens'

export type TabStackParamsList = {
    Home: undefined;
    Cart: undefined;
    Payment: undefined;
    Profile: undefined;
}

const TabsStack = createBottomTabNavigator<TabStackParamsList>();

const TabsNavigator = () => {
    return (
        <TabsStack.Navigator 
            screenOptions={{
                tabBarShowLabel: false,
                
            }}
        >
            <TabsStack.Screen 
                name='Home' 
                component={HomeScreen} 
                options={{
                    headerShown:false,
                    tabBarIcon(props) {
                        return <Icons name='home' {...props}/>
                    },
                }}
            />
            <TabsStack.Screen 
                name='Cart' 
                component={CartScreen}
                options={{
                    headerShown:false,
                    tabBarIcon(props) {
                        return <Icons name='shopping-cart' {...props}/>
                    },
                }}
            />
            <TabsStack.Screen 
                name='Payment' 
                component={PaymentScreen}
                options={{
                    headerShown:false,
                    tabBarIcon(props) {
                        return <Icons name='account-balance-wallet' {...props}/>
                    },
                }}
                />
            <TabsStack.Screen 
                name='Profile' 
                    component={ProfileScreen}
                    options={{
                        headerShown:false,
                        tabBarIcon(props) {
                            return <Icons name='account-circle' {...props}/>
                        },
                    }}/>
        </TabsStack.Navigator>
    )
}

export default TabsNavigator
import { StyleSheet, Image, Text, View, useWindowDimensions } from 'react-native'
import React from 'react';
import { useFonts } from 'expo-font';


import { logo } from '../../assets';


const SignInScreen = () => {

    const { height, width } = useWindowDimensions();

    const font = useFonts({
        'Raleway-regular' : require('./../../assets/fonts/Raleway-Regular.ttf'),
        'Raleway-extraBold' : require('./../../assets/fonts/Raleway-ExtraBold.ttf'),
    });

    return (
        <View style={styles.root}>
            
            <Image source={logo} resizeMode='cover' style={{...styles.logo, width: width * 0.3, height: width * 0.3}}/>
            <Text style={styles.title}>Rosarea</Text>
            
        </View>
    )
}

export default SignInScreen

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20
    },
    logo: {
        maxWidth: 300,
        maxHeight: 300,
        marginTop: 70
    },
    title: {
        fontFamily: 'Raleway-xbold',
        fontSize: 36

    }
})
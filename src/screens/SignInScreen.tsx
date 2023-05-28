import React, {useState} from 'react';
import { StyleSheet, Image, Text, View, useWindowDimensions, TouchableHighlight } from 'react-native'

import { logo, apple, facebook, google } from '../../assets';
import { CustomInput, CustomButton, SocialAuthButton } from '../components';


const SignInScreen = () => {

    const { width } = useWindowDimensions();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const signInPress = () => {console.warn("Sing in pressed");}
    const forgotPasswordPress = () => {console.warn("Forgot Password pressed");}
    const signInPressFacebook = () => {console.warn("Facebook");}
    const signInPressGoogle = () => {console.warn("Google");}
    const signInPressApple = () => {console.warn("Apple");}
    const createNewAccount = () => {console.warn("Create a new account");}

    return (
        <View style={styles.root}>
            
            <Image 
                source={logo} 
                resizeMode='cover' 
                style={{...styles.logo, width: width * 0.3, height: width * 0.3}}/>
            <Text style={styles.title}>Rosarea</Text>
            <CustomInput 
                placeholder='Username' 
                value={username} 
                setValue={setUsername} 
                secureTextEntry={false}
            />
            <CustomInput 
                placeholder='Password' 
                value={password} 
                setValue={setPassword} 
                secureTextEntry
            />
            <CustomButton 
                text='Sign In' 
                onPress={signInPress}
                type='primary'
                
            />
            <CustomButton 
                text='Forgot password?'
                onPress={forgotPasswordPress}
                type='tertiary'
            />
            <View>
                <View style={styles.divider}>
                    <View style={styles.hr_line}/>
                    <Text style={styles.icons_title} numberOfLines={2}>Or continue with</Text>
                    <View style={styles.hr_line}/>
                </View>
                <View style={styles.icons_container}>
                    <SocialAuthButton logo={google} onPress={signInPressGoogle}/>
                    <SocialAuthButton logo={apple} onPress={signInPressApple}/>
                    <SocialAuthButton logo={facebook} onPress={signInPressFacebook}/>
                </View>
            </View>
        
            <CustomButton 
                text='Don`t have an account? Register now'
                onPress={createNewAccount}
                type='tertiary'
            />
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
        marginTop: 60,
        
    },
    title: {
        fontFamily: 'Raleway-xbold',
        fontSize: 36,
        marginBottom: 30,
    },
    icons_container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    divider:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    hr_line:{
        width: 50,
        backgroundColor: '#3AAA35',
        height: 1,
    },
    icons_title:{
        fontFamily: 'Raleway-bold',
        fontSize: 16,
        textAlign: 'center',
        color: '#3AAA35',
        marginHorizontal: 10
    },
    
})
import React, {useState} from 'react';
import { StyleSheet, Image, Text, View, useWindowDimensions } from 'react-native';
import { useForm, FormState } from 'react-hook-form';

import { logo, apple, facebook, google } from '../../assets';
import { CustomInput, CustomButton, SocialAuthButton } from '../components';
import { StackParamsList } from '../../constants/types';
import { useNavigation } from '@react-navigation/native';

import { userName, userPassword } from '../../constants';


const SignInScreen = () => {

    const { width } = useWindowDimensions();

    const { control, handleSubmit, formState: {errors} } = useForm();
    console.log(errors);
    const navigation = useNavigation<StackParamsList>();

    const signInPress = (data:any) => {
        console.log(data);
        
        navigation.navigate('Home');
    }
    const forgotPasswordPress = () => {
        navigation.navigate('ForgotPassword');
    }
    const signInPressFacebook = () => {console.warn("Facebook");}
    const signInPressGoogle = () => {console.warn("Google");}
    const signInPressApple = () => {console.warn("Apple");}
    const createNewAccount = () => {navigation.navigate('SignUp');}

    return (
        <View style={styles.root}>
            
            <Image 
                source={logo} 
                resizeMode='cover' 
                style={{...styles.logo, width: width * 0.3, height: width * 0.3}}/>
            <Text style={styles.title}>Rosarea</Text>
            <CustomInput
                name='username'
                control={control}
                placeholder='Username' 
                secureTextEntry={false}
                rules={{
                    required: 'Username is required', 
                    validate: value => value == userName || 'Username doesn`t exist'
                }}
            />
            <CustomInput 
                name='password'
                control={control}
                placeholder='Password' 
                secureTextEntry={true}
                rules={{
                    required: 'Password is required',
                    minLength: {value: 4, message: 'Password must be at least 4 characters'},
                    validate: value => value == userPassword || 'Password is incorrect'
                }}
            />
            <CustomButton 
                text='Sign In' 
                onPress={handleSubmit(signInPress)}
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
                text='Don`t have an account?'
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
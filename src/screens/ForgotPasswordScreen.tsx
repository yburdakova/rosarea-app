import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

import { CustomInput, CustomButton, } from '../components';
import { StackParamsList } from '../../constants/types';
import { userEmail, EMAIL_REGEX } from '../../constants';


const ForgotPasswordScreen = () => {

    const { control, handleSubmit, formState: {errors}, watch } = useForm();

    const navigation = useNavigation<StackParamsList>();

    const onResendPress = () => {navigation.navigate('ResetPassword')}
    const signInPress = () => {navigation.navigate('SignIn')}

    return (
        <View style={styles.root}>
            <Text style={styles.title}>Reset your password</Text>
            <CustomInput 
                name='email'
                control={control}
                placeholder='Email' 
                secureTextEntry={false}
                rules={{
                    required: 'Email is required',
                    pattern: {value: EMAIL_REGEX, message: 'Email has invalid format'},
                    validate: value => value == userEmail || 'Email does not exists'
                }}
            />

            <CustomButton 
                text='Reset Password' 
                onPress={handleSubmit(onResendPress)}
                type='primary'
                
            />
            <CustomButton 
                text='Back to Sign In'
                onPress={signInPress}
                type='tertiary'
            />  
        </View>
    )
}

export default ForgotPasswordScreen

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20
    },
    title: {
        fontFamily: 'Raleway-xbold',
        fontSize: 28,
        marginVertical: 30,
    },
    btn_container:{
        width: '100%',
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-around',
    }
})
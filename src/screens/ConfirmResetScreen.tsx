import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

import { CustomInput, CustomButton, } from '../components';
import { StackParamsList } from '../../constants/types';

import { code } from '../../constants';

const ConfirmResetScreen = () => {

    const { control, handleSubmit, formState: {errors}, watch } = useForm();
    const passwordValue = watch('password');

    const navigation = useNavigation<StackParamsList>();

    const signInPress = () => {navigation.navigate('SignIn')}
    const onCreatePasswordPress = () => {navigation.navigate('Home');}
    const onResendPress = () => {console.warn("Resend code");}

    return (
        <View style={styles.root}>
            <Text style={styles.title}>Create new password</Text>
            <CustomInput 
                name='code'
                control={control}
                placeholder='Enter confirmation code' 
                secureTextEntry
                rules={{
                    validate: value => value === code || 'Code does not match'
                }}
            />
            <CustomInput 
                name='password'
                control={control}
                placeholder='Enter new password' 
                secureTextEntry
                rules={{
                    required: 'Password is required',
                    minLength: {value: 4, message: 'Password must be at least 4 characters'},
                    maxLength: {value: 16, message: 'Password must be max 16 characters'}
                }}
            />
            <CustomInput 
                name='password-repeat'
                control={control}
                placeholder='Repeat Password' 
                secureTextEntry
                rules={{
                    validate: value => value === passwordValue || 'Password does not match'
                }}
            />

            <CustomButton 
                text='Submit' 
                onPress={handleSubmit(onCreatePasswordPress)}
                type='primary'
                
            />
            <View style={styles.btn_container}>
                <CustomButton 
                    text='Resend code'
                    onPress={onResendPress}
                    type='tertiary'
                />
                <CustomButton 
                    text='Back to Sign In'
                    onPress={signInPress}
                    type='tertiary'
                />  
            </View>
            

        </View>
    )
}

export default ConfirmResetScreen

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
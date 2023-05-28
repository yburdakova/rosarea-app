import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native'

import { CustomInput, CustomButton, } from '../components';

const ForgotPasswordScreen = () => {

    const [email, setEmail] = useState('');

    const onResendPress = () => {console.warn("Resend code");}
    const signInPress = () => {console.warn("Sing In pressed");}

    return (
        <View style={styles.root}>
            <Text style={styles.title}>Reset your password</Text>
            <CustomInput 
                placeholder='Enter Username' 
                value={email} 
                setValue={setEmail} 
                secureTextEntry={false}
            />

            <CustomButton 
                text='Reset Password' 
                onPress={onResendPress}
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
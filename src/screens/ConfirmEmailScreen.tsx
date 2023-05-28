import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CustomInput, CustomButton, } from '../components';

const ConfirmEmailScreen = () => {

    const [username, setUsername] = useState('');
    const [code, setCode] = useState('');

    const navigation = useNavigation();
    
    const signInPress = () => {navigation.navigate('SignIn');}
    const onConfirmPress = () => {navigation.navigate('Home');}
    const onResendPress = () => {console.warn("Resend code");}

    return (
        <View style={styles.root}>
            <Text style={styles.title}>Confirm your email</Text>
            
            <CustomInput 
                placeholder='Enter confirmation code' 
                value={code}
                setValue={setCode} 
                secureTextEntry={false}
            />

            <CustomButton 
                text='Confirm' 
                onPress={onConfirmPress}
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

export default ConfirmEmailScreen

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
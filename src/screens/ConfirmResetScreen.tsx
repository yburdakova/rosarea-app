import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import { CustomInput, CustomButton, } from '../components';
import { StackParamsList } from '../../constants/types';

const ConfirmResetScreen = () => {

    const [password, setPassword] = useState('');
    const [code, setCode] = useState('')
    
    const navigation = useNavigation<StackParamsList>();

    const signInPress = () => {navigation.navigate('SignIn')}
    const onCreatePasswordPress = () => {navigation.navigate('Home');}
    const onResendPress = () => {console.warn("Resend code");}

    return (
        <View style={styles.root}>
            <Text style={styles.title}>Create new password</Text>
            <CustomInput 
                placeholder='Enter Code' 
                value={code} 
                setValue={setCode} 
                secureTextEntry={false}
            />
            <CustomInput 
                placeholder='Enter new passord' 
                value={password}
                setValue={setPassword} 
                secureTextEntry={true}
            />

            <CustomButton 
                text='Submit' 
                onPress={onCreatePasswordPress}
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
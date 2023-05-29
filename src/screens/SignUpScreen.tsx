import React, {useState} from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { apple, facebook, google } from '../../assets';
import { CustomInput, CustomButton, ModalWindow, TermOfUse, PrivacyPolicy, SocialAuthButton } from '../components';

import { StackParamsList } from '../../constants/types';

const SignUpScreen = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [isTermOfUseVisible, setIsTermOfUseVisible] = useState(false);
    const [isPrivacyPolicyVisible, setIsPrivacyPolicyVisible] = useState(false);

    const navigation = useNavigation<StackParamsList>();

    const signUpPress = () => {navigation.navigate('ConfirmEmail')}
    const signInPress= () => {navigation.navigate('SignIn')}
    const signInPressFacebook = () => {console.warn("Facebook");}
    const signInPressGoogle = () => {console.warn("Google");}
    const signInPressApple = () => {console.warn("Apple");}
    const termOfUseModal = () => setIsTermOfUseVisible(() => !isTermOfUseVisible);
    const privacyPolicyModal = () => setIsPrivacyPolicyVisible(() => !isPrivacyPolicyVisible);

    return (
        <View style={styles.root}>
            <Text style={styles.title}>Create an account</Text>
            <CustomInput 
                placeholder='Enter Username' 
                value={username} 
                setValue={setUsername} 
                secureTextEntry={false}
            />
            <CustomInput 
                placeholder='Enter Email' 
                value={email}
                setValue={setEmail} 
                secureTextEntry={false}
            />
            <CustomInput 
                placeholder='Enter Password' 
                value={password} 
                setValue={setPassword} 
                secureTextEntry
            />
            <CustomInput 
                placeholder='Repeat Password' 
                value={passwordRepeat} 
                setValue={setPasswordRepeat} 
                secureTextEntry
            />
            <CustomButton 
                text='Register' 
                onPress={signUpPress}
                type='primary'
                
            />
            <View>
                <Text style={styles.text}>
                    By registering, you confirm that you accept our 
                        <Text style={styles.link} onPress={termOfUseModal}>Terms of Use</Text> and <Text style={styles.link} onPress={privacyPolicyModal}>Privacy Policy</Text> 
                </Text>
            </View>
            <View>
                <View style={styles.devider}>
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
                text='Have an account? Sign In'
                onPress={signInPress}
                type='tertiary'
            />
        
            <Modal visible={isTermOfUseVisible} animationType='slide'>
                <ModalWindow 
                    content={<TermOfUse/>} 
                    title='Term of Use' 
                    date='05/24/2023' 
                    onPress={termOfUseModal}
                />
            </Modal>

            <Modal visible={isPrivacyPolicyVisible} animationType='slide'>
                <ModalWindow 
                    content={<PrivacyPolicy/>} 
                    title='Privacy Policy' 
                    date='05/24/2023' 
                    onPress={privacyPolicyModal
                }/>
            </Modal>
        </View>
    )
}

export default SignUpScreen

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
    text:{
        fontFamily: 'Raleway-regular',
        fontSize: 16,
        color: 'gray',
        margin: 10,
        textAlign: 'center',
    },
    link:{
        color: '#3AAA35', 
        fontFamily: 'Raleway-bold',
        textDecorationLine:'underline'
    },
    icons_container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    devider:{
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
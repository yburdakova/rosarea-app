import React, {useState} from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

import { CustomInput, CustomButton, ModalWindow, TermOfUse, PrivacyPolicy, SocialAuthButton, SocialSingIn } from '../components';

import { StackParamsList } from '../../constants/types';
import { EMAIL_REGEX  } from '../../constants';



const SignUpScreen = () => {

    const [isTermOfUseVisible, setIsTermOfUseVisible] = useState(false);
    const [isPrivacyPolicyVisible, setIsPrivacyPolicyVisible] = useState(false);
    const [username, setUsername] = useState<string>("username");
    const [password, setPassword] = useState<string>("password");
    const [email, setEmail] = useState<string>("email");

    const navigation = useNavigation<StackParamsList>();
    const { control, handleSubmit, formState: {errors}, watch } = useForm();
    const passwordValue = watch('password');

    const signUpPress = () => {navigation.navigate('ConfirmEmail')}
    const signInPress= () => {navigation.navigate('SignIn')}
    const termOfUseModal = () => setIsTermOfUseVisible(() => !isTermOfUseVisible);
    const privacyPolicyModal = () => setIsPrivacyPolicyVisible(() => !isPrivacyPolicyVisible);

    return (
        <View style={styles.root}>
            <Text style={styles.title}>Create an account</Text>
            <CustomInput
                name='username'
                control={control}
                placeholder='Username (3-20 characters)' 
                secureTextEntry={false}
                rules={{
                    required: 'Username is required', 
                    minLength: {value: 3, message: 'Username must be at least 3 characters'},
                    maxLength: {value: 20, message: 'Username must be max 20 characters'},
                    validate: value => value !== name || 'Username already exists'
                }}
                inputValue={username}
                onChangeValue={setUsername}
            />
            <CustomInput 
                name='email'
                control={control}
                placeholder='Email' 
                secureTextEntry={false}
                rules={{
                    required: 'Email is required',
                    pattern: {value: EMAIL_REGEX, message: 'Email has invalid format'},
                    validate: value => value !== email || 'Email already exists'
                }}
                inputValue={email}
                
            />
            <CustomInput 
                name='password'
                control={control}
                placeholder='Password (4-16 characters)' 
                secureTextEntry
                rules={{
                    required: 'Password is required',
                    minLength: {value: 4, message: 'Password must be at least 4 characters'},
                    maxLength: {value: 16, message: 'Password must be max 16 characters'}
                }}
                inputValue={password}
                
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
                text='Register' 
                onPress={handleSubmit(signUpPress)}
                type='primary'
                
            />
            {/* Visual this.state */}
            <Text>{JSON.stringify({username, password, email})}</Text>

            <View>
                <Text style={styles.text}>
                    By registering, you confirm that you accept our <Text style={styles.link} onPress={termOfUseModal}>Terms of Use</Text> and <Text style={styles.link} onPress={privacyPolicyModal}>Privacy Policy</Text> 
                </Text>
            </View>
            <SocialSingIn/>

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
    }
})
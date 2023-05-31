import { StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react';
import { StackParamsList } from '../../constants/types';
import { useNavigation } from '@react-navigation/native';

import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';

import SocialAuthButton from './SocialAuthButton';
import { google, apple, facebook } from '../../assets';

WebBrowser.maybeCompleteAuthSession();

const SocialSingIn = () => {

    const [token, setToken] = useState("");
    const [userInfo, setUserInfo] = useState(null);

    const navigation = useNavigation<StackParamsList>();

    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: '717454502859-n0l1a998s2uf4vv6o6fs8f76e05q5qjb.apps.googleusercontent.com',
        androidClientId: '717454502859-d5sv59rh5kcn2kcudn7vual38rd6khtj.apps.googleusercontent.com',
        iosClientId: '717454502859-ql54gr73vmmauptv0mc5e2oamjdahrrk.apps.googleusercontent.com',
    });

    useEffect(() => {
        if (response?.type === "success") {
            setToken(response.authentication?.accessToken);
            getUserInfo();
        }
    }, [response, token]);
    
    const getUserInfo = async () => {
        try {
            const response = await fetch(
                "https://www.googleapis.com/userinfo/v2/me",
                {
                headers: { Authorization: `Bearer ${token}` },
                }
            );
            const user = await response.json();
            setUserInfo(user);
        } catch (error) {
            // Add your own error handler here
        }
    };


    const signInPressFacebook = () => {console.warn("Facebook");}
    
    const signInPressGoogle = () => {
        promptAsync();
        console.warn("Google"); 
        
    }
    
    if (userInfo !== null) {
        navigation.navigate('Home', {user: {
            name: userInfo.name,
            email: userInfo.email,
            avatar: userInfo.picture
        }});
        
    }

        const signInPressApple = () => {console.warn("Apple");}

        

    return (
        <View>
            <View style={styles.divider}>
                <View style={styles.hr_line}/>
                <Text style={styles.icons_title} numberOfLines={2}>Or continue with</Text>
                <View style={styles.hr_line}/>
            </View>
            <View style={styles.icons_container}>
                <SocialAuthButton logo={google} onPress={signInPressGoogle} disabled={!request}/>
                <SocialAuthButton logo={apple} onPress={signInPressApple}/>
                <SocialAuthButton logo={facebook} onPress={signInPressFacebook}/>
            </View>
        </View>
    )
}

export default SocialSingIn

const styles = StyleSheet.create({
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
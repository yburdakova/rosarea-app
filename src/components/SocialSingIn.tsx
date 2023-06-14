import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react';
import { StackParamsList, UserProps } from '../../constants/types';
import { useNavigation } from '@react-navigation/native';

import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import * as Facebook from 'expo-auth-session/providers/facebook';
import * as AppleAuthentication from 'expo-apple-authentication';

import SocialAuthButton from './SocialAuthButton';
import { google, apple, facebook, defaultApppleUser } from '../../assets';

WebBrowser.maybeCompleteAuthSession();

const SocialSingIn = () => {

    const [token, setToken] = useState<string | undefined>("");
    const [authAPI, setAuthAPI] = useState<string | undefined>("");
    const [userInfo, setUserInfo] = useState<UserProps | null>(null);
    const navigation = useNavigation<StackParamsList>();


    //Google authentication

    const [goRequest, goResponse, goPromptAsync] = Google.useAuthRequest({
        expoClientId: '717454502859-n0l1a998s2uf4vv6o6fs8f76e05q5qjb.apps.googleusercontent.com',
        androidClientId: '717454502859-d5sv59rh5kcn2kcudn7vual38rd6khtj.apps.googleusercontent.com',
        iosClientId: '717454502859-ql54gr73vmmauptv0mc5e2oamjdahrrk.apps.googleusercontent.com',
    });

    useEffect(() => {
        if (goResponse?.type === "success") {
            setToken(goResponse.authentication?.accessToken);
            getGoogleUserInfo();
        }
    }, [goResponse, token]);

    const getGoogleUserInfo = async () => {
        try {
            const goResponse = await fetch(
                "https://www.googleapis.com/userinfo/v2/me",
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            const goUser = await goResponse.json();
            setUserInfo(goUser);
        } catch (error) {
            console.log(error);
        }
    };

    const signInPressGoogle = async () => {
        setAuthAPI('google');
        await goPromptAsync();
    }

    //Facebook authentication

    const [fbRequest, fbResponse, fbPromptAsync] = Facebook.useAuthRequest({
        clientId: "980537389748554",
    });

    useEffect(() => {
        if (fbResponse?.type === "success") {
            setToken(fbResponse.authentication?.accessToken);
            getFacebookUserInfo();
        }
    }, [fbResponse, token]);

    const getFacebookUserInfo = async () => {
        try {
            const fbResponse = await fetch(
                `https://graph.facebook.com/me?access_token=${token}&fields=id,name,picture.type(large)`
            );
            const fbUser = await fbResponse.json();
            if (fbUser.picture && fbUser.picture.data) {
                setUserInfo(fbUser);
            } else {
                setUserInfo({ ...fbUser, picture: { data: { url: '' } } });
            }
        } catch (error) {
            console.log(error);
        }
    };

    const signInPressFacebook = async () => {
        setAuthAPI('facebook');
        await fbPromptAsync();
        console.log(userInfo);

    }

    // Apple authentication

    const getAppleUserInfo = async (credential: AppleAuthentication.AppleAuthenticationCredential, defaultApppleUser:string) => {
        try {
            const defaultAppleUserAvatar = defaultApppleUser ;
            const credentialState = await AppleAuthentication.getCredentialStateAsync(credential.user);
            if (credentialState === AppleAuthentication.AppleAuthenticationCredentialState.AUTHORIZED) {
                const appleUser = {
                    name: credential.fullName?.givenName || "Apple User",
                    
                };
                console.log(appleUser);

                setUserInfo(appleUser);
                setToken(`${credential.identityToken}`);
                setAuthAPI('apple')
            } else {
                console.log('Apple credential not authorized');
            }
        } catch (error) {
            console.log(error);
        }
    };

    const signInPressApple = async () => {
        try {
            const credential = await AppleAuthentication.signInAsync({
                requestedScopes: [
                    AppleAuthentication.AppleAuthenticationScope.FULL_NAME, // Request full name scope
                    AppleAuthentication.AppleAuthenticationScope.EMAIL,
                ],
            });
            const defaultAppleUser = require('../../assets/icons/defaultAppleUser.png') // Define the default picture value
        await getAppleUserInfo(credential, defaultAppleUser);
        } catch (e: any) {
            if (e.code === 'ERR_REQUEST_CANCELED') {
                console.log('user canceled the sign-in flow');
            } else {
                console.log(e.message);
            }
        }
    };


    useEffect(() => {
        if (token !== undefined && token !== "" && userInfo !== null) {
            navigation.navigate("Home", {
                user: {
                    name: userInfo.name,
                    avatar: authAPI === "facebook" ? userInfo.picture.data.url : userInfo.picture
                },
                setUserInfo
            });
        }
    }, [navigation, userInfo, token, authAPI]);

    return (
        <View>
            <View style={styles.divider}>
                <View style={styles.hr_line} />
                <Text style={styles.icons_title} numberOfLines={2}>Or continue with</Text>
                <View style={styles.hr_line} />
            </View>
            <View style={styles.icons_container}>
                <SocialAuthButton logo={google} onPress={signInPressGoogle} disabled={!goRequest} />
                <SocialAuthButton logo={apple} onPress={signInPressApple} />
                <SocialAuthButton logo={facebook} onPress={signInPressFacebook} disabled={!fbRequest} />
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
    divider: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    hr_line: {
        width: 50,
        backgroundColor: '#3AAA35',
        height: 1,
    },
    icons_title: {
        fontFamily: 'Raleway-bold',
        fontSize: 16,
        textAlign: 'center',
        color: '#3AAA35',
        marginHorizontal: 10
    },
})
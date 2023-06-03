import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React from 'react';
import { StackParamsList } from '../../constants/types';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = ({route}:any) => {

const { user, setUserInfo } = route.params;
const navigation = useNavigation<StackParamsList>();

const handleLogOff = () => {
    navigation.reset({
        index: 0,
        routes: [{ name: 'SignIn' }],
    });
    setUserInfo(null);
}

    return (
        <View>
            <View style={styles.container}>
            <Image style={styles.avatar} source={{uri: user.avatar || 'placeholder_image_url'}}/>
                <View style={styles.welcomeContainer}>
                    <Text style={styles.welcomeName}>{user.name}</Text>
                    <Text style={styles.welcomeName}>{user.email}</Text>
                </View>
            </View>
            <Button title='LOG OFF' onPress={handleLogOff}/>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingVertical: 24,
        flexDirection: "row",
        alignItems:'center',
        gap: 8,
    },
    avatar: {
        width: 60,
        aspectRatio: 1,
        borderRadius: 60,
    },
    welcomeContainer: {
        flex:1,
    },
    welcomeName: {
        fontSize:18,
        fontWeight: '600',
        marginBottom: 8,
    },
    welcomeSubTitle:{
        fontSize:18,
    }
})
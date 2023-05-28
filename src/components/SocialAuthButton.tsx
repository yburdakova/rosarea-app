import { StyleSheet, TouchableHighlight, Image, View } from 'react-native'
import React from 'react'

import { socialAuthButtonProps } from '../../constants/types'

const SocialAuthButton = ({ onPress, logo }: socialAuthButtonProps) => {
    return (
        <TouchableHighlight
            onPress={onPress} 
            underlayColor='white'
        >
            <View style={styles.icon_item}>
                <Image source={logo} style={styles.icon}/>
            </View>
        </TouchableHighlight>
    )
}

export default SocialAuthButton

const styles = StyleSheet.create({
    icon_item:{
        borderColor: '#3AAA35',
        borderWidth: 1,
        borderRadius: 20,
        margin:5,
        padding:10,
        shadowOpacity: 0.2
    },
    icon:{
        width:60,
        height:60,
    },
})
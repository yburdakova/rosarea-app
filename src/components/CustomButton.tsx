import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react';

import { custiomButtonProps } from '../../constants/types';
import { COLORS } from '../../constants';

const CustomButton = ({text, onPress, type = 'primary'}:custiomButtonProps) => {
    return (
        <Pressable 
            style={[ 
                styles.container, 
                {backgroundColor: type === 'primary'? COLORS.primary : type === 'tertiary' ? COLORS.tertiary : COLORS.secondary}
            ]}
            onPress={onPress} 
            type={type}
        >
            <Text style={[
                styles.text, 
                {color: type === 'primary' ? 'white' : type === 'secondary' ? '#3AAA35' : 'gray'},
                {fontSize: type == 'tertiary' ? 14 : 20}
            ]}>
                {text}
            </Text>
        </Pressable>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    container: {
        width: '90%',
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal:20,
        margin:10,
        alignItems:'center'
    },
    text:{
        fontFamily: 'Raleway-bold',
    }
})